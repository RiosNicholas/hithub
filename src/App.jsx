import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import List from './components/List'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <aside>
        <Header />
        <NavBar />
      </aside>
      <main className='grid grid-cols-3'>
        <Card />
        <Card />
        <Card />
        <Card />
      </main>
    </>
  )
}

export default App
