import React, { useState } from 'react'

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    experience: ''
    
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
    
//     // Basic validation
//     if (!formData.name || !formData.phone || !formData.email || !formData.location) {
//       alert('Please fill in all required fields')
//       return
//     }

//     // Phone validation
//     const phoneRegex = /^[0-9]{10}$/
//     if (!phoneRegex.test(formData.phone)) {
//       alert('Please enter a valid 10-digit phone number')
//       return
//     }

//     // Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     if (!emailRegex.test(formData.email)) {
//       alert('Please enter a valid email address')
//       return
//     }

//     console.log('Form submitted:', formData)
//     setIsSubmitted(true)
    
//     // Reset form after 3 seconds
//     try {
//     const response = await fetch('https://script.google.com/macros/s/AKfycbxD33TlAdL0O5Ictmxg90uZZAIB_lXgR9aq70HLGe1Tj80WSq8i2UORJy0w9CsUmx4isg/exec', {
//       method: 'POST',
//       mode: 'no-cors',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     });

//     const result = await response.text();
//     console.log('Server response:', result);

//     if (!response.ok) {
//       alert('Something went wrong:\n' + result);
//       return;
//     }

//     setIsSubmitted(true);
//     setFormData({
//       name: '',
//       phone: '',
//       email: '',
//       location: '',
//       experience: ''
//     });

//     setTimeout(() => setIsSubmitted(false), 3000);

//   } catch (error) {
//     console.error('Error sending data:', error);
//     alert('Network error: ' + error.message);
//   }
// }
const handleSubmit = async (e) => {
  e.preventDefault();
 setLoading(true);
  // Basic validation
  if (!formData.name || !formData.phone || !formData.email || !formData.location) {
    alert('Please fill in all required fields');
    return;
  }

  // Phone and email validation
  const phoneRegex = /^[0-9]{10}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!phoneRegex.test(formData.phone)) {
    alert('Please enter a valid 10-digit phone number');
    return;
  }

  if (!emailRegex.test(formData.email)) {
    alert('Please enter a valid email address');
    return;
  }

  // try {
  //   await fetch('https://script.google.com/macros/s/AKfycbxD33TlAdL0O5Ictmxg90uZZAIB_lXgR9aq70HLGe1Tj80WSq8i2UORJy0w9CsUmx4isg/exec', {
  //     method: 'POST',
  //     mode: 'no-cors', // 👈 Required to bypass CORS
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(formData),
  //   });

  //   // We can't check response, but we assume success
  //   setIsSubmitted(true);
  //   setFormData({
  //     name: '',
  //     phone: '',
  //     email: '',
  //     location: '',
  //     experience: '',
  //   });

  //   setTimeout(() => setIsSubmitted(false), 3000);
  // } catch (error) {
  //   console.error('Submission error:', error);
  //   alert('Submission failed. Please try again later.');
  // }
   try {
    await fetch('https://script.google.com/macros/s/AKfycbxD33TlAdL0O5Ictmxg90uZZAIB_lXgR9aq70HLGe1Tj80WSq8i2UORJy0w9CsUmx4isg/exec', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    setIsSubmitted(true);
    setFormData({
      name: '',
      phone: '',
      email: '',
      location: '',
      experience: ''
    });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  } catch (error) {
    alert("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
}


  
  

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Start Your Trading Journey Today</h2>
        <p>Fill out the form below and our experts will contact you within 24 hours</p>
      </div>
      
      <div className="form-content">
        <div className="form-left">
          <h3>Why Choose Redfleets?</h3>
          <ul className="market-benefits">
            <li>
              <i className="fas fa-check-circle"></i>
              Expert market analysis and insights
            </li>
            <li>
              <i className="fas fa-check-circle"></i>
              Personalized trading strategies
            </li>
            <li>
              <i className="fas fa-check-circle"></i>
              24/7 customer support
            </li>
            <li>
              <i className="fas fa-check-circle"></i>
              Risk management guidance
            </li>
            <li>
              <i className="fas fa-check-circle"></i>
              Live market updates
            </li>
            <li>
              <i className="fas fa-check-circle"></i>
              Empowering resources
            </li>
          </ul>
          <div className="market-image"></div>
        </div>
        
        <div className="form-right">
          <form className="lead-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
              <i className="fas fa-user"></i>
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter 10-digit phone number"
                required
              />
              <i className="fas fa-phone"></i>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
              <i className="fas fa-envelope"></i>
            </div>

            <div className="form-group">
              <label htmlFor="location">Location *</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter your city"
                required
              />
              <i className="fas fa-map-marker-alt"></i>
            </div>

            <div className="form-group">
              <label htmlFor="experience">Trading Experience</label>
              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
              >
                <option value="">Select your experience level</option>
                <option value="beginner">Beginner (0-1 years)</option>
                <option value="intermediate">Intermediate (1-3 years)</option>
                <option value="advanced">Advanced (3+ years)</option>
              </select>
            </div>

            {/* <div className="form-group">
              <label htmlFor="investment">Investment Range</label>
              <select
                id="investment"
                name="investment"
                value={formData.investment}
                onChange={handleChange}
              >
                <option value="">Select investment range</option>
                <option value="under-50k">Under ₹50,000</option>
                <option value="50k-2l">₹50,000 - ₹2,00,000</option>
                <option value="2l-5l">₹2,00,000 - ₹5,00,000</option>
                <option value="above-5l">Above ₹5,00,000</option>
              </select>
            </div> */}

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Submitting...' : (
                <>
                  <i className="fas fa-paper-plane"></i> Get Free Consultation
                </>
              )}
            </button>

            {isSubmitted && (
              <div className="success-message">
                <i className="fas fa-check-circle"></i>
                Thank you! Our team will contact you within 24 hours.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default LeadForm
