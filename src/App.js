import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HeaderNav} from './Headernav'
import {MainContent} from './MainContent'

function App() {
  return (
    <div className="App">
     <HeaderNav> </HeaderNav>
     <MainContent></MainContent>
     <HeaderNav> </HeaderNav>
    </div>
  );
}

export default App;
