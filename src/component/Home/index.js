import Header from "../Header"
import Carousel from "../Carousel"
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

      {/* Full Width Carousel */}
      <Carousel />
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