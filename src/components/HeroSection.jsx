import React from 'react'

const HeroSection = () => {
  return (
    <section className="hero-section">
      <h1>Master the Art of Stock Market Trading</h1>
      <p>Join thousands of successful traders and investors. Get expert guidance and start your journey to financial freedom.</p>
      
      <div className="market-stats">
        <div className="stat-item">
          <i className="fas fa-chart-line"></i>
          <h3>15%+</h3>
          <p>Average Returns</p>
        </div>
        <div className="stat-item">
          <i className="fas fa-users"></i>
          <h3>10K+</h3>
          <p>Happy Clients</p>
        </div>
        <div className="stat-item">
          <i className="fas fa-trophy"></i>
          <h3>5+ Years</h3>
          <p>Experience</p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
