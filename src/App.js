import React from 'react';
import './App.css';
import GameContent from './Components/GameContent/GameContent';
import Layout from './hoc/Layout';
import Header from './Container/Header/Header';

const App = () => {
  return (
    <Layout>
      <Header />
      <GameContent />
    </Layout>
  )
}

export default App;
