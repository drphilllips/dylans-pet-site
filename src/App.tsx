import { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const calendlyRef = useRef<HTMLDivElement | null>(null);

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

  return (
    <div className="page">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <div className="logo-circle">🐾</div>
          <h1>Dylan&apos;s Dog-Walking &amp; Pet-Sitting</h1>
          <p className="tagline">
            Reliable walks and loving in-home care for your furry family members.
          </p>
          <button className="cta-button" onClick={handleBookNowClick}>
            Book a Walk or Visit
          </button>
        </div>
      </header>

      {/* SERVICES */}
      <section className="section">
        <h2>Services</h2>
        <div className="card-grid">
          <div className="card">
            <h3>Dog-Walking</h3>
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
            <p>
              In-home drop-ins and overnight stays so your pets stay relaxed in
              their own space.
            </p>
            <ul>
              <li>Feeding and litter/yard cleanup</li>
              <li>Playtime &amp; cuddles</li>
              <li>Medication administration (if needed)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section">
        <h2>About Dylan</h2>
        <p>
          Hi! I&apos;m Dylan, a lifelong animal lover and experienced pet caregiver.
          I provide dependable, communicative, and flexible dog-walking and
          pet-sitting services so you can travel or work with peace of mind.
        </p>
      </section>

      {/* SERVICE AREA */}
      <section className="section">
        <h2>Service Area</h2>
        <p>
          Currently serving pets in <strong>Gunbarrel, Boulder CO</strong>.
          Not sure if you&apos;re in range? Reach out and we&apos;ll work it out.
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
          <a href="mailto:dphillips072402@gmail.com">dphillips072402@gmail.com</a>
        </p>
        <p>© {new Date().getFullYear()} Dylan's Dog-Walking & Pet-Sitting</p>
      </footer>
    </div>
  );
}

export default App;