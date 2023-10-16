const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const CLIENT_ID = import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID;
const REDIRECT_URI = 'http://localhost:5173/'; 
const RESPONSE_TYPE = 'token';

/* AUTHORIZATION CODE WITH PKCE FLOW */
// Creating Auth Code Verifier
function generateRandomString(length) {
  let text = '';
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

// Hashing using SHA256 algorithm
const digest = await window.crypto.subtle.digest('SHA-256', data);

// Returns bas64 representation of digest
async function generateCodeChallenge(codeVerifier) {
  function base64encode(string) {
    return btoa(String.fromCharCode.apply(null, new Uint8Array(string)))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
  }

  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const digest = await window.crypto.subtle.digest('SHA-256', data);

  return base64encode(digest);
}

// Requesting user authorization
let codeVerifier = generateRandomString(128);
generateCodeChallenge(codeVerifier).then(codeChallenge => {
  let state = generateRandomString(16);
  let scope = 'user-read-private user-read-email';

  localStorage.setItem('code_verifier', codeVerifier);

  let args = new URLSearchParams({
    response_type: 'code',
    client_id: CLIENT_ID,
    scope: scope,
    redirect_uri: REDIRECT_URI,
    state: state,
    code_challenge_method: 'S256',
    code_challenge: codeChallenge
  });

  window.location = 'https://accounts.spotify.com/authorize?' + args;
});

// Saving code parameter for access token request
const urlParams = new URLSearchParams(window.location.search);
let code = urlParams.get('code');


let codeVerifierStored = localStorage.getItem('code_verifier');
let body = new URLSearchParams({
  grant_type: 'authorization_code',
  code: code,
  redirect_uri: REDIRECT_URI,
  client_id: CLIENT_ID,
  code_verifier: codeVerifierStored
});

const response = fetch('https://accounts.spotify.com/api/token', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: body
})
  .then(response => {
    if (!response.ok) {
      throw new Error('HTTP status ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    localStorage.setItem('access_token', data.access_token);
  })
  .catch(error => {
    console.error('Error:', error);
  });


const Authentication = () => {
  const handleLoginClick = () => {
    const authUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;
    window.location = authUrl;
  };

  return (
    <button className='bg-green-800 hover:border-green-500' onClick={handleLoginClick}>
      Login to Spotify
    </button>
  );
};

export default Authentication;
