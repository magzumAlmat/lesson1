import logo from './logo.svg';
import './App.css';
import Yandex from './components/yandex';
import React,{Component} from 'react';
import HeaderFront from './components/Header';
import Technologies from './components/Technologies';




function App() {
  return (
    <div className="App">
      <HeaderFront/>
      <Technologies/>
      <Yandex/> 
    </div>
  );
}

export default App;
