import Header from "../Header"
import StatsCards from "../StatsCards"
import PitStopProtocol from "../PitStopProtocol"
import LandingPage from "../LandingPage"
import ServicesCards from "../ServicesCards"
import ServerRoomSection from "../ServerRoomSection"
import Pricing from "../Pricing"
import FooterSection from "../FooterSection"

import './index.css'

const Home = () => {
  return (
    <div className="home-container">
      {/* Navbar */}
      <Header />
       <div className="bg-con">
        <div className="hero-overlay">
          <h1 className="hero-title animate-path">
            WELLCOME TO <br className="mobile-break" />
            GT APEX
          </h1>
        </div>
      </div>
      {/* Full Width Carousel */}
      <StatsCards />
      <LandingPage />
      <ServicesCards />
      <PitStopProtocol />
      <Pricing />
      <ServerRoomSection />
      {/* Footer Section */} 
      <FooterSection />
      
    </div>
  )
}

export default Home