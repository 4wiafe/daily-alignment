import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header>
      <nav>
        <div className="logo-container">
          <Link to="/" className="logo">Daily Alignment</Link>
        </div>

        <div className={`links-container ${isOpen && "active"}`}>
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
          <button type="button" onClick={handleMenu}>
            <span className={`one ${isOpen && "active"}`}></span>
            <span className={`two ${isOpen && "active"}`}></span>
            <span className={`three ${isOpen && "active"}`}></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
