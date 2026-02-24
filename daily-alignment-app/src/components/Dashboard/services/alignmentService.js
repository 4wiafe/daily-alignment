const CHECKIN_KEY = "checkins";

function getTodayDate() {
  return new Date().toISOString().split("T")[0];
}

export function loadCheckins() {
  try {
    const saved = localStorage.getItem(CHECKIN_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export function saveCheckin(completed, reflection) {
  const checkins = loadCheckins();
  const today = getTodayDate();

  const alreadyChecked = checkins.find((c) => c.date === today);
  if (alreadyChecked) return;

  const newCheckin = {
    date: today,
    completed,
    reflection,
  };

  const updated = [...checkins, newCheckin];
  localStorage.setItem(CHECKIN_KEY, JSON.stringify(updated));
}

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

export function getRecentCheckins(limit = 5) {
  const checkins = loadCheckins();

  if (!checkins.length) return [];

  const sorted = [...checkins].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return sorted.slice(0, limit);
}
