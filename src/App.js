import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ProductSection } from './ProductSection';
import {HeaderNav} from './Headernav'
import {MainContent} from './MainContent'
import { Services } from './Services';
import { Footer } from './Footer';
import { Stats } from './Stats';
import { Description } from './Description';
function App() {
  return (
    <div className="App">
     <HeaderNav> </HeaderNav>
     <MainContent></MainContent>
     <ProductSection></ProductSection>
     <Services></Services>
     <Stats></Stats>
     <Description></Description>

     <Footer></Footer>
    </div>
  );
}

export default App;
