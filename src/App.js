import React from 'react';
import './App.css';
import RegisterComponent from './pages/register/register';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <RegisterComponent />
      </div>
    );
  }
}

export default App;
