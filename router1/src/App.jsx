import { useState } from 'react'
import {Link ,  Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home.jsx'
import { Career } from './pages/Career.jsx'
import Books from './pages/books.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav>
      <ul>
        <li><Link to = "/">home </Link></li>
        <li><Link to = "/books">books</Link></li>
      </ul>
    </nav>
    <Routes>
       <Route path='/' element={<Home/>} />
        <Route path='/books' element={<Books/>} />
        <Route path='/books/:id' element={<Career/>} />
   
    </Routes>

    </>
    
  )
}

export default App
