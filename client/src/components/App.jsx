import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import Search from './Search.jsx';
import Bills from './Bills.jsx';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bills: []
    };
    this.updateList = this.updateList.bind(this);
  }

  updateList(companyName) {
    let url = companyName ? `/bills/${companyName}` : `/bills`;
    Axios.get(url).then(({ data }) => {
      this.setState({ bills: data });
    });
  }

  componentDidMount() {
    this.updateList();
  }

  render() {
    const { bills } = this.state;
    return (
      <div className='container'>
        <h2>Add Bill:</h2>
        <Search />
        <h2>My Bills:</h2>
        <Bills bills={bills} />
      </div>
    );
  }
}
