import { useState } from "react";
import { loadGoal, saveGoal } from "../Dashboard/services/goalService";

export default function GoalSection() {
  const [goal, setGoal] = useState("");
  const [savedGoal, setSavedGoal] = useState(loadGoal());

  const handleGoal = (event) => {
    setGoal(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    saveGoal(goal);
    setSavedGoal(goal);
    setGoal("");
  };

  return (
    <section id="goal">
      <div className="goal-form">
        {savedGoal ? (
          <p className="set-goal">{savedGoal}</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="goal" className="goal-label">
              Set Your Goal
            </label>

            <input
              type="text"
              id="goal"
              className="goal-input"
              value={goal}
              onChange={handleGoal}
              placeholder="What is your main goal?"
              required
            />

            <button type="submit" className="submit">
              Set goal
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
