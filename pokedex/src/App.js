import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import PokeList from './PokeList.js';


export default class App extends React.Component {
  
  render () {
    return (
      <>
      <Header />
      <PokeList />
      <Footer />
      </>
    )
}}
