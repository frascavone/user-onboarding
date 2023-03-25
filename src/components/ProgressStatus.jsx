import React from 'react';
import { ProgressItem } from './ProgressItem';

export const ProgressStatus = ({ step }) => {
  let step2IsActive = step >= 2 ? true : false;
  let step3IsActive = step === 3 ? true : false;

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
