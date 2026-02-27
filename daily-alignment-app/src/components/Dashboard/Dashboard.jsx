import { Link } from "react-router-dom";
import GoalSection from "./GoalSelection";
import StreakSection from "./StreakSection";
import AlignmentSection from "./AlignmentSection";
import RecentCheckins from "./RecentCheckins";
import "./Dashboard.css";

export default function Dashboard() {
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

      <main className="dashboard-main">
        <GoalSection />
        <section className="bento">
          <StreakSection />
          <AlignmentSection />
          <RecentCheckins />
        </section>
      </main>
    </>
  );
}
