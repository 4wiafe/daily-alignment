import { getItem, setItem, removeItem } from "../utils/storage";

const GOAL_KEY = "goal";

export function loadGoal() {
  return getItem(GOAL_KEY) || "";
}

export function saveGoal(goal) {
  setItem(GOAL_KEY, goal);
}

export function clearGoal() {
  removeItem(GOAL_KEY);
}
