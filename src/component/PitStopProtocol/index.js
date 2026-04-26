// PitStopProtocol.js
import './index.css'
import { FaClipboardList, FaDraftingCompass, FaRocket, FaChartLine } from 'react-icons/fa'

const steps = [
  {
    id: '01',
    title: 'AUDIT',
    description:
      'Full-spectrum diagnostic of your current digital footprint. We find the drag factors slowing your growth.',
    icon: <FaClipboardList />,
  },
  {
    id: '02',
    title: 'BLUEPRINT',
    description:
      'Architectural design of your offensive marketing strategy. No generic plans, only surgical maneuvers.',
    icon: <FaDraftingCompass />,
  },
  {
    id: '03',
    title: 'LAUNCH',
    description:
      'Aggressive deployment across high-yield channels. We ignite the engine and monitor every telemetry point.',
    icon: <FaRocket />,
  },
  {
    id: '04',
    title: 'SCALE',
    description:
      'Continuous optimization for infinite expansion. We push the limits while maintaining structural integrity.',
    icon: <FaChartLine />,
  },
]

const PitStopProtocol = () => {
  return (
    <section className="pitstop-section">
      <div className="pitstop-container">
        <div className="pitstop-header">
          <h2>
            THE PIT STOP <span>PROTOCOL</span>
          </h2>
          <p>
            OUR PROPRIETARY FOUR-STAGE DEPLOYMENT SYSTEM FOR MAXIMUM MARKET
            PENETRATION.
          </p>
        </div>

        <div className="pitstop-grid">
          {steps.map(step => (
            <div className="pit-card" key={step.id}>
              <div className="pit-icon">{step.icon}</div>

              <h3>{step.id}</h3>

              <h4>{step.title}</h4>

              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PitStopProtocol
