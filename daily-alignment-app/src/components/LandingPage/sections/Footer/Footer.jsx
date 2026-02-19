import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="catchphrase">
          <h3>Daily Alignment</h3>
          <p>Build momentum. Achieve goals. Win every day.</p>
        </div>

        <div className="product">
          <h3>PRODUCT</h3>
          <ul>
            <li>FEATURES</li>
            <li>How It Works</li>
            <li>Get Started</li>
          </ul>
        </div>

        <div className="terms">
          <h3>LEGAL</h3>
          <ul>
            <li>Privacy</li>
            <li>Terms of service</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
