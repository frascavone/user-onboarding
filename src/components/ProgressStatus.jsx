import React, { useState } from 'react';
import { ProgressItem } from './ProgressItem';

export const ProgressStatus = (props) => {
  const currentStep = props.step;

  let step2IsActive = currentStep >= 2 ? true : false;
  let step3IsActive = currentStep === 3 ? true : false;

  return (
    <React.Fragment>
      <div className="progress">
        <ProgressItem isActive={true} pagename="Contact details" />
        <ProgressItem isActive={step2IsActive} pagename="Investment plans" />
        <ProgressItem
          isActive={step3IsActive}
          pagename="Investment preferences"
          isLast
        />
      </div>
    </React.Fragment>
  );
};
