import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import LeadForm from './components/LeadForm';
import UnderConstruction from './components/UnderConstruction';
import Footer from './components/Footer';
import ThankYou from './components/ThankYou';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <div className="container">
            <Routes>
              <Route path="/" element={
                <>
                  <HeroSection />
                  <LeadForm />
                </>
              } />
              <Route path="/thank-you" element={<ThankYou />} />
            </Routes>
          </div>
        </main>
        <UnderConstruction />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
