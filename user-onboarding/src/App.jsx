import './App.scss';

function App() {
  return (
    <div className="App">
      <section className="left-block">
        <h4 className="logo">
          UNITED<span className="logo__dark">PROPERTIES</span>
        </h4>
        <div className="progress"></div>
        <div className="quote">
          <span className="quote__sign"> &ldquo;</span>
          <p className="quote__text">
            We care about your time, that's why we created a 3-stage onboarding
            that will not take more than 5 minutes to complete
          </p>
          <div className="quote__author">
            <p className="quote__author__name">Willam Mac</p>
            <p className="quote__author__role">co founder investor</p>
            <p className="quote__logo">
              U<span className="quote__logo--blue">P</span>
            </p>
          </div>
        </div>
      </section>
      <section className="contact-details"></section>
    </div>
  );
}

export default App;
