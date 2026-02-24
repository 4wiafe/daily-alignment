import { useEffect, useState } from "react";
import { calculateAlignmentRate } from "../Dashboard/services/checkinService";

export default function AlignmentSection() {
  const [alignment, setAlignment] = useState({
    rate: 0,
    yesDays: 0,
    totalDays: 0,
  });

  useEffect(() => {
    const data = calculateAlignmentRate();
    setAlignment(data);
  }, []);

  return (
    <div className="alignment">
      <h2>{alignment.rate}%</h2>
      <p>ALIGNMENT RATE</p>
      <span>
        {alignment.yesDays} of {alignment.totalDays} days
      </span>
    </div>
  );
}