import React from 'react'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
function Header() {
  return (
    <nav>
        <h1>TeachTechnical.</h1>
        <main>
          <HashLink to={"/#home"}>Home</HashLink>
          <HashLink to={"/#about"}>About</HashLink>
          <HashLink to={"/#service"}>Services</HashLink>
          <HashLink to={"/#brands"}>Brands</HashLink>
          <HashLink to={"/#contact"}>Contact</HashLink>
         
        </main>
    </nav>
  )
}

export default Header;