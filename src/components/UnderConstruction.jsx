import React from 'react'

const UnderConstruction = () => {
  return (
    <section className="under-construction">
      <div className="container">
        <div className="construction-content">
          <div className="construction-icon">
            <i className="fas fa-tools"></i>
          </div>
          <h2>Website Under Development</h2>
          <p>
            We're working hard to bring you the best trading experience. 
            Our website is currently under construction with exciting new features coming soon!
          </p>
          <div className="construction-features">
            <div className="feature-item">
              <i className="fas fa-chart-bar"></i>
              <span>Advanced Analytics</span>
            </div>
            <div className="feature-item">
              <i className="fas fa-mobile-alt"></i>
              <span>Mobile Trading App</span>
            </div>
            <div className="feature-item">
              <i className="fas fa-graduation-cap"></i>
              <span>Learning Platform</span>
            </div>
            <div className="feature-item">
              <i className="fas fa-users"></i>
              <span>Community Forum</span>
            </div>
          </div>
          <p className="launch-text">
            <i className="fas fa-rocket"></i>
            Expected Launch: Coming Soon
          </p>
        </div>
      </div>
    </section>
  )
}

export default UnderConstruction
