import React from 'react'
import { Link } from 'react-router-dom'
function NotFound() {
    return (
      
        <div>
            <h2>Sorry, page not found</h2>
            <p><Link to="/">Go back to homepage</Link></p>
        </div>
      
  )
}

export default NotFound