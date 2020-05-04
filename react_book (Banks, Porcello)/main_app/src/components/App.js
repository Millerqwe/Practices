import React, { Component } from 'react';
import { v4 } from 'uuid';
import './App.css';

import AddColorForm from './addColorForm';
import ColorList from './colorList';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      colors: []
    };
    this.addColor = this.addColor.bind(this);
    this.changeColorRate = this.changeColorRate.bind(this);
    this.removeColor = this.removeColor.bind(this);
  }

  addColor(title, code) {
    const colors = [
      ...this.state.colors, 
        {
          id: v4(),
          title,
          code,
          rating: 0
        }
      ];
    this.setState({colors});
  }

  changeColorRate(id, rating) {
    const colors = this.state.colors.map(color =>
      (color.id !== id) ? color : {...color, rating}
    );
    this.setState({colors});
  }

  removeColor(id) {
    const colors = this.state.colors.filter(color => color.id !== id);
    this.setState({colors});
  }

  render() {
    const {colors} = this.state;
    const {addColor, changeColorRate, removeColor} = this;

    return (
      <div className="App">
        <AddColorForm onAddColor={addColor} />
        <ColorList colors={colors} onRate={changeColorRate} onRemove={removeColor}/>
      </div>
    );
  }
}

export default App;