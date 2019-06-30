import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import Search from './Search.jsx';
import Bills from './Bills.jsx';
import Filter from './Filter.jsx';
import helpers from '../helperFunctions.js';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bills: [],
      sortBy: false
    };
    this.updateList = this.updateList.bind(this);
    this.sortList = this.sortList.bind(this);
  }
  //update bills list given company name, if list was sorted, sort the new list too
  updateList(companyName) {
    let url = companyName ? `/bills/${companyName}` : `/bills`;
    return Axios.get(url).then(({ data }) => {
      this.setState({ bills: data }, () => {
        if (this.state.sortBy) {
          this.sortList(this.state.sortBy);
        }
      });
    });
  }

  componentDidMount() {
    this.updateList().catch(err => console.log(err));
  }

  //given a col and sort method, sort the bills and update sorted state and bills list
  sortList(colAndOrder) {
    let col = colAndOrder.split(' ')[0];
    let order = colAndOrder.split(' ')[1];
    let sortedBills = helpers.sort(this.state.bills, col, order);

    this.setState({
      sortBy: colAndOrder || false,
      bills: sortedBills
    });
  }

  render() {
    const { bills } = this.state;
    return (
      <div className='container'>
        <h2>Add Bill:</h2>
        <Search handleUpdate={this.updateList} />
        <h2>My Bills:</h2>
        <Filter handleSort={this.sortList} handleFilter={this.updateList} />
        <Bills bills={bills} />
      </div>
    );
  }
}
