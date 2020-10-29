import React from 'react';
import Installment from './Installment';

export default function Installments({ installments }) {
  return (
    <div className="row">
      {installments.map((item) => {
        const { month } = item;
        return <Installment key={month} dataInstallment={item} />;
      })}
    </div>
  );
}
