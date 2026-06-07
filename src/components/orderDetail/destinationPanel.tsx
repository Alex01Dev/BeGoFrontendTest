import "./destinationPanel.scss";
import { useState } from "react";

interface Props {
  title: string;

  address: string;

  date: string;

  phone: string;

  email: string;
}

export default function DestinationPanel({
  title,
  address,
  date,
  phone,
  email,
}: Props) {
  const [expanded, setExpanded] =
    useState(false);

  return (
    <div className="destination-panel">
      <button
        className="destination-panel__header"
        onClick={() =>
          setExpanded(!expanded)
        }
      >
        <span>{title}</span>

        <span>
          {expanded ? "▲" : "▼"}
        </span>
      </button>

      {expanded && (
        <div className="destination-panel__content">
          <p>{address}</p>

          <p>{date}</p>

          <p>{phone}</p>

          <p>{email}</p>
        </div>
      )}
    </div>
  );
}