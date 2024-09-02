import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Marcas } from './Marcas';
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
     <h1 className='text-2xl	'>Ultimas Entradas</h1>
     <ProductSection></ProductSection>
     <Services></Services>
     <Stats></Stats>
     <Description></Description>
     <h1 className='text-2xl	'>Nuestras marcas</h1>
     <Marcas></Marcas>
     <Footer></Footer>
    </div>
  );
}

export default App;
