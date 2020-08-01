import React from 'react'
const style={
    backgroundColor:"#000",
    width:"110%"
    
}
const color={
    color:"white",
    marginLeft:"15px",
    fontFamily:"cursive"
}
const fontColor={
    color:"white",
    marginLeft:"30px",
    fontFamily:"cursive"
}



function Navbar() {
    return (
     <>
    <nav class="navbar navbar-light navbar-expand-lg" style={style}>
    <span class="navbar-brand mb-0 h1" ><span style={color}>Jinendra Malekar</span></span>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav" >
      <li class="nav-item active">
        <a style={fontColor}class="nav-link">About Me</a>
      </li>
      <li class="nav-item">
        <a style={fontColor} class="nav-link" href="#Education">Education</a>
      </li>
      <li class="nav-item">
        <a style={fontColor} class="nav-link" href="#Projects">Projects</a>
      </li>
      <li class="nav-item">
        <a style={fontColor} class="nav-link" href="#Skills">Skills</a>
      </li>
      {/* <li class="nav-item">
        <a style={fontColor} class="nav-link" href="#">Online Courses</a>
      </li> */}
      <li class="nav-item">
        <a style={fontColor} class="nav-link" href="#">Interests</a>
      </li>
      <li class="nav-item">
        <a style={fontColor} class="nav-link" href="#">Contact</a>
      </li>
    </ul>
  </div>
    </nav>
    </>
    )
}

export default Navbar
