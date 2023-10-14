import React, { useEffect } from 'react';
const CLIENT_ID = import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID; 
const CLIENT_SECRET = import.meta.env.VITE_APP_SPOTIFY_CLIENT_SECRET;
import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import List from './components/List'
import NavBar from './components/NavBar'

function App() {
  useEffect(() => {
    // Spotify API Access Token
    let authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    };
    fetch('https://accounts.spotify.com/api/token', authParameters)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to retrieve access token');
        }
        return response.json();
      })
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  }, [])

  return (
    <div className="flex w-screen h-screen">
      <aside className="bg-gray-700 bg-opacity-40 py-10 flex flex-col items-center w-1/6">
        <Header />
        <NavBar />
      </aside>
      <main className="mx-10 my-4 grid grid-cols-3 gap-4 w-5/6">
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
              // content={List}
              className='col-span-3'
            />
          </div> 
      </main>
    </div>

  );
}

export default App
