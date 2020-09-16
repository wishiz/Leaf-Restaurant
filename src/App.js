import React from 'react';

import AOS from 'aos';

import LandingPage from './pages/LandingPage';

export default function App() {
  AOS.init();

  return (
    <div className="app">
      <LandingPage />
    </div>
  );
}
