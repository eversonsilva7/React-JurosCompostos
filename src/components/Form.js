import React from 'react';

export default function Form({ valueInfo, onChangeValue }) {
  const { initialValue, interestMonth, month } = valueInfo;

  const handleChangeInitialvalue = (event) => {
    onChangeValue(+event.target.value, null, null);
  };

  const handleChangeInterestMonth = (event) => {
    onChangeValue(null, +event.target.value, null);
  };

  const handleChangeMonth = (event) => {
    onChangeValue(null, null, +event.target.value);
  };

  return (
    <div className="center row">
      <div className="col input field col s4">
        <label htmlFor="inputInitialValue">Capital Inicial</label>
        <input
          autoFocus
          id="inputInitialValue"
          type="number"
          value={initialValue}
          min="100"
          onChange={handleChangeInitialvalue}
        />
      </div>
      <div className="col input field col s4">
        <label htmlFor="inputInterestMonth">Taxa de juros mensal</label>
        <input
          id="inputInterestMonth"
          type="number"
          value={interestMonth}
          min="-12"
          max="12"
          step="0.1"
          onChange={handleChangeInterestMonth}
        />
      </div>
      <div className="col input field col s4">
        <label htmlFor="inputMonth">Período(meses)</label>
        <input
          id="inputMonth"
          type="number"
          value={month}
          min="1"
          step="1"
          onChange={handleChangeMonth}
        />
      </div>
    </div>
  );
}
