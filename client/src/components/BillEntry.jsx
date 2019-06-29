import React, { Component } from 'react';

export default class BillEntry extends Component {
  render() {
    return (
      <tr>
        <td scope='col'>Company</td>
        <td scope='col'>Amount</td>
        <td scope='col'>Date</td>
      </tr>
    );
  }
}
