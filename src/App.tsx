import React from 'react';
import logo from './logo.svg';
import './App.css';

const teamNames = [
  {"tid": 159, "cid": 0, "did": 0, "school": "Boston College", "name": "Eagles", "abbrev": "BC", "pop": 161, "city": "Chestnut Hill", "state": "MA", "latitude": 42.330, "longitude": -71.166},
  {"tid": 105, "cid": 0, "did": 0, "school": "Clemson", "name": "Tigers", "abbrev": "CLEM", "pop": 215, "city": "Clemson", "state": "SC", "latitude": 34.678, "longitude": -82.839},
  {"tid": 109, "cid": 0, "did": 0, "school": "Florida State", "name": "Seminoles", "abbrev": "FSU", "pop": 211, "city": "Tallahassee", "state": "FL", "latitude": 30.442, "longitude": -84.298},
];

function team extends React.Component {
  render() {
    return (
      <div>
        <h3>school</h3>
        <h3>name</h3>
        <h3>city</h3>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      <team/>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to March Madness</h1>
        <TeamList/>
      </header>
    </div>

  );
}

export default App;
