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
      ordered: {
        sortBy: false,
        filterBy: false
      }
    };
    this.updateList = this.updateList.bind(this);
    this.updateListSorted = this.updateListSorted.bind(this);
  }
  //update bills list given company name
  updateList(companyName) {
    let url = companyName ? `/bills/${companyName}` : `/bills`;
    return Axios.get(url).then(({ data }) => {
      this.setState({ bills: data });
    });
  }

  componentDidMount() {
    this.updateList().catch(err => console.log(err));
  }

  //get bills sorted, update bills list and sorted value for that col
  updateListSorted(colAndOrder) {
    let col = colAndOrder.split(' ')[0];
    let order = colAndOrder.split(' ')[1];
    let sortedBills = helpers.sort(this.state.bills, col, order);
    this.setState({
      sortBy: colAndOrder,
      bills: sortedBills
    });
  }

  render() {
    const { bills, ordered } = this.state;
    return (
      <div className='container'>
        <h2>Add Bill:</h2>
        <Search handleUpdate={this.updateList} ordered={ordered} />
        <h2>My Bills:</h2>
        <Filter
          handleSort={this.updateListSorted}
          handleFilter={this.updateList}
          ordered={ordered}
        />
        <Bills bills={bills} />
      </div>
    );
  }
}
