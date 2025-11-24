import { useEffect, useRef } from "react";
import "./App.css";
import logo from "./assets/dylans-pet-site-logo.png";

function App() {
  const calendlyRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // If Calendly script already exists, don't add it again
    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleBookNowClick = () => {
    if (!calendlyRef.current) return;
    calendlyRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactClick = () => {
    if (!contactRef.current) return;
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="page">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <img
            src={logo}
            alt="Dylan's Pet Site logo"
            className="logo-image"
          />
          <h1>Dylan's Dog Walking & Pet Sitting</h1>
          <p className="tagline">
            Reliable walks and loving in-home care for your furry family members.
          </p>
          <div className="hero-actions">
            <button className="cta-button" onClick={handleBookNowClick}>
              Book a Walk
            </button>
            <button className="cta-button secondary" onClick={handleContactClick}>
              Contact for Pet-Sitting
            </button>
          </div>
        </div>
      </header>

      {/* SERVICES */}
      <section className="section">
        <h2>Services</h2>
        <div className="card-grid">
          <div className="card">
            <h3>Dog-Walking</h3>
            <p className="price-tag">$20 / walk / dog</p>
            <p>
              Daily walks, potty breaks, and exercise tailored to your dog's
              energy level and routine.
            </p>
            <ul>
              <li>20–60 minute walks</li>
              <li>Fresh water and quick check-in</li>
              <li>Photo update after each visit</li>
            </ul>
          </div>
          <div className="card">
            <h3>Pet-Sitting</h3>
            <p className="price-tag">Custom pricing based on your pet's needs</p>
            <p>
              In-home drop-ins and overnight stays so your pets stay relaxed in
              their own space.
            </p>
            <ul>
              <li>Feeding and litter/yard cleanup</li>
              <li>Playtime & cuddles</li>
              <li>Medication administration (if needed)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section">
        <h2>About Dylan</h2>
        <p>
          Hi! I'm Dylan, a lifelong animal lover and experienced pet caregiver.
          I provide dependable, communicative, and flexible dog-walking and
          pet-sitting services so you can travel or work with peace of mind.
        </p>
      </section>

      {/* SERVICE AREA */}
      <section className="section">
        <h2>Service Area</h2>
        <p>
          Currently serving pets in <strong>Boulder, CO</strong>.
          Not sure if you're in range? Reach out and we'll work it out.
        </p>
      </section>

      {/* CONTACT */}
      <section className="section" ref={contactRef}>
        <h2>Contact</h2>
        <p>
          Pet-sitting is scheduled directly with me.
        </p>
        <p>
          For pet-sitting (or any questions), please call or email:
        </p>
        <p>
          <strong>Phone:</strong>{" "}
          <a href="tel:4089665319">(408) 966-5319</a>
          <br />
          <strong>Email:</strong>{" "}
          <a href="mailto:dylans.pet.site@gmail.com">dylans.pet.site@gmail.com</a>
        </p>
        <p>
          We'll discuss your pets' needs, schedule, and any special requests to customize
          care for your home.
        </p>
      </section>

      {/* CALENDLY */}
      <section className="section" ref={calendlyRef}>
        <h2>Schedule Online</h2>
        <p className="center">
          Choose a time that works for you — no back-and-forth messaging needed.
        </p>
        <div
          className="calendly-container"
          // Replace data-url with your Calendly link:
          data-url="https://calendly.com/dylans-pet-site/dog-walking"
        >
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/dylans-pet-site/dog-walking"
            style={{ width: "100%", minHeight: "800px" }}
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>
          Questions? Email{" "}
          <a href="mailto:dylans.pet.site@gmail.com">dylans.pet.site@gmail.com</a>
        </p>
        <p>© {new Date().getFullYear()} Dylan's Dog-Walking & Pet-Sitting</p>
      </footer>
    </div>
  );
}

export default App;