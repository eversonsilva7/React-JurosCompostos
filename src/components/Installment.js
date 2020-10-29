import React from 'react';
import { formatNumberReal, formatPercentage } from '../helpers/format';

export default function Installment({ dataInstallment }) {
  const classGoodValue = 'green-text darken-4';
  const classGoodPercent = 'blue-text darken-4';
  const classBadValue = 'red-text darken-4';
  const classBadPercent = 'orange-text darken-4';

  const classValue =
    dataInstallment.interestValueAccumulated > 0
      ? classGoodValue
      : classBadValue;
  const classPercent =
    dataInstallment.interestValueAccumulated > 0
      ? classGoodPercent
      : classBadPercent;

  return (
    <div className="card col s6 m3 l2" style={styleMargin.margin}>
      <div style={styles.flexRow}>
        <span style={{ marginRight: '6px' }}>
          <strong>{dataInstallment.month}</strong>
        </span>
        <div>
          <div>
            <strong className={classValue}>
              {formatNumberReal(dataInstallment.interestValueAccumulated)}
            </strong>
          </div>
          <div>
            <strong className={classValue}>
              {formatNumberReal(dataInstallment.totalAccumulated)}
            </strong>
          </div>
          <div>
            <strong className={classPercent}>
              {formatPercentage(dataInstallment.percentageAccumulated)}
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}

const styleMargin = { margin: { marginRight: '0' } };

const styles = {
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    //justifyContent: 'flex-start',
    //border: '1px solid black',
    //borderRadius: '4px',
    padding: '4px',
    margin: '4px',
  },
};
