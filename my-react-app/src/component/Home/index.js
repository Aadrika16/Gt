import Header from "../Header"
import Carousel from "../Carousel"
import StatsCards from "../StatsCards"
import PitStopProtocol from "../PitStopProtocol"
import ServerRoomSection from "../ServerRoomSection"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import './index.css'

const Home = () => {
  return (
    <div className="home-container">
      {/* Navbar */}
      <Header />

      {/* Full Width Carousel */}
      <Carousel />
      <StatsCards /> 
      <PitStopProtocol />
      <ServerRoomSection />
      {/* Services Section */}
      <section className="services-section" id="services">
        <div className="section-title">
          <p>What We Do</p>
          <h2>Every Service. One Team.</h2>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <h3>Brand Strategy</h3>
            <p>Identity design, positioning, and research.</p>
          </div>

          <div className="service-card">
            <h3>Performance Marketing</h3>
            <p>SEO, Google Ads, and conversion optimization.</p>
          </div>

          <div className="service-card">
            <h3>Social Media</h3>
            <p>Paid campaigns, engagement, and content creation.</p>
          </div>

          <div className="service-card">
            <h3>Website Development</h3>
            <p>Fast, responsive, and modern digital experiences.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready To Grow Your Brand?</h2>
        <Link to="/contact">
           <button className="primary-btn">Let's connect</button>
         </Link>
      </section>
      {/* Footer Section */}
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-brand">
            <h2>GTApex Marketing</h2>
            <p>
              We build precision marketing systems that drive growth,
              performance, and measurable results.
            </p>
          </div>

            <div className="footer-links">
              <h3>Pages</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
              </ul>
            </div>

            <div className="footer-contact">
              <h3>Services</h3>
              <p>Strategy & Branding</p>
              <p>Search & Performance</p>
              <p>Social & Engagement</p>
              <p>Content & Creative</p>
            </div>
            <div className="footer-contact">
              <h3>Get Started</h3>
              <p>Free Brand Audit</p>
              <p>Email: hello@gtapex.com</p>
              <p>Phone: +91 98765 43210</p>
              <p>India</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 GTApex Marketing. All Rights Reserved.</p>
          </div>
        </footer>
    </div>
  )
}

export default Home