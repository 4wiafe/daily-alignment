import { loadCheckins } from "./checkService";

export function calculateAlignmentRate() {
  const checkins = loadCheckins();

  if (!checkins.length) {
    return {
      rate: 0,
      yesDays: 0,
      totalDays: 0,
    };
  }

  const yesDays = checkins.filter((c) => c.completed).length;
  const totalDays = checkins.length;

  const rate = Math.round((yesDays / totalDays) * 100);

  return {
    rate,
    yesDays,
    totalDays,
  };
}
