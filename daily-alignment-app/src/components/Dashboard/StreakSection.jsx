import { useEffect, useState } from "react";
import { calculateStreak } from "../Dashboard/services/checkService";

export default function StreakSection() {
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const value = calculateStreak();
    setStreak(value);
  }, []);

  return (
    <div className="streak">
      <h2 className="count">{streak}</h2>
      <p>CURRENT DAYS</p>
      <span>aligned days in a row</span>
    </div>
  );
}
