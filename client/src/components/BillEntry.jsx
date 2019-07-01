import React, { Component } from 'react';
import Axios from 'axios';
import helpers from '../helperFunctions.js';
export default class BillEntry extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    Axios.delete('/bills', { data: { id: this.props.bill.id } })
      .then(() => {
        this.props.updateList();
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { companyName, amount, datePaid } = this.props.bill;
    return (
      <tr>
        <td scope='col'>{companyName}</td>
        <td scope='col'>${helpers.toCurrency(amount)}</td>
        <td scope='col'>{datePaid}</td>
        <td scope='col'>
          <button
            type='button'
            className='btn-link'
            onClick={this.handleDelete}
          >
            &#10008;
          </button>
        </td>
      </tr>
    );
  }
}
