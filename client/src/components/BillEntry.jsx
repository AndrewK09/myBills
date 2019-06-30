import React, { Component } from 'react';

export default class BillEntry extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { companyName, amount, datePaid } = this.props.bill;
    return (
      <tr>
        <td scope='col'>{companyName}</td>
        <td scope='col'>${toCurrency(amount)}</td>
        <td scope='col'>{datePaid}</td>
      </tr>
    );
  }
}

function toCurrency(number) {
  return new Intl.NumberFormat('en-IN').format(number);
}
