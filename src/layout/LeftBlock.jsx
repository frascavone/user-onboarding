import React from 'react';
import { ProgressStatus } from '../components/ProgressStatus';
import { Quote } from '../components/Quote';

export function LeftBlock({ step, quote }) {
  return (
    <React.Fragment>
      <section className="left-block">
        <h4 className="logo">
          UNITED<span className="logo__dark">PROPERTIES</span>
        </h4>
        <ProgressStatus step={step} />
        <Quote
          quote={quote.text}
          authorName={quote.authorName}
          authorRole={quote.authorRole}
        />
      </section>
    </React.Fragment>
  );
}
