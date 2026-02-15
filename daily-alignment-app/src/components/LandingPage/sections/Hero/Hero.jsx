import { Link } from "react-router";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-container">
        <div className="hero-one">
          <p className="sub-cta">Join Thousands Achieving More</p>
          <h1 className="hero-heading">
            Build momentum. <br />
            <span className="highlight">Achieve your goals.</span>
          </h1>
          <p className="hero-description">
            Transform your ambitions into reality with simple daily check-ins. Track alignment, build streaks, and stay focused on what truly matters.
          </p>
          <div className="hero-buttons">
            <Link className="start-button">Start Your Journey</Link>
            <Link className="see-button">See How It Works</Link>
          </div>
        </div>
        <div className="hero-two">
          <div className="dashboard-summary">
            <h2>Your Success Dashboard</h2>
            <div className="goal-streak">
              <div className="goal">
                <h3>CURRENT FOCUS</h3>
                <p>Launch my side project by end of Q1</p>
              </div>
              <div className="streak">
                <p className="current">14</p>
                <p className="current-description">DAYS STREAK </p>
              </div>
              <div className="aligned">
                <p className="current">92%</p>
                <p className="current-description">ALIGNED</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
