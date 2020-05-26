import React from 'react';
import logo from './logo.svg';
import './App.css';
import AboutMe from '../components/aboutMe';

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <header> 
          <nav> 
            <a className="name" href="../components/aboutMe">Christi Kim</a>
            <a href="../components/aboutMe">About Me</a>
            <a href={require("../components/blog")}>Blog</a>
            <a href={require("../components/resume.pdf")} target="_blank">Resume</a>
          </nav>
        </header>
        <AboutMe />
      </div>
    );
  }
};

export default App;
