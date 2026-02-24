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
