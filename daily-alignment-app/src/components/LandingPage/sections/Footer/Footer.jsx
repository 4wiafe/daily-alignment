import { Link } from "react-router-dom";
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
            <li>
              <a href="#features" className="link">Features</a>
            </li>
            <li>
              <a href="#how-it-works" className="link">How It Works</a>
            </li>
            <li>
              <Link to="/dashboard" className="link-button footer-btn link">Get Started</Link>
            </li>
          </ul>
        </div>

        <div className="terms">
          <h3>LEGAL</h3>
          <ul>
            <li className="link">Privacy</li>
            <li className="link">Terms of service</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
