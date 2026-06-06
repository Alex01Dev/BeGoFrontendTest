import "./orderTimeline.scss";

interface Props {
  currentStatus: number;
}

const steps = [
  "Created Order",
  "Accepted Order",
  "Pickup set up",
  "Pickup Completed",
];

export default function OrderTimeline({
  currentStatus,
}: Props) {
  return (
    <div className="order-timeline">
      {steps.map((step, index) => {
        const stepNumber =
          index + 1;

        const completed =
          currentStatus >= stepNumber;

        return (
          <div
            key={step}
            className="timeline-step"
          >
            <div
              className={`timeline-dot ${
                completed
                  ? "completed"
                  : ""
              }`}
            />

            <span>{step}</span>
          </div>
        );
      })}
    </div>
  );
}