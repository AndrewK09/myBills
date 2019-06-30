import React, { Component } from 'react';
import Axios from 'axios';
import Company from './Company.jsx';
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      selected: '',
      amount: ''
    };
    this.addCompany = this.addCompany.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //get company names from db and update companies list
  updateCompanies() {
    Axios.get('/companies')
      .then(({ data }) => {
        this.setState({
          companies: data,
          selected: data[0].companyName
        });
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
        this.setState({ selected: companyName });
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
    this.setState({ amount: e.target.value });
  }
  //if state is filterd, pass in filterd value
  handleSubmit(e) {
    e.preventDefault();
    const { selected, amount } = this.state;
    const { handleUpdate, ordered } = this.props;
    Axios.post('/bills', {
      companyName: selected,
      amount: amount
    }).then(() => {
      handleUpdate()
        .then(() => {
          this.setState({ amount: '' });
        })
        .catch(err => console.log(err));
    });
  }
  render() {
    const { companies, selected, amount } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
            <input type='number' value={amount} onChange={this.handleChange} />
            <input type='submit' value='Submit' />
          </label>
        </form>
      </div>
    );
  }
}
