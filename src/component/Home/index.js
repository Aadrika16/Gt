import Header from "../Header"
import Carousel from "../Carousel"
import StatsCards from "../StatsCards"
import PitStopProtocol from "../PitStopProtocol"
import ServerRoomSection from "../ServerRoomSection"
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
      <PitStopProtocol />
      <ServerRoomSection />
      {/* Footer Section */} 
      <FooterSection />
      
    </div>
  )
}

export default Home