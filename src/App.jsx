import React from 'react';
const API_KEY = import.meta.env.VITE_APP_API_KEY;
import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import List from './components/List'
import NavBar from './components/NavBar'

function App() {

  return (
    <div className="flex">
      <aside className="bg-gray-700 bg-opacity-40 py-10 h-screen flex flex-col items-center">
        <Header />
        <NavBar />
      </aside>
      <main className="mx-10 my-4 grid grid-cols-3 gap-4">
          <Card 
            title='Top Artist' 
          />
          <Card 
            title='Top Genre' 
          />
          <Card 
            title='Minutes Played' 
          />
          <section className="col-span-3">
            <Card 
              title='Top Tracks of the Month'
              content={List}
            />
          </section>
      </main>
    </div>
  )
}

export default App
