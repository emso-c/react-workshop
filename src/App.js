import logo from './logo.svg';
import './App.css';
import Button from './components/atoms/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button up />
        <span style={{paddingTop: 20}}></span>
        <Button down />
      </header>
    </div>
  );
}

export default App;
