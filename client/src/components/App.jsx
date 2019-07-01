import React from 'react';
import Axios from 'axios';
import Search from './Search.jsx';
import Bills from './Bills.jsx';
import Modifier from './Modifier.jsx';
import helpers from '../helperFunctions.js';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bills: [],
      sortBy: false,
      filteredBy: false
    };
    this.updateList = this.updateList.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.sortList = this.sortList.bind(this);
  }
  //update state sortby and filterby values, then updates list
  updateSearch(modifier, value) {
    this.setState({ [modifier]: value }, this.updateList);
  }

  //update bills list depending on filter, if state is sorted, sort the new list too
  updateList() {
    const { filteredBy, sortBy } = this.state;
    let url = filteredBy ? `/bills/${filteredBy}` : `/bills`;
    return Axios.get(url)
      .then(({ data }) => {
        this.setState({ bills: data }, () => {
          if (sortBy) this.sortList(sortBy);
        });
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.updateList().catch(err => console.log(err));
  }

  //given a col and order name, sort the bills, update sorted state and bills list
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
        <Modifier
          handleSort={this.sortList}
          updateList={this.updateList}
          updateSearch={this.updateSearch}
        />
        <Bills bills={bills} updateList={this.updateList} />
      </div>
    );
  }
}
