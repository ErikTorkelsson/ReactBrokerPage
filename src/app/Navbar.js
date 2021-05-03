import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">         
        <div class="container">
        <a class="navbar-brand" href="#">Mäklarsida</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
            <Link class="nav-item nav-link" to="/listings" href="#">Bostäder<span class="sr-only">(current)</span></Link>
            <Link class="nav-item nav-link" to="/bidders" href="#">Budgivare</Link>
            <Link class="nav-item nav-link" to="/addlisting" href="#">Lägg till Bostad</Link>
            <Link class="nav-item nav-link" to="/login" href="#">Logga in</Link>
            </div>
        </div>
        </div>
    </nav>
  )
}