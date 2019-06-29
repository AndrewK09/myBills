import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import Search from './Search.jsx';
import Bills from './Bills.jsx';
import Filter from './Filter.jsx';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bills: []
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
  updateListSorted(col, order) {
    console.log(col);
    // Axios.get(`/bills/sort/${col}/${order}`).then(result => {
    //   this.setState({
    //     bills: result,
    //     [col]: !col
    //   });
    // });
  }

  render() {
    const { bills, sort } = this.state;
    return (
      <div className='container'>
        <h2>Add Bill:</h2>
        <Search handleUpdate={this.updateList} />
        <h2>My Bills:</h2>
        <Filter handleSort={this.updateListSorted} />
        <Bills bills={bills} />
      </div>
    );
  }
}
