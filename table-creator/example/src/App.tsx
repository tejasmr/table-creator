import React from 'react';
import logo from './logo.svg';
import './App.css';
import TableCreator from 'table-creator';

function App() {
  return (
    <TableCreator headers={["x"]} data={[{"x":"b"}, {"x":"c"}]}/>
  );
}

export default App;
