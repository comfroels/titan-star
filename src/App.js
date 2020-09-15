import React from 'react';

import TitleBar from './components/TitleBar/TitleBar';
import TalentsContainer from './components/RuneMasteryContainer/RuneMasteryContainer';

import './App.scss';

function App() {
  return (
    <div className="App">
      <TitleBar />
      <TalentsContainer />
    </div>
  );
}

export default App;
