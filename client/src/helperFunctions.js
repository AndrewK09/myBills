module.exports = {
  sort: (bills, col, order) => {
    return bills.sort((a, b) => {
      if (typeof a[col] === 'number') {
        if (order === 'asc') {
          return a[col] - b[col];
        } else {
          return b[col] - a[col];
        }
      } else {
        let billA = a[col].toUpperCase();
        let billB = b[col].toUpperCase();
        if (order === 'asc') {
          if (billA < billB) {
            return -1;
          } else if (billB < billA) {
            return 1;
          }
        } else {
          if (billB < billA) {
            return -1;
          } else if (billA < billB) {
            return 1;
          }
        }
        return 0;
      }
    });
  },

  filter: (bills, company) => {
    return bills.filter(bill => {
      return bill.companyName === company;
    });
  }
};
