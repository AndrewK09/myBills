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
    this.updateCompanies;
  }

  render() {
    const { companies, selected } = this.state;
    return (
      <div>
        <form>
          <label>
            Company:
            <select value={selected}>
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
