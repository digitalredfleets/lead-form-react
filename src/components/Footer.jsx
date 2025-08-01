import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3><span>Red</span>fleets</h3>
              <p>RedFleets objectively evaluates stocks and mutual funds and does not advise or recommend any stocks, mutual funds or portfolios. Investors shall invest at their own discretion, will and consent. RedFleets ,
                 at any time, does not guarantee fixed returns on the capital invested.</p>
            </div>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#blogs">Blogs</a></li>
              <li><a href="#courses">Courses</a></li>
              <li><a href="#career">Career</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <ul className="footer-links">
              <li><a href="#trading">Get Help</a></li>
              <li><a href="#investment">FAQ</a></li>
              {/* <li><a href="#research">Market Research</a></li> */}
              {/* <li><a href="#education">Trading Education</a></li> */}
              {/* <li><a href="#portfolio">Portfolio Management</a></li> */}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>563 Business District, Mumbai, India</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+91 97533 33013</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>digitalredfleets@gmail.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-clock"></i>
                <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Redfleets Digital. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#disclaimer">Risk Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
