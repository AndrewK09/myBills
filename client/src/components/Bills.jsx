import React from 'react';
import BillEntry from './BillEntry.jsx';
export default function Bills({ bills }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th scope='col'>Company</th>
            <th scope='col'>Amount</th>
            <th scope='col'>Date</th>
          </tr>
        </thead>
        <tbody>
          {bills.map(bill => {
            <BillEntry key={bill.date} bill={bill} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
