import "./Setup.css";

export default function Setup() {
  return (
    <section>
      <div className="per-day">
        <p className="time">60</p>
        <p className="time-des">seconds per day</p>
      </div>
      <div className="price">
        <p className="rate">100%</p>
        <p className="rate-des">Free</p>
      </div>
      <div className="hassle">
        <p className="hassle-num">0</p>
        <p className="hassle-des">Setup hassle</p>
      </div>
      <div className="potential">
        <p className="infinite">∞</p>
        <p className="potential-des">seconds per day</p>
      </div>
    </section>
  );
}
