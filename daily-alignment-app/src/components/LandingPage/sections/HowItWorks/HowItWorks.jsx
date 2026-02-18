import "./HowItWorks.css";

const steps = [
  {
    id: 1,
    title: "Define Your Goal",
    description: "Choose the ONE thing you want to achieve. Make it clear, specific, and meaningful to you."
  },
  {
    id: 2,
    title: "Check In Daily",
    description: "Every day, record what you worked on and mark whether it moved you closer to your goal."
  },
  {
    id: 3,
    title: "Watch Growth Happen",
    description: "Track your streaks, celebrate wins, and watch your alignment rate climb as you build momentum."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works">
      <h2 className="hiw-title">Simple Process</h2>
      <h3 className="hiw-sub-title">Three Simple Steps</h3>
      <p className="hiw-description">Getting started takes less than 2 minutes. Staying aligned takes less than 60 seconds per day.</p>
      <div className="steps-container">
        {
          steps.map(step => (
            <div className="step" key={step.id}>
              <div className="num-container">
                <span className="step-num">{step.id}</span>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))
        }
      </div>
    </section>
  );
}
