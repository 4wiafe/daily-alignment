import "./Features.css";

const cardsContent = [
  {
    id: 1,
    title: "Crystal Clear Focus",
    description: "Lock in on one meaningful goal. No distractions, no confusion, just pure focus on what matters most."
  },
  {
    id: 2,
    title: "60-Second Check-Ins",
    description: "Lightning-fast daily reflections that fit seamlessly into your routine. Track progress without the time drain."
  },
  {
    id: 3,
    title: "Visual Insights",
    description: "See your progress at a glance with beautiful charts, streak counters, and alignment metrics."
  },
  {
    id: 4,
    title: "Build Streaks",
    description: "Build momentum with consecutive aligned days. Watch your streak grow and stay motivated."
  },
  {
    id: 5,
    title: "Smart Auto-Save",
    description: "Your data is always safe. Everything saves automatically, no hassle, no accounts required."
  },
  {
    id: 6,
    title: "Access Anywhere",
    description: "Track from any device, anytime. Your progress travels with you, wherever you go."
  }
];

export default function Features() {
  return (
    <section id="features">
      <h2 className="features-heading">Powerful Features</h2>
      <h3 className="features-sub-heading">Everything you need to win</h3>
      <p className="features-description">Simple, powerful tools designed to keep you focused and moving forward every single day.</p>
      <div className="cards-container">
        {
          cardsContent.map((card) => (
            <div className="card" key={card.id}>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
            </div>
          ))
        }
      </div>
    </section>
  );
}
