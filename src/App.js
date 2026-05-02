import logo from './logo.svg';
import './App.css';
import ColorBox from './ColorBox'
import React from 'react';
function App() {
  const name = "Nguyen Thanh Thuy";
  const age = 20;
  const isFemale = true;
  const student = {
    name: "Thanh Thuy",
    age: 25,
  }
  const colorList = ["red", "blue", "green"];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Nguyen Thanh Thuy
        </p>
        <p>Xin chao {name} - {age} tuoi {isFemale ? 'nu' : 'nam'}</p>
        {isFemale ? <p>Ban la nu</p> : <p>Ban la nam</p>}
        {isFemale && <p>Ban la nu</p>}
        {!isFemale && <p>Ban la nam</p>}
        {isFemale && (
          <React.Fragment>
            <p>Male 1</p>
            <p>Male 2</p>
            <p>Male 3</p>
          </React.Fragment>
        )}

        <p>{student.name} - {student.age}</p>
        <ul>
          {colorList.map(color => (
            <li style={{ color }}>{color}</li>
          ))}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <section>
          <ColorBox color="red" />
          <ColorBox color="blue" />
          <ColorBox color="green" />
        </section>
      </header>
    </div>
  );
}

export default App;
