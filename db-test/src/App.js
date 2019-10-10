import React from 'react';

import './assets/App.css';
import { MainCotainer } from './containers/MainContainer';
import { Header } from './components/Header'
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MainCotainer />
      <Footer />
    </div>
      
    
  );
}

export default App;
