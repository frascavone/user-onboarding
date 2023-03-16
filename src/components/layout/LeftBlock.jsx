import React from 'react';
import { ProgressStatus } from '../ProgressStatus';
import { Quote } from '../Quote';

export const LeftBlock = (props) => {
  const currentStep = props.step;
  return (
    <React.Fragment>
      <section className="left-block">
        <h4 className="logo">
          UNITED<span className="logo__dark">PROPERTIES</span>
        </h4>
        <ProgressStatus step={currentStep} />
        <Quote
          quote={props.quote}
          authorName={props.authorName}
          authorRole={props.authorRole}
        />
      </section>
    </React.Fragment>
  );
};
