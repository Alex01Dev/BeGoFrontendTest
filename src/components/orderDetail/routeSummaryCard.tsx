import "./RouteSummaryCard.scss";

import TrailerIcon from "../../assets/icons/TrailerIcon";
import LocationIcon from "../../assets/icons/LocationIcon";

interface Props {
  orderNumber: string;

  pickupCity: string;
  pickupAddress: string;

  dropoffCity: string;
  dropoffAddress: string;

  activeDestination:
    | "pickup"
    | "dropoff";

  onChange: (
    destination:
      | "pickup"
      | "dropoff"
  ) => void;
}

export default function RouteSummaryCard({
  orderNumber,
  pickupCity,
  pickupAddress,
  dropoffCity,
  dropoffAddress,
  activeDestination,
  onChange,
}: Props) {
  return (
    <div className="route-card">
      <div className="route-card__header">
        <span>
          Order #{orderNumber}
        </span>
      </div>

      <div
        className={`route-stop ${
          activeDestination === "pickup"
            ? "active"
            : ""
        }`}
        onClick={() =>
          onChange("pickup")
        }
      >
        <div
          className={`route-stop__icon ${
            activeDestination ===
            "pickup"
              ? "route-stop__icon--active"
              : ""
          }`}
        >
          <TrailerIcon
            color={
              activeDestination ===
              "pickup"
                ? "#000000"
                : "#FFFFFF"
            }
            size={22}
          />
        </div>

        <div className="route-stop__info">
          <span className="route-stop__label">
            PICKUP
          </span>

          <h4>{pickupCity}</h4>

          <p>{pickupAddress}</p>

          <div className="route-stop__status accepted">
            Accepted
          </div>
        </div>
      </div>

      <div className="route-line" />

      <div
        className={`route-stop ${
          activeDestination ===
          "dropoff"
            ? "active"
            : ""
        }`}
        onClick={() =>
          onChange("dropoff")
        }
      >
        <div
          className={`route-stop__icon ${
            activeDestination ===
            "dropoff"
              ? "route-stop__icon--active"
              : "route-stop__icon--inactive"
          }`}
        >
          <LocationIcon
            color={
              activeDestination ===
              "dropoff"
                ? "#000000"
                : "#FEFF00"
            }
            size={24}
          />
        </div>

        <div className="route-stop__info">
          <span className="route-stop__label">
            DROPOFF
          </span>

          <h4>{dropoffCity}</h4>

          <p>{dropoffAddress}</p>

          <div className="route-stop__status hold">
            On hold
          </div>
        </div>
      </div>
    </div>
  );
}