import './index.css'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

const HeroSection = () => {
  const history = useHistory()

  const taglineText = 'GT APEX MARKETING'
  const [displayedTagline, setDisplayedTagline] = useState('')

  useEffect(() => {
    let taglineIndex = 0

    const taglineInterval = setInterval(() => {
      setDisplayedTagline(
        taglineText.slice(0, taglineIndex + 1)
      )
      taglineIndex++

      if (taglineIndex === taglineText.length) {
        clearInterval(taglineInterval)
      }
    }, 50)

    return () => clearInterval(taglineInterval)
  }, [])

  return (
    <section className="hero-container">
      <div className="overlay"></div>

      <div className="hero-content">
        <p className="small-text fade-in">WELCOME TO</p>

        <h2 className="tagline">{displayedTagline}</h2>

        <p className="hero-description fade-delay">
          MARKETING is here. We are MARKETING. We do MARKETING.
        </p>

        <div className="hero-buttons fade-delay-2">
          <button
            className="btn primary-btn"
            onClick={() => history.push('/services')}
          >
            Explore Services
          </button>

          <button
            className="btn secondary-btn"
            onClick={() => history.push('/about')}
          >
            About Us
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection