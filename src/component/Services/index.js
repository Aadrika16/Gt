
import Header from "../Header"
import './index.css'

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Hero Section */}
      <Header />
      <section className="hero-section">
        <div className="hero-left">
          <span className="status-badge">SYSTEM STATUS : OPTIMAL</span>

          <h1>
            ZERO DRAG.<br />
            <span>MAXIMUM ROI.</span>
          </h1>

          <p>
            Precision-engineered growth modules for the digital economy.
            We calibrate every touchpoint for surgical efficiency and
            high-velocity conversion.
          </p>

          <div className="stats-boxes">
            <div className="stat-card">
              <h2>360°</h2>
              <span>ENGINEERING VERTICALS</span>
            </div>

            <div className="stat-card">
              <h2>0ms</h2>
              <span>DEPLOYMENT LATENCY</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="circle-effect"></div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="modules-section">
        <span className="section-label">SERVICE ARCHITECTURE</span>
        <h2>PERFORMANCE ENGINEERING MODULES</h2>

        <div className="module-grid">
          <div className="module-card large-card">
            <small>MODULE 01</small>
            <h3>DIGITAL MARKETING</h3>
            <p>
              Advanced brand positioning utilizing algorithmic trend
              analysis and hyper-targeted narrative deployment.
            </p>

            <div className="bottom-info">
              <div>
                <span>KP FOCUS</span>
                <h4>Brand Velocity</h4>
              </div>

              <div>
                <span>PRIMARY TOOL</span>
                <h4>Apex Insights™</h4>
              </div>
            </div>
          </div>

          <div className="module-card performance-card">
            <small>MODULE 02</small>
            <h3>PERFORMANCE MARKETING</h3>
            <p>
              Direct-response engineering designed for immediate lead
              capture and conversion optimization.
            </p>

            <div className="chart-bars">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          <div className="module-card">
            <small>MODULE 03</small>
            <h3>SEO STRUCTURAL ENGINEERING</h3>
            <p>
              Search index dominance through technical schema optimization.
            </p>

            <ul>
              <li>CODE WEB VITALS</li>
              <li>SEMANTIC INDEXING</li>
              <li>BACKLINK ARCHITECTURE</li>
            </ul>
          </div>

          <div className="module-card">
            <small>MODULE 04</small>
            <h3>CRM SYNERGY</h3>
            <p>
              Maximizing Lifetime Value through predictive retention.
            </p>

            <div className="progress-box">
              <span>98% RETENTION RATE</span>
            </div>
          </div>

          <div className="module-card green-card">
            <small>MODULE 05</small>
            <h3>AI INTEGRATION</h3>
            <p>
              Embedding neural networks into your operational stack.
            </p>

            <div className="progress-line"></div>
          </div>
        </div>

        <div className="bottom-section">
          <div className="bottom-left">
            <small>MODULE 06</small>
            <h3>ECOMMERCE GROWTH ENGINES</h3>
            <p>
              Turn-key commerce frameworks designed for rapid scaling.
            </p>

            <button>REQUEST SPECS</button>
          </div>

          <div className="bottom-right">
            <div className="chip-image"></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
