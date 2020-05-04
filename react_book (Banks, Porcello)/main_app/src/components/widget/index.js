import React from 'react';
import { unmountComponentAtNode } from 'react-dom';


class Widget extends React.Component {

    static defaultProps = {
        title: 'no name'
    }

    componentWillUnmount() {
      console.log(`Delete the widget`)
    }
  
    render() {
      const target = document.querySelector('#root');
  
      return (
        <div className="widget">
            <h1 className="widget__title">{this.props.title}</h1>
            <button className="widget__button--delete" type="button" onClick={() => unmountComponentAtNode(target)}>Delete children components of root</button>
        </div>
      );
    }
  }

export default Widget;