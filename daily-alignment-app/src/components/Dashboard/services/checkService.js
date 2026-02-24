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

export function saveCheckin(completed) {
  const checkins = loadCheckins();
  const today = getTodayDate();

  const alreadyChecked = checkins.find((current) => current.date === today);
  if (alreadyChecked) return;

  const newCheckin = {
    date: today,
    completed,
  };

  const updated = [...checkins, newCheckin];
  localStorage.setItem(CHECKIN_KEY, JSON.stringify(updated));
}

export function calculateStreak() {
  const checkins = loadCheckins();

  if (!checkins.length) return 0;

  const sorted = [...checkins].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  let streak = 0;
  let currentDate = new Date();

  for (let checkin of sorted) {
    const checkinDate = new Date(checkin.date);

    const diff =
      (currentDate - checkinDate) / (1000 * 60 * 60 * 24);

    if (Math.floor(diff) > 1) break;

    if (!checkin.completed) break;

    streak++;
    currentDate = checkinDate;
  }

  return streak;
}
