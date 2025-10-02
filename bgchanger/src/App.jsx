import { useState } from 'react'

import './App.css'


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full  h-screen duration-200" style={{backgroundColor:color}} >
    
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-2  rounded-full'>
            <button onClick={()=>setColor('red')} className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"red"}}>
              red
            </button>
            <button onClick={()=>setColor('yellow')} className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"yellow"}}>
              yellow
            </button>
            <button onClick={()=>setColor('gray')} className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"gray"}}>
              gray
            </button>
            <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"green"}}>
              green
            </button>
            <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"blue"}}>
              blue
            </button>
            <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"black"}}>
              black
            </button>
          </div>
        </div>

        
    
    </div>
    
  )
}

export default App
