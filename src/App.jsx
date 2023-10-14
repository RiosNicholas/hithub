import React from 'react';
const CLIENT_ID = import.meta.env.CLIENT_ID; 
const CLIENT_SECRET = import.meta.env.CLIENT_SECRET;
import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import List from './components/List'
import NavBar from './components/NavBar'

function App() {

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
              content={List}
              className='col-span-3'
            />
          </div> 
      </main>
    </div>

  );
}

export default App
