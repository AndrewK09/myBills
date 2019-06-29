import React from 'react';

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
      </table>
    </div>
  );
}
