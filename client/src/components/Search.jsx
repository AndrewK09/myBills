import React, { Component } from 'react';
import Axios from 'axios';
import Company from './Company.jsx';
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      selected: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  updateCompanies() {
    Axios.get('/companies')
      .then(({ data }) => {
        this.setState({ companies: data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.updateCompanies();
  }

  handleChange(e) {
    this.setState({ selected: e.target.value });
  }

  handleClick(e) {
    e.preventDefault();
    var selected = prompt('Enter a Company');
    Axios.post('/companies', { companyName: selected })
      .then(() => {
        this.setState({ selected });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { companies, selected } = this.state;
    return (
      <div>
        <form>
          <label>
            Company:
            <select value={selected} onChange={this.handleChange}>
              {companies.map(company => {
                return <Company key={company.id} company={company} />;
              })}
            </select>
            <button onClick={this.handleClick}>Add Company</button>
          </label>
        </form>
      </div>
    );
  }
}
