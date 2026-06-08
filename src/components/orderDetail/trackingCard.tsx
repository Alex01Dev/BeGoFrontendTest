import "./trackingCard.scss";

import profileImage from "../../assets/images/profile.png";

import type { StatusStep } from "../../types/upcomingOrderTypes";

interface Props {
  steps:    StatusStep[];
  canTrack: boolean;
  time:     string;
}

export default function TrackingCard({
  steps,
  canTrack,
  time,
}: Props) {
  const handleTrackOrder = () => {
    if (!canTrack) return;
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
            const lastActiveIndex = steps
              .map(s => s.active)
              .lastIndexOf(true);

            const isActive    = index === lastActiveIndex;
            const isCompleted = step.active && !isActive;
            const done        = isCompleted || isActive;

            return (
              <div
                key={`${step.status}-${index}`}
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
                  {step.status}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <button
        className={`tracking-card__button ${canTrack ? "tracking-card__button--active" : ""}`}
        disabled={!canTrack}
        onClick={handleTrackOrder}
      >
        Track Order
      </button>
    </div>
  );
}