import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import List from './components/List'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <aside className='bg-gray-700 bg-opacity-40 py-10 h-screen flex flex-col items-center'>
        <Header />
        <NavBar />
      </aside>
      {/* <main className='grid grid-cols-3'> */}
        {/* <Card /> */}
        {/* <Card /> */}
        {/* <Card /> */}
        <Card />
      {/* </main> */}
    </>
  )
}

export default App
