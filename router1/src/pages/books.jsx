import React from 'react'

import { Link } from 'react-router'

const Books = () => {
  return (
    <>
     <ul>
            <li><Link to = "/books/1"> book1 </Link></li>
        <li><Link to = "/books/2"> book2 </Link></li>
        </ul>
    </>
    
  )
}

export default Books