import React from 'react';
import './App.css';
import GameContent from './Components/GameContent/GameContent'
import Layout from './hoc/Layout'

const App = () => {
  return (
    <Layout>
    <GameContent />
    </Layout>
  )
}

export default App;
