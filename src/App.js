import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://docs.google.com/spreadsheets/d/1ONEl1Xi5GwR-hyFjSi0dasfl02DY_OV6_HOGhQ2Xau0/edit#gid=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out google Stock Prices in googlesheet
        </a>
      </header>
    </div>
  );
}

export default App;
