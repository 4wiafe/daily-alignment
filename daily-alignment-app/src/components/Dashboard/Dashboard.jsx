import { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const KEY = "goal";

function loadGoal() {
  try {
    const saved = localStorage.getItem(KEY);
    const parsed = JSON.parse(saved);

    if (!parsed) return "";

    return parsed;
  } catch (error) {
    console.error(error);
  }
}

 export default function Dashboard() {
  const [goal, setGoal] = useState("");
  const [savedGoal, setSavedGoal] = useState(loadGoal());

  const handleGoal = (event) => {
    setGoal(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSavedGoal(goal);
    setGoal("");

    localStorage.setItem(KEY, JSON.stringify(goal));
  };

  return(
    <>
      <header className="dashboard-header">
        <nav className="dashboard-nav">
          <div className="dashboard logo-container">
            <Link to="/dashboard" className="dashboard logo">Daily Alignment</Link>
            <p>Build momentum, achieve goals</p>
          </div>
          <div className="dashboard-links">
            <Link to="/dashboard" className="dashboard-link">Dashboard</Link>
            <Link to="/checkIn" className="check-in-link">Daily Check-In</Link>
          </div>
        </nav>
      </header>

      <main className="dashboard-main">
        <section id="goal" className="goal">
          {
            savedGoal ? (
              <p>{savedGoal}</p>
            ) : (
              <form onSubmit={handleSubmit}>
                <label htmlFor="goal" className="goal-label">
                  Set Your Goal
                </label>
                <input 
                    type="text" 
                    name="goal" 
                    id="goal"  
                    className="goal-input"
                    value={goal}
                    onChange={handleGoal}
                    placeholder="What is your main goal?"
                    required
                  />
                <button 
                  type="submit" className="submit">Set goal</button>
              </form>
            )
          }
        </section>
      </main>
    </>
  );
 }
