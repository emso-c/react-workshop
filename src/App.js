// @ts-ignore
import Counter from '@features/counter/Counter'
// @ts-ignore
import Posts from '@features/posts/Posts'
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
        <Counter />
        <Posts />
    </div>
  );
}

export default App;
