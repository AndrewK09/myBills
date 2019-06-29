import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import Search from './Search.jsx';
import Bills from './Bills.jsx';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bills: [],
      sort: {
        company: false,
        amount: false,
        date: false
      }
    };
    this.updateList = this.updateList.bind(this);
  }

  updateList(companyName) {
    let url = companyName ? `/bills/${companyName}` : `/bills`;
    return Axios.get(url).then(({ data }) => {
      this.setState({ bills: data });
    });
  }

  componentDidMount() {
    this.updateList().catch(err => console.log(err));
  }

  sortList(sortBy, order) {}

  render() {
    const { bills } = this.state;
    return (
      <div className='container'>
        <h2>Add Bill:</h2>
        <Search handleUpdate={this.updateList} />
        <h2>My Bills:</h2>
        <Bills bills={bills} />
      </div>
    );
  }
}
