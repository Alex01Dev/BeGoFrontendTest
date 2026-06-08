import "./trackingCard.scss";

import profileImage from "../../assets/images/profile.png";

interface Props {
  status: number;
  time: string;
}

const steps = [
  "Created Order",
  "Accepted Order",
  "Pickup set up by William",
  "Pickup Completed",
];

export default function TrackingCard({
  status,
  time,
}: Props) {
  const handleTrackOrder = () => {
    if (status < 3) return;
    console.log("Track Order");
  };

  return (
    <div className="tracking-card">
      <div className="tracking-card__avatar-wrapper">
        <img
          src={profileImage}
          alt="Driver"
          className="tracking-card__avatar"
        />
      </div>

      <div className="tracking-card__body">
        <h3 className="tracking-card__time">
          {time}
        </h3>

        <div className="tracking-card__timeline">
          {steps.map((step, index) => {
            const stepNumber = index + 1;

            // completed: pasos anteriores al activo
            const completed = status > stepNumber;

            // active: paso actual
            const active = status === stepNumber;

            // done: completed O active → ambos muestran ✓ amarillo
            const done = completed || active;

            return (
              <div
                key={step}
                className="timeline-step"
              >
                <div className="timeline-marker">
                  <div
                    className={`timeline-dot ${done ? "done" : ""}`}
                  >
                    {done && (
                      <svg
                        width="10"
                        height="8"
                        viewBox="0 0 10 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 3.5L3.8 6.5L9 1"
                          stroke="#000"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>

                  {index < steps.length - 1 && (
                    <div
                      className={`timeline-line ${done ? "done" : ""}`}
                    />
                  )}
                </div>

                <span
                  className={`timeline-label ${done ? "timeline-label--active" : ""}`}
                >
                  {step}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <button
        className={`tracking-card__button ${status >= 3 ? "tracking-card__button--active" : ""}`}
        disabled={status < 3}
        onClick={handleTrackOrder}
      >
        Track Order
      </button>
    </div>
  );
}