import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav>
        <div className="logo-container">
          <Link to="/" className="logo">Daily Alignment</Link>
        </div>

        <div className="links-container">
          <ul className="nav-links">
            <li>
              <a href="#how-it-works" className="link">How It Works</a>
            </li>
            <li>
              <a href="#features" className="link">Features</a>
            </li>
          </ul>
        </div>

        <div className="get-started">
          <button type="button">Get Started</button>
        </div>

        <div className="menu">
          <button type="button">
            <span className="one"></span>
            <span className="two"></span>
            <span className="three"></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
