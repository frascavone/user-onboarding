import React from 'react';
import { ProgressStatus } from '../ProgressStatus';
import { Quote } from '../Quote';

export const LeftBlock = ({ step }) => {
  return (
    <React.Fragment>
      <section className="left-block">
        <h4 className="logo">
          UNITED<span className="logo__dark">PROPERTIES</span>
        </h4>
        <ProgressStatus step={step.stepNum} />
        <Quote
          quote={step.quote}
          authorName={step.authorName}
          authorRole={step.authorRole}
        />
      </section>
    </React.Fragment>
  );
};
