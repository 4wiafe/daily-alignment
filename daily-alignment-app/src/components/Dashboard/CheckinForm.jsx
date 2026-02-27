import { useState, useEffect } from "react";
import { saveCheckin } from "./services/alignmentService";
import { Link } from "react-router-dom";

const GOAL_KEY = "user_goal";

export default function CheckInForm() {
  const [goal, setGoal] = useState("");
  const [hasGoal, setHasGoal] = useState(false);
  const [reflection, setReflection] = useState("");
  const [aligned, setAligned] = useState(null);

  useEffect(() => {
    const savedGoal = localStorage.getItem(GOAL_KEY);
    if (savedGoal) {
      setGoal(savedGoal);
      setHasGoal(true);
    }
  }, []);

  function handleGoalSubmit(e) {
    e.preventDefault();

    if (!goal.trim()) return;

    localStorage.setItem(GOAL_KEY, goal);
    setHasGoal(true);
  }

  function handleCheckinSubmit(e) {
    e.preventDefault();

    if (aligned === null) return;

    saveCheckin(aligned, reflection);

    setReflection("");
    setAligned(null);
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

      {!hasGoal ? (
        <div className="checkin-card">
          <h2>Daily Check-In</h2>

          <p>⚠️ You haven't set a goal yet. Set one now.</p>

          <form onSubmit={handleGoalSubmit}>
            <textarea
              placeholder="What is your main goal right now?"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              rows={3}
            />

            <button type="submit">Submit Goal</button>
          </form>
        </div>
      ) : (
        <div className="checkin-card">
          <h2>What did you work on today?</h2>

          <form onSubmit={handleCheckinSubmit}>
            <textarea
              placeholder="Write your reflection..."
              value={reflection}
              onChange={(e) => setReflection(e.target.value)}
              rows={4}
            />

            <div className="alignment-buttons">
              <p>Did this help your goal?</p>

              <button
                type="button"
                className={aligned === true ? "active" : ""}
                onClick={() => setAligned(true)}
              >
                Yes, aligned
              </button>

              <button
                type="button"
                className={aligned === false ? "active" : ""}
                onClick={() => setAligned(false)}
              >
                No, not aligned
              </button>
            </div>

            <button type="submit">Submit Check-In</button>
          </form>
        </div>
      )}
    </>
  );
}
