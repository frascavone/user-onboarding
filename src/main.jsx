import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/index.scss';
import { ContactDetails } from './pages/ContactDetails';
import { InvestmentPlans } from './pages/InvestmentPlans';
import { InvestmentPreferences } from './pages/InvestmentPreferences';
import NoPage from './pages/NoPage';
import Home from './pages/Home';
import { Step } from './layout/Step';

export default function App() {
  return (
    /* The routes are structured as if 
       the three steps form was just a part of a bigger site.*/

    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        {/* I choose "user-onboarding-<page-name>" to avoid user 
          ends up on "user-onboarding/" route, which is 
          just LeftBlock component and white space */}
        <Route element={<Step />}>
          <Route
            index
            path="user-onboarding-contact-details"
            element={<ContactDetails />}
          />
          <Route
            path="user-onboarding-investment-plans"
            element={<InvestmentPlans />}
          />
          <Route
            path="user-onboarding-investment-preferences"
            element={<InvestmentPreferences />}
          />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
