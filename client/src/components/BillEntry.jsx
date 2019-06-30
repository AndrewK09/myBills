import React, { Component } from 'react';
import Axios from 'axios';

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
        <td scope='col'>${toCurrency(amount)}</td>
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

function toCurrency(number) {
  var test = new Intl.NumberFormat('en-IN', {
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(number);
  return test;
}
