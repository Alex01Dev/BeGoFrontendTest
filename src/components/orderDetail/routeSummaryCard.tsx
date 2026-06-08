import "./RouteSummaryCard.scss";

import TrailerIcon from "../../assets/icons/TrailerIcon";
import LocationIcon from "../../assets/icons/LocationIcon";

import {
  extractCityFromAddress,
} from "../../utils/formatters";

interface Props {
  orderNumber: string;
  referenceNumber: string;

  pickupAddress: string;
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
  referenceNumber,
  pickupAddress,
  dropoffAddress,
  activeDestination,
  onChange,
}: Props) {
  const pickupCity =
    extractCityFromAddress(
      pickupAddress
    );

  const dropoffCity =
    extractCityFromAddress(
      dropoffAddress
    );

  return (
    <div className="route-card">
      <div className="route-card__header">
        <span className="route-card__reference">
          Referencia {referenceNumber}
        </span>

        <h2>
          Order #{orderNumber}
        </h2>
      </div>

      <div className="route-layout">

        <div className="route-layout__left">

          <div
            className={`route-stop__icon ${
              activeDestination === "pickup"
                ? "active"
                : ""
            }`}
            onClick={() =>
              onChange("pickup")
            }
          >
            <TrailerIcon
              color={
                activeDestination ===
                "pickup"
                  ? "#000"
                  : "#FEFF00"
              }
            />
          </div>

          <div className="route-line" />

          <div
            className={`route-stop__icon route-stop__icon--dropoff ${
              activeDestination ===
              "dropoff"
                ? "active"
                : ""
            }`}
            onClick={() =>
              onChange("dropoff")
            }
          >
            <LocationIcon
              color={
                activeDestination ===
                "dropoff"
                  ? "#000"
                  : "#FEFF00"
              }
            />
          </div>
        </div>

        <div className="route-layout__right">

          <div
            className={`route-stop-content ${
              activeDestination ===
              "pickup"
                ? "active"
                : ""
            }`}
            onClick={() =>
              onChange("pickup")
            }
          >
            <span className="route-stop__label">
              PICKUP
            </span>

            <h4>{pickupCity}</h4>

            <p>{pickupAddress}</p>

            <div className="route-stop__status accepted">
              Accepted
            </div>
          </div>

          <div
            className={`route-stop-content route-stop-content--dropoff ${
              activeDestination ===
              "dropoff"
                ? "active"
                : ""
            }`}
            onClick={() =>
              onChange("dropoff")
            }
          >
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
    </div>
  );
}