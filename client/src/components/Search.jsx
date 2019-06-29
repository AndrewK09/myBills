import React, { Component } from 'react';
import Axios from 'axios';
import Company from './Company.jsx';
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      selected: '',
      value: ''
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addCompany = this.addCompany.bind(this);
  }
  //get company names from db and update companies list
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

  //add company to db, then update company list and selected company
  addCompany(companyName) {
    Axios.post('/companies', { companyName })
      .then(() => {
        this.updateCompanies();
      })
      .then(() => {
        this.setState({ selected: company });
      });
  }
  //handle selected value, if selected is Other, propt adding of company
  handleSelect(e) {
    var selected = e.target.value;
    if (e.target.value === 'Other') {
      let company = prompt('Enter a company');
      this.addCompany(company);
    } else {
      this.setState({ selected });
    }
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    const { companies, selected, value } = this.state;
    return (
      <div>
        <form>
          <label>
            Company:
            <select value={selected} onChange={this.handleSelect}>
              {companies.map(company => {
                return <Company key={company.id} company={company} />;
              })}
              <option value='Other'>Other</option>
            </select>
          </label>
          <label>
            Amount:
            <input type='number' value={value} onChange={this.handleChange} />
            <input type='submit' value='Submit' />
          </label>
        </form>
      </div>
    );
  }
}
