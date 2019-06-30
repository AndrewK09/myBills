import React, { Component } from 'react';
import Axios from 'axios';
export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: '',
      filterBy: '',
      companies: []
    };
    this.handleChange = this.handleChange.bind(this);
  }
  updateCompanies() {
    Axios.get('/companies')
      .then(({ data }) => {
        this.setState({
          companies: data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.updateCompanies();
  }
  //Selecting a filter/sort updates selected values and calls filter/sort method
  handleChange(e) {
    const { name, value } = e.target;
    const { handleFilter, handleSort } = this.props;
    this.setState({ [name]: value });

    name === 'filterBy' ? handleFilter(value) : handleSort(value);
  }

  render() {
    const { filterBy, sortBy, companies } = this.state;
    return (
      <div>
        <label>
          Sort By:
          <select name='sortBy' value={sortBy} onChange={this.handleChange}>
            <option value='id desc'>Newest</option>
            <option value='id asc'>Oldest</option>
            <option value='companyName asc'>Company asc.</option>
            <option value='companyName desc'>Company desc.</option>
            <option value='amount asc'>Amount asc.</option>
            <option value='amount desc'>Amount desc.</option>
          </select>
        </label>
        <label>
          Filter By:
          <select name='filterBy' value={filterBy} onChange={this.handleChange}>
            <option />>
            {companies.map(company => {
              const { id, companyName } = company;
              return (
                <option key={id} value={companyName}>
                  {companyName}
                </option>
              );
            })}
          </select>
        </label>
      </div>
    );
  }
}
