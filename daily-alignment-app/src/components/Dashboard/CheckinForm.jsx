import { useState, useEffect } from "react";
import { saveCheckin } from "./services/alignmentService";
import { Link } from "react-router-dom";
import "./Dashboard.css"

const GOAL_KEY = "goal";

export default function CheckInForm() {
  const [goal, setGoal] = useState("");
  const [hasGoal, setHasGoal] = useState(false);
  const [reflection, setReflection] = useState("");
  const [aligned, setAligned] = useState(null);
  const [hasCheckedInToday, setHasCheckedInToday] = useState(false);

  useEffect(() => {
    const savedGoal = localStorage.getItem(GOAL_KEY);

    if (savedGoal) {
      setGoal(savedGoal);
      setHasGoal(true);

      const todayCheckin = saveCheckin();
      if (todayCheckin) {
        setHasCheckedInToday(true);
      }
    }
  }, []);

  function handleCheckinSubmit(e) {
    e.preventDefault();

    if (aligned === null) return;

    saveCheckin(aligned, reflection);

    setReflection("");
    setAligned(null);
    setHasCheckedInToday(true);
  }

  if (!hasGoal) {
    return (
      <>
        <header className="dashboard-header">
          <nav className="dashboard-nav">
            <div className="dashboard logo-container">
              <Link to="/dashboard" className="dashboard logo">
                Daily Alignment
              </Link>
              <p>Build momentum, achieve goals</p>
            </div>

            <div className="dashboard-links">
              <Link to="/dashboard" className="dashboard-link">
                Dashboard
              </Link>
              <Link to="/checkin-form" className="check-in-link">
                Daily Check-In
              </Link>
            </div>
          </nav>
        </header>

        <div className="checkin-card">
          <h2>Daily Check-In</h2>
          <p className="no-goal">
            ⚠️ You haven't set a goal yet. Set one on your dashboard.
          </p>

          <Link className="to-dashboard" to="/dashboard">Go to Dashboard</Link>
        </div>
      </>
    );
  }

  return (
    <>
      <header className="dashboard-header">
        <nav className="dashboard-nav">
          <div className="dashboard logo-container">
            <Link to="/dashboard" className="dashboard logo">
              Daily Alignment
            </Link>
            <p>Build momentum, achieve goals</p>
          </div>

          <div className="dashboard-links">
            <Link to="/dashboard" className="dashboard-link">
              Dashboard
            </Link>
            <Link to="/checkin-form" className="check-in-link">
              Daily Check-In
            </Link>
          </div>
        </nav>
      </header>

      <div className="checkin-card">
        <h2>Daily Check-In</h2>

        <p className="stored-goal">{goal}</p>

        {hasCheckedInToday ? (
          <p>You've already checked in today. Come back tomorrow.</p>
        ) : (
          <form className="checkin-form" onSubmit={handleCheckinSubmit}>
            <textarea
              placeholder="Write your reflection..."
              value={reflection}
              onChange={(e) => setReflection(e.target.value)}
              rows={4}
              required
            />

            <div className="alignment-buttons">
            <p>Did this help your goal?</p>

            <label>
            <input
              type="radio"
              name="alignment"
              value="yes"
              checked={aligned === true}
              onChange={() => setAligned(true)}
            />
              Yes, aligned
            </label><br />

            <label>
            <input
              type="radio"
              name="alignment"
              value="no"
              checked={aligned === false}
              onChange={() => setAligned(false)}
            />
              No, not aligned
            </label>
            </div>

            <button className="submit-checkin" type="submit">Submit Check-In</button>
          </form>
        )}
      </div>
    </>
  );
}
