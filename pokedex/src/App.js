import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import PokeList from './PokeList.js';


export default class App extends React.Component {
  
  render () {
    return (
      <>
      <Header />
      <div>
      </div>
      <PokeList />
      </>
    )
}}
