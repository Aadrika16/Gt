
// EngineRoomSection.js
import './index.css'

const ServerRoomSection = () => {
  return (
    <section className="engine-section">
      <div className="engine-grid">
        {/* Left Large Card */}
        <div className="engine-main-card">
          <div className="engine-overlay">
            <p className="engine-tag">THE ENGINE ROOM</p>

            <h2>REAL-TIME DATA TELEMETRY</h2>

            <p className="engine-description">
              Monitor your growth with surgical precision. Our dashboard
              provides 24/7 visibility into every campaign metric.
            </p>
          </div>
        </div>

        {/* Right Cards */}
        <div className="engine-side">
          <div className="side-card green-card">
            <h3>IRON-CLAD BRAND IDENTITY</h3>
            <span>→</span>
          </div>

          <div className="side-card dark-card">
            <h3>HIGH-OCTANE CONTENT DELIVERY</h3>

            <div className="status-box">
              <span>EFFICIENCY STATUS: OPTIMAL</span>
              <div className='dot'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServerRoomSection