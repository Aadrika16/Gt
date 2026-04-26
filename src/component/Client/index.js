import './index.css'

const Clients = () => {
  const caseStudies = [
    {
      id: '01',
      client: 'VELOCITY CORP',
      title: 'GLOBAL LOGISTICS OVERHAUL',
      stat: '+120%',
      statLabel: 'THROUGHPUT',
      desc: 'Re-engineered supply chain logic for sub-second latency.',
    },
    {
      id: '02',
      client: 'NEURAL STREAM',
      title: 'AI COMPUTE EFFICIENCY',
      stat: '-45%',
      statLabel: 'LATENCY',
      desc: 'Deployment of custom kernel optimizations at scale.',
    },
    {
      id: '03',
      client: 'APEX FINANCE',
      title: 'SUB-MILLISECOND TRADING',
      stat: '0.02ms',
      statLabel: 'EXECUTION',
      desc: 'High-frequency infrastructure redesign for global market dominance.',
    },
  ]

  return (
    <div className="clients-page">
      <section className="hero-section">
        <div className="hero-left">
          <p className="hero-tag">Client Portfolio // 2024</p>

          <h1 className="hero-title">
            DOMINATING <span>THE SPACE.</span>
          </h1>

          <p className="hero-description">
            We don't just optimize; we re-engineer the entire trajectory.
          </p>
        </div>

        <div className="hero-stat">
          <p>Average Efficiency Gain</p>
          <h2>+312%</h2>
        </div>
      </section>

      <section className="case-study-section">
        <div className="case-grid">
          {caseStudies.map(item => (
            <div className="case-card" key={item.id}>
              <p className="case-id">
                Case Study {item.id}  {item.client}
              </p>

              <h3>{item.title}</h3>

              <div className="stat-box">
                <h2>{item.stat}</h2>
                <span>{item.statLabel}</span>
              </div>

              <p className="case-desc">{item.desc}</p>

              <button className="report-btn">
                FULL REPORT →
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Clients