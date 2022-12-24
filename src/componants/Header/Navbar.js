import React from 'react'
import {Outlet, Link, } from "react-router-dom"


export const Navbar = () => {



  return (
    <>
    <nav class="navbar navbar-expand-lg bg-danger navbar-dark container">
    <div class="container-fluid ">
      <Link class="navbar-brand  me-5 pe-5 " to="/">wignou</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarScroll">
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
          <li class="nav-item">
            <Link class="nav-link active pe-5" aria-current="page" to="/">Home</Link>
          </li>
          
          <li class="nav-item dropdown">
            <Link class="nav-link dropdown-toggle pe-5" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Assignment
            </Link>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="https://webservices.ignou.ac.in/assignments/Master-Degree/MCA_NEW/MCA_NEW.html">MCA</a></li>
              <li><a class="dropdown-item" href="https://webservices.ignou.ac.in/assignments/Bachelor-Degree/BCA/bca.html">BCA</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><Link class="dropdown-item" to="/">Solved assignment</Link></li>
            </ul>
          </li>
          <li class="nav-item">
            <Link class="nav-link pe-5" to="/Ask">Ask Query</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link pe-5" to="/About">About</Link>
          </li>
          
        </ul>
        <div>
        {/* <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-success" type="submit">Search</button>
        </form> */}
        </div>
        
      </div>
    </div>
  </nav>
   
   <Outlet/>
   
    </>
  )
}
