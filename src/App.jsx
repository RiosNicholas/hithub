import React, { useEffect, useState } from 'react';
const CLIENT_ID = import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID; 
const CLIENT_SECRET = import.meta.env.VITE_APP_SPOTIFY_CLIENT_SECRET;
import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import List from './components/List'
import NavBar from './components/NavBar'
import Authentication from './components/Authentication';

function App() {
  
  const [accessToken, setAccessToken] = useState("");
  useEffect(() => {
    // Spotify API Access Token
    const authParameters = {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }

    fetch('https://accounts.spotify.com/api/token', authParameters)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to retrieve access token');
        }
        return response.json();
      })
      .then(data => setAccessToken(data.access_token))
      .catch(error => console.error('Error:', error))
  }, [])

  /* SPOTIFY ACCOUNT AUTHENTICATION */
  const redirectToAuthCodeFlow = async(CLIENT_ID) => {
    //TODO
  }

  /* FETCH USER PROFILE WITH ACCESS TOKEN */
  const fetchProfile = async(token) => {
    try {
      const result = await fetch("https://api.spotify.com/v1/me", {
        method: "GET", 
        headers: { Authorization: 'Bearer ' + accessToken }
      });
      
      if (result.ok) {
        const profileData = await result.json();
        return profileData;
      } else {
        throw new Error('Failed to fetch user profile');
      }
    } catch (error) {
      console.error('Error:', error);
    }

  }
  
  return (
    <div className="flex w-screen h-screen">
      <aside className="bg-gray-700 bg-opacity-40 py-10 flex flex-col items-center w-1/4 lg:w-1/6">
        <Header />
        <NavBar />
        <Authentication />
      </aside>
      <main className="mx-10 my-4 grid grid-cols-3 gap-4 w-3/4 lg:w-5/6">
          <Card 
            title='Top Artist' 
          />
          <Card 
            title='Top Genre' 
          />
          <Card 
            title='Minutes Played' 
          />
          <div className="col-span-3">
            <Card 
              title='Top Tracks of the Month'
              content={
                <List 
                  accessToken = {accessToken}
                />
                
              }
              className='col-span-3'
            />
          </div> 
      </main>
    </div>

  );
}

export default App
