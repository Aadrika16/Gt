import { FaLinkedin, FaInstagram } from 'react-icons/fa'
import './index.css'

const founders = [
  {
    id: 1,
    name: 'YASHO KRISHNA DEV KOLA',
    role: 'FOUNDER AND CEO',
    image:
      'https://res.cloudinary.com/doyaebals/image/upload/v1777555961/IMG_2261_1_1_rwy07z.svg',
    linkedin:
      'https://www.linkedin.com/in/krishna-dev-kola-a6593521a?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    instagram:
      'https://www.instagram.com/krishnadevkola?igsh=MW52aHlkeHlzcmJyZA%3D%3D&utm_source=qr',
  },
  {
    id: 2,
    name: 'ALLA JEEVAN CHAITANYA REDDY',
    role: 'MANAGING DIRECTOR & CFO',
    image:
      'https://res.cloudinary.com/doyaebals/image/upload/v1777555987/file_0000000091e07208a86f51608c46390a_1_zcbymc.svg',
    linkedin:
      'https://www.linkedin.com/in/jeevan-chaitanya-reddy-alla-22827a32b',
    instagram:
      'https://www.instagram.com/alla_jeevan_chaitanya_reddy?utm_source=qr&igsh=MXBsMGxvMWNtZnNzOQ%3D%3D',
  },
]

const FounderSection = () => {
  return (
    <div className="founder-container">
      <h1 className="founder-heading">OUR FOUNDERS</h1>

      <div className="founder-grid">
        {founders.map(each => (
          <div className="founder-card" key={each.id}>
            <div className="image-wrapper">
              <img
                src={each.image}
                alt={each.name}
                className="founder-image"
              />
            </div>
            <h2 className="founder-name">{each.name}</h2>
            <div className="social-icons">
              <a
                href={each.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link linkedin"
              >
                <FaLinkedin />
              </a>

              <a
                href={each.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link instagram"
              >
                <FaInstagram />
              </a>
            </div>
            <p className="founder-role">{each.role}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FounderSection