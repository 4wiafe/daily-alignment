import "./Setup.css";

export default function Setup() {
  return (
    <section id="setup">
      <div className="setup-container">
        <div className="per-day">
          <p className="green">60</p>
          <p className="white">seconds per day</p>
        </div>
        <div className="price">
          <p className="green">100%</p>
          <p className="white">Free</p>
        </div>
        <div className="hassle">
          <p className="green">0</p>
          <p className="white">Setup hassle</p>
        </div>
        <div className="potential">
          <p className="green">∞</p>
          <p className="white">Potential unlocked</p>
        </div>
      </div>
    </section>
  );
}
