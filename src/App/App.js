import React from 'react';
import logo from './logo.svg';
import './App.css';
import AboutMe from '../components/aboutMe';

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <a class="name" href="../components/aboutMe">Christi Kim</a>
        <a href="../components/aboutMe">About Me</a>
        <a href={require("../components/resume.pdf")} target="_blank">Resume</a>
        <AboutMe />
      </div>
    );
  }
};

export default App;
