import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Education from './components/Education'
import Interests from './components/Interests'
import OnlineCources from './components/OnlineCources'
import Projects from './components/Projects'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <AboutMe></AboutMe>
      <Education></Education>
      <Projects></Projects>
      <Skills></Skills>
      {/* <OnlineCources></OnlineCources> */}
      <Interests></Interests>
      <Contact></Contact>
    </div>
  );
}

export default App;
