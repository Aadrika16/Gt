// StatsCards.js
import './index.css'

const statsData = [
  {
    value: '98%',
    label: 'PRECISION TARGET REACH',
  },
  {
    value: '12.5x',
    label: 'AVERAGE ROI MULTIPLIER',
  },
  {
    value: '0.02s',
    label: 'RESPONSE LATENCY',
  },
  {
    value: 'Elite',
    label: 'ENGINEERING STATUS',
  },
]

const StatsCards = () => {
  return (
    <div className="stats-section">
      <div className="stats-container">
        {statsData.map((item, index) => (
          <div className="stat-card" key={index}>
            <div className="line"></div>

            <div className="stat-content">
              <h2>{item.value}</h2>
              <p>{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StatsCards
