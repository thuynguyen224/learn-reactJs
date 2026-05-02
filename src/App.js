import logo from './logo.svg';
// import './App.css';
import ColorBox from './ColorBox'
import React from 'react';
import TodoFeature from './features/Todo';
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
      <TodoFeature />
    </div>
  );
}

export default App;
