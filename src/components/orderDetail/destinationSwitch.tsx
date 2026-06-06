import "./destinationSwitch.scss";

interface Props {
  activeDestination: "pickup" | "dropoff";
  onChange: (
    destination: "pickup" | "dropoff"
  ) => void;
}

export default function DestinationSwitch({
  activeDestination,
  onChange,
}: Props) {
  return (
    <div className="destination-switch">
      <button
        className={
          activeDestination === "pickup"
            ? "active"
            : ""
        }
        onClick={() =>
          onChange("pickup")
        }
      >
        Pickup
      </button>

      <button
        className={
          activeDestination === "dropoff"
            ? "active"
            : ""
        }
        onClick={() =>
          onChange("dropoff")
        }
      >
        Dropoff
      </button>
    </div>
  );
}