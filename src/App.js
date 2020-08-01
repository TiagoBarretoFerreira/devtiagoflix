import React from 'react';
import Menu from './components/Menu';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

//import logo from './logo.svg';
//import './App.css';

function App() {
  return (
    <div style={{background: "#414141" }}>
      <Menu />
      
      <BannerMain  videoTitle={dadosIniciais.categorias[0].videos[0].titulo}  
      videoDescription={dadosIniciais.categorias[0].videos[0].url}  
      url="descritivo"/>
    </div>
  );
}

export default App;
