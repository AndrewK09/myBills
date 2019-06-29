import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search.jsx';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bills: []
    };
  }
  render() {
    return (
      <div>
        <h2>My Bills</h2>
        <Search />
      </div>
    );
  }
}
