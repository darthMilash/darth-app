import React from 'react';

import {
  BrowserRouter
} from "react-router-dom";

import { Body } from './containers/body';
import { Header } from './containers/header';

import './App.css';

export function App() {
    return (
      <div className="App">
        <BrowserRouter>
        <Header />
        <Body /> 
        </BrowserRouter>
      </div>
    );
  }
  