import "./orderLocation.scss";
import TrailerIcon from "../../assets/icons/TrailerIcon";
import LocationIcon from "../../assets/icons/LocationIcon";

interface Props {
  type: "PICKUP" | "DROPOFF";
  city: string;
  address: string;
  date: string;
  time: string;
}

export default function OrderLocation({
  type,
  city,
  address,
  date,
  time,
}: Props) {
  return (
    <div
      className={`order-card__location ${
        type === "PICKUP"
          ? "pickup"
          : "dropoff"
      }`}
    >
      <div
        className={`location-icon ${
          type === "PICKUP"
            ? "location-icon--pickup"
            : "location-icon--dropoff"
        }`}
      >
        {type === "PICKUP" ? (
          <TrailerIcon />
        ) : (
          <LocationIcon />
        )}
      </div>

      <div className="location-info">
        <span className="location-label">
          {type}
        </span>

        <h4>{city}</h4>

        <p>{address}</p>
      </div>

      <div className="location-date">
        <span>{date}</span>

        <strong>{time}</strong>
      </div>
    </div>
  );
}