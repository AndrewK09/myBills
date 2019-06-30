import React from 'react';
import BillEntry from './BillEntry.jsx';
export default function Bills({ bills, updateList }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th scope='col'>Company</th>
            <th scope='col'>Amount</th>
            <th scope='col'>Date</th>
            <th scope='col'>Modify</th>
          </tr>
        </thead>
        <tbody>
          {bills.map(bill => {
            return (
              <BillEntry key={bill.id} bill={bill} updateList={updateList} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
