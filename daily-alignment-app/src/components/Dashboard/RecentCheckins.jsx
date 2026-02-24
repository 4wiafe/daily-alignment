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
              
              <div className="checkin-status">
                {checkin.completed
                  ? "I moved toward my goal"
                  : "I didn't move today"}
              </div>

              {checkin.reflection && (
                <p className="checkin-reflection">
                  {checkin.reflection}
                </p>
              )}

              <span className="checkin-date">
                {checkin.date}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
