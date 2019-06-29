import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search.jsx';
import Bills from './Bills.jsx';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bills: []
    };
  }
  render() {
    const { bills } = this.state;
    return (
      <div className='container'>
        <h2>My Bills</h2>
        <Search />
        <Bills bills={bills} />
      </div>
    );
  }
}
