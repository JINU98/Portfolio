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

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

function App(){
  const slider = (
  <>
  <Navbar />
  <AwesomeSlider>
    <div><AboutMe /></div>
    <div><Skills /></div>
    <div><Projects/></div>
    <div><Contact/></div>
  </AwesomeSlider>
  </>
);
return slider
}
export default App;

  // return (
  //   <div className="App">
  //     <Navbar></Navbar>
  //     <AboutMe></AboutMe>
  //     <Education></Education>
  //     <Projects></Projects>
  //     <Skills></Skills>
  //     {/* <OnlineCources></OnlineCources> */}
  //     <Interests></Interests>
  //     <Contact></Contact>
  //   </div>
  // );

