import logo from './logo.svg';
import './App.css';
function RoimerButton(){
  
  return <button className='avatar'>I'm a roimer</button>;
}
export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
       <RoimerButton></RoimerButton>
      </header>
    </div>
  );
}




