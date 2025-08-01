import React, { useState } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import LeadForm from './components/LeadForm'
import UnderConstruction from './components/UnderConstruction'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <div className="container">
          <HeroSection />
          <LeadForm />
        </div>
      </main>
      <UnderConstruction />
      <Footer />
    </div>
  )
}

export default App
