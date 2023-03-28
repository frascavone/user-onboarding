import React from 'react';

export const Slider = ({ from, to, rangeSteps, currency, onChange }) => {
  const FROM = +from.replace(/\D/g, '');
  const TO = +to.replace(/\D/g, '');

  const calculatePercent = (array, value) => {
    let percent = '0';
    if (array.includes(value)) {
      const index = array.indexOf(value);
      percent = (100 / (array.length - 1)) * index;
      return percent;
    } else percent = '';
    return percent;
  };

  return (
    <React.Fragment>
      <div className="slider">
        <datalist className="slider__bar">
          {rangeSteps.map((step) => {
            return (
              <option
                key={step}
                value={step}
                name="range"
                onClick={onChange}
                className={`notch ${step === FROM ? 'start' : ''} ${
                  step === TO ? 'end' : ''
                } ${step > FROM && step < TO ? 'active' : ''}`}
              ></option>
            );
          })}
          <div
            className="slider__fill"
            style={{
              left: `${calculatePercent(rangeSteps, FROM)}%`,
              width: `${
                calculatePercent(rangeSteps, TO) -
                calculatePercent(rangeSteps, FROM)
              }%`,
            }}
          ></div>
        </datalist>
      </div>
      <datalist name="range" className="slider__labels" onClick={onChange}>
        {rangeSteps.map((step) => {
          return (
            <option
              key={step + 1}
              value={step}
              className={`notch__label ${
                step >= FROM && step <= TO ? 'active' : ''
              }`}
              label={step.toLocaleString(navigator.language, {
                style: 'currency',
                currency,
                maximumSignificantDigits: 4,
              })}
            ></option>
          );
        })}
      </datalist>
    </React.Fragment>
  );
};
