// @ts-ignore
import Counter from '@features/counter/Counter'
// @ts-ignore
import Posts from '@features/posts/Posts'
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Posts />
      </header>
    </div>
  );
}

export default App;
