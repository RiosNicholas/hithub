import React, { useState, useEffect } from "react";

const CLIENT_ID = import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_APP_SPOTIFY_CLIENT_SECRET;
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const REDIRECT_URI = 'http://localhost:5173'; 
const RESPONSE_TYPE = 'token';

const params = new URLSearchParams(window.location.search);
const code = params.get("code");

export async function redirectToAuthCodeFlow(clientId) {
    const verifier = generateCodeVerifier(128);
    const challenge = await generateCodeChallenge(verifier);

    localStorage.setItem("verifier", verifier);

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("response_type", "code");
    params.append("redirect_uri", REDIRECT_URI);
    params.append("scope", "user-read-private user-read-email");
    params.append("code_challenge_method", "S256");
    params.append("code_challenge", challenge);

    document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
}

function generateCodeVerifier(length) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

async function generateCodeChallenge(codeVerifier) {
    const data = new TextEncoder().encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}

export async function getAccessToken(clientId, code) {
    const verifier = localStorage.getItem("verifier");

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("grant_type", "authorization_code");
    params.append("code", code);
    params.append("redirect_uri", REDIRECT_URI);
    params.append("code_verifier", verifier);

    const result = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params
    });

    const { access_token } = await result.json();
    return access_token;
}


const Authentication = ( ) => {
  const handleLoginClick = async() => {
    if (!code) {
        redirectToAuthCodeFlow(CLIENT_ID);
    } else {
        const accessToken = await getAccessToken(CLIENT_ID, code);
        localStorage.setItem('access_token', accessToken); 
        console.log(accessToken)
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    if (code) {
      (async () => {
        const accessToken = await getAccessToken(CLIENT_ID, code);
        localStorage.setItem('access_token', accessToken);
        console.log(accessToken);
      })();
    }
  }, []);

  return (
    <button className='bg-green-800 hover:border-green-500' onClick={handleLoginClick}>
      Login to Spotify
    </button>
  );
};

export default Authentication;
