import { useEffect, useState } from "react";
import { getRecentCheckins } from "./services/alignmentService";

export default function RecentCheckins() {
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    const data = getRecentCheckins();
    setRecent(data);
  }, []);

  return (
    <div className="recent-checkins">
      <h2>Recent Check-Ins</h2>

      {recent.length === 0 ? (
        <p className="empty-message">
          No check-ins yet. Start your journey today!
        </p>
      ) : (
        <ul className="checkin-list">
          {recent.map((checkin) => (
            <li key={checkin.date} className="checkin-item">
              
              <span className="checkin-status">
                {checkin.completed
                  ? "I moved towards my goal"
                  : "I didn't move towards my goal"}
              </span>

              {checkin.reflection && (
                <p className="checkin-reflection">
                  {checkin.reflection}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
