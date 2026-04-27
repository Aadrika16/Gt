
import "./index.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        
        {/* LEFT IMAGE */}
        <div className="hero-image">
          <img
            src="https://res.cloudinary.com/doyaebals/image/upload/v1777118752/GTAPEX_FLYER2_qch8eq.svg"
            alt="Marketing Banner"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="hero-content">
          <p className="tag">— STRATEGY & VISION</p>

          <h1>
            YOUR BRAND, <br />
            OUR STRATEGY, <br />
            <span>REAL RESULTS.</span>
          </h1>

          <p className="description">
            We don’t just execute; we architect. Every pixel and every campaign
            is mapped to a grander vision, ensuring your brand isn't just
            present, but dominant in its space.
          </p>

          <div className="features">
            <div className="feature">
              <span className="icon">👁</span>
              <div>
                <h4>MARKET INSIGHT</h4>
                <p>Real-time telemetry of your market landscape.</p>
              </div>
            </div>

            <div className="feature">
              <span className="icon">⚙️</span>
              <div>
                <h4>GROWTH ENGINE</h4>
                <p>Proprietary logic designed for aggressive expansion.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;