import './App.scss';

function App() {
  return (
    <div className="App">
      <section className="left-block">
        <h4 className="logo">
          UNITED<span className="logo__dark">PROPERTIES</span>
        </h4>
        <div className="progress">
          <div className="progress__item progress__item--active">
            <div className="progress__item__square progress__item__square--active">
              <span className="progress__item__dot progress__item__dot--active"></span>
            </div>
            <div className="progress__item__text">Contact details</div>
          </div>
          <div className="progress__item__dash--active"></div>
          <div className="progress__item__dash--active"></div>
          <div className="progress__item">
            <div className="progress__item__square">
              <span className="progress__item__dot"></span>
            </div>
            <div className="progress__item__text">Investment plans</div>
          </div>
          <div className="progress__item__dash"></div>
          <div className="progress__item__dash"></div>
          <div className="progress__item">
            <div className="progress__item__square">
              <span className="progress__item__dot"></span>
            </div>
            <div className="progress__item__text">Investment preferences</div>
          </div>
        </div>
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
      <section className="contact-details">
        <header className="page-header">
          <div className="step">STEP 1 OF 3</div>
          <p>
            Lost or have trouble? <a href="#">Get help &rarr;</a>
          </p>
        </header>
        <div className="page-content">
          <div className="title-description">
            <h1>Contact details</h1>
            <p>
              Welcome to United Properties, we are glad to see you! Let’s get
              started by letting us know a little bit about you
            </p>
          </div>
          <form>
            <div className="row">
              <div className="form-control">
                <label htmlFor="fullName">Full name</label>
                <input type="text" id="fullName" />
              </div>
              <div className="form-control phone">
                <select name="phone-prefix" id="phone-prefix">
                  <option value="it">🇮🇹</option>
                </select>
                <input type="tel" id="phone" />
              </div>
            </div>
            <div className="form-control">
              <label htmlFor="email">Email address</label>
              <input type="text" id="email" />
            </div>
            <div className="form-control">
              <label htmlFor="countries">Country</label>
              <select name="countries" id="phone-prefix">
                <option value="ukraine">Ukraine</option>
              </select>
            </div>
          </form>
          <div className="title-description">
            <h2>Privacy Policy</h2>
            <p>
              We know you care about how your personal information is used and
              shared, so we take your privacy seriously
            </p>
            <a href="#">Expand privacy policy &rarr;</a>
          </div>
        </div>
        <footer>
          <a href="#">&larr; Back to the homepage</a>
          <div className="actions">
            <button className="skip">Skip for now</button>
            <button className="next">Next step &rarr;</button>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default App;
