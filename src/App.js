import onew from './onew.png';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={onew} className="App-logo" alt="onew" />
        <p>
          Hello ! My name is ONEW, I'm happy to meet you!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Invite my Home
        </a>
      </header>
    </div>
  );
}

export default App;
