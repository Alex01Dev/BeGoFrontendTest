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
    if (status < 3) {
      return;
    }

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

            const completed =
              status > stepNumber;

            const active =
              status === stepNumber;

            return (
              <div
                key={step}
                className="timeline-step"
              >
                <div className="timeline-marker">
                  <div
                    className={`
                      timeline-dot
                      ${completed ? "completed" : ""}
                      ${active ? "active" : ""}
                    `}
                  >
                    {completed && "✓"}
                  </div>

                  {index <
                    steps.length - 1 && (
                    <div
                      className={`
                        timeline-line
                        ${
                          status >
                          stepNumber
                            ? "completed"
                            : ""
                        }
                      `}
                    />
                  )}
                </div>

                <span
                  className={`
                    timeline-label
                    ${
                      completed ||
                      active
                        ? "timeline-label--active"
                        : ""
                    }
                  `}
                >
                  {step}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <button
        className={`
          tracking-card__button
          ${
            status >= 3
              ? "tracking-card__button--active"
              : ""
          }
        `}
        disabled={status < 3}
        onClick={handleTrackOrder}
      >
        Track Order
      </button>
    </div>
  );
}