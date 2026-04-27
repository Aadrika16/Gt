
import "./index.css";

const services = [
  "Social Media Management",
  "Reels & Video Production",
  "Google Ads Management",
  "Email Marketing",
  "Professional Photo & Video Shoots",
  "Competitor Analysis",

  "Content Strategy & Planning",
  "Copywriting & Captions",
  "Influencer Marketing",
  "WhatsApp & SMS Marketing",
  "Analytics & Monthly Reporting",
  "LinkedIn Management",

  "Graphic Design & Creatives",
  "Meta Ads (Facebook/Instagram)",
  "SEO (On-page & Off-page)",
  "Brand Identity & Strategy",
  "Event & Occasion Marketing",
  "Website Content Management"
];

const ServicesCards = () => {
  const handleClick = (service) => {
    alert(`You clicked: ${service}`);
    // You can replace this with navigation or modal logic
  };

  return (
    <section className="services">
      <div className="services-header">
        <div>
          <p className="tag">— TECHNICAL CAPABILITIES</p>
          <h1>
            OUR FULL SUITE <br />
            <span>OF SERVICES</span>
          </h1>
        </div>

        <p className="desc">
          From ideation and content production to paid performance and influencer
          marketing — every deliverable is built for measurable results.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            onClick={() => handleClick(service)}
          >
            <div className="dot"></div>
            <p>{service}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesCards
