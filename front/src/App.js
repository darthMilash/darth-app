import { useState } from 'react';

import { HeaderContainer } from './containers/header';
import { BodyContainer } from './containers/body';

import './App.css';

export function App() {
    const [currentPage, changePage] = useState('profile');
  
    return (
      <div className="App">
        <HeaderContainer changePage={changePage} />
        <BodyContainer currentPage={currentPage} />
      </div>
    );
  }
  