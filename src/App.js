import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Installments from './components/Installments';
import Title from './components/Title';

export default function App() {
  const [initialValue, setInitialValue] = useState(5900);
  const [interestMonth, setInterestMonth] = useState(0.8);
  const [month, setMonth] = useState(12);
  const [installmentsCalculated, setInstallmentsCalculated] = useState([]);

  useEffect(() => {
    calculatedInterest(initialValue, interestMonth, month);
  }, [initialValue, interestMonth, month]);

  const calculatedInterest = (initialValue, interestMonth, month) => {
    const newInstallmentsCalculated = [];
    let totalAccumulated = initialValue;
    let interestValueAccumulated = 0;
    let percentageAccumulated = interestMonth;

    for (let i = 1; i <= month; i++) {
      interestValueAccumulated += totalAccumulated * (interestMonth / 100);
      totalAccumulated = initialValue + interestValueAccumulated;
      percentageAccumulated = (100 * interestValueAccumulated) / initialValue;

      newInstallmentsCalculated.push({
        month: i,
        interestValueAccumulated: interestValueAccumulated,
        totalAccumulated: totalAccumulated,
        percentageAccumulated: percentageAccumulated,
      });
    }
    setInstallmentsCalculated(newInstallmentsCalculated);
  };
  const handleChange = (newValue, newInterest, newMonth) => {
    if (newValue !== null) {
      setInitialValue(newValue);
      return;
    }
    if (newInterest !== null) {
      setInterestMonth(newInterest);
      return;
    }

    setMonth(newMonth);
  };

  return (
    <div className="container center">
      <Title>React - Juros Compostos</Title>
      <Form
        valueInfo={{ initialValue, interestMonth, month }}
        onChangeValue={handleChange}
      />
      <Installments installments={installmentsCalculated} />
    </div>
  );
}
