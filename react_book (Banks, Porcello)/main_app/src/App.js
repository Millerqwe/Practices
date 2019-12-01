import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import './App.css';

import MemberList from './memberList'

class App extends React.Component {

  render() {

    const target = document.getElementById('delete');
    
    return (
      <div id="delete" className="App">
        <MemberList count={3}/>
        <button onClick={() => unmountComponentAtNode(target)}>Удалить компонент</button>
      </div>
    );
  }
}

export default App;