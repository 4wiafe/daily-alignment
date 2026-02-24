import { useEffect, useState } from "react";
import { calculateStreak } from "../Dashboard/services/checkService";

export default function StreakSection() {
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const value = calculateStreak();
    setStreak(value);
  }, []);

  return (
    <section className="streak">
      <h2>Current Streak</h2>
      <p>{streak} days</p>
    </section>
  );
}
