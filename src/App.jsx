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
  const accessToken = localStorage.getItem('access_token');

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
                <List />
                
              }
              className='col-span-3'
            />
          </div> 
      </main>
    </div>

  );
}

export default App
