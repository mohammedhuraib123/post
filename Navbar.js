import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="#">general</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">bussiness</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">health</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">entertainment</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">sports</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">scie nce</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      
      
    </ul>
    
  </div>
</nav>
      </div>
    )
  }
}
