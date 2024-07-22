import React from "react"
import { Link } from "react-router-dom"
const Error = () => {
  return (
    <main>
      <div className="pg-header">
        <div className="container">
          <h1>404 Error</h1>
        </div>
      </div>
      <div className="container content">
        <p>Page not found...</p>
        <Link to={'/'} >Back to Home</Link>
      </div>
    </main>
  )
}

export default Error