import React from 'react';

const Companies = ({ company }) => {
  const { companyName } = company;
  return <option value={companyName}>{companyName}</option>;
};

export default Companies;
