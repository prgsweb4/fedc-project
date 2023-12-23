// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import imagePath from "./assets/images/logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  let items = ["Home","Product", "Service"];
  return (
    <>
      <Nav/>
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
