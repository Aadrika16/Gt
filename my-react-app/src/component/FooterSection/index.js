import {
  FiShare2,
  FiGlobe,
  FiSettings
} from 'react-icons/fi'
import './index.css'

const FooterSection = () => {
  return (
    <div className="footer-wrapper">
      {/* CTA Section */}
      <section className="cta-section">
        <h1 className="cta-title">
          READY TO <span className='cta-span'>OUTPACE</span>  <br />
           THE COMPETITION?
        </h1>

        <button className="cta-btn">OUR SERVICES</button>
      </section>

      {/* Footer */}
      <footer className="footer-container">
        <div className="footer-grid">
          {/* Left Column */}
          <div className="footer-column">
            <h2 className="footer-logo">GT APEX</h2>
            <p>
              GT Apex is a 360<sup>°</sup> Digital Marketing Agency delivering end-to-end
              growth solutions.
            </p>
            <p>
              We specialize in performance-driven strategies that generate real
              leads and conversions.
            </p>
            <p>
              Our focus is to help brands scale with creativity, data, and
              innovation.
            </p>
          </div>

          {/* Expertise */}
          <div className="footer-column">
            <h3>Expertise</h3>
            <ul>
              <li>360<sup>°</sup> Marketing</li>
              <li>Strategy</li>
              <li>Scalability</li>
              <li>Sustainability</li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li>Press</li>
              <li>Contact Us</li>
              <li>Careers</li>
              <li>Portfolio</li>
            </ul>
          </div>

          {/* Legal */}
          <div className="footer-column">
            <h3>Legal</h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom"> 
          <div className='first-text-con'>
            <span className='first-bottom-text'>GT APEX</span>
            <p>© 2024 GT APEX. ENGINEERED FOR PRECISION.</p>
          </div>
          <div className="footer-links">
            <span className='footer-middle-text'>PRIVACY POLICY</span>
            <span className='footer-middle-text'>TERMS OF SERVICE</span>
            <span className='footer-middle-text'>CONTACT</span>
          </div>

          <div className="social-icons">
            <FiShare2  className='each-icon'/> 
            <FiGlobe className='each-icon'/> 
            <FiSettings className='each-icon'/>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default FooterSection