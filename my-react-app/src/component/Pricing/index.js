
import "./index.css";

const plans = [
  {
    name: "BASIC",
    price: "Rs.35,000",
    subtitle: "PER MONTH (EXCL. GST)",
    features: [
      "Social media management (Instagram + Facebook)",
      "Monthly content calendar planning",
      "10-12 aesthetic grid posts / month",
      "4 reels per month",
      "6-7 story uploads per week"
    ],
    button: "SELECT STARTER",
    highlight: false
  },
  {
    name: "MEDIUM",
    price: "Rs.55,000",
    subtitle: "PER MONTH (EXCL. GST)",
    features: [
      "Everything in Basic",
      "Google Ads management",
      "On-page SEO optimization",
      "2 influencer collaborations / month",
      "Professional video shoot / month",
      "Email marketing (1 campaign / month)"
    ],
    button: "SELECT GROWTH",
    highlight: true
  },
  {
    name: "PREMIUM",
    price: "Rs.1,00,000",
    subtitle: "PER MONTH (EXCL. GST)",
    features: [
      "Everything in Medium",
      "Full 360° marketing strategy",
      "Meta + Google + YouTube Ads",
      "LinkedIn page management",
      "Crisis communication support",
      "Priority turnaround on creatives"
    ],
    button: "SELECT FULL 360",
    highlight: false
  }
];

const addOns = [
  { title: "Ad Budget (Meta / Google)", value: "As per client" },
  { title: "Blogger / Influencer Payments", value: "As per collab" },
  { title: "Extra Video Shoots", value: "Rs.8,000 — Rs.15,000" },
  { title: "Website Development", value: "Custom Quote" },
  { title: "Brand Identity Design", value: "Custom Quote" },
  { title: "Event Photography", value: "Rs.5,000 — Rs.12,000" }
];

const Pricing = () => {
  return (
    <section className="pricing">
      <h2>
        CHOOSE YOUR <span>RETAINER PLAN</span>
      </h2>
      <p className="sub-text">
        ⭐ Medium plan is most popular among our retail clients
      </p>

      {/* PLANS */}
      <div className="plans">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`card ${plan.highlight ? "highlight" : ""}`}
          >
            {plan.highlight && <div className="badge">MOST POPULAR</div>}

            <h4>{plan.name}</h4>
            <h3>{plan.price}</h3>
            <p className="subtitle">{plan.subtitle}</p>

            <ul>
              {plan.features.map((f, index) => (
                <li key={index}>✔ {f}</li>
              ))}
            </ul>

            <button className="btn">{plan.button}</button>
          </div>
        ))}
      </div>

      {/* ADD ONS */}
      <h3 className="addons-title">ADD-ONS (Billed Separately)</h3>
      <div className="addons">
        {addOns.map((item, i) => (
          <div key={i} className="addon-card">
            <p>{item.title}</p>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing
