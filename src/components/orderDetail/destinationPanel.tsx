import "./destinationPanel.scss";
import { useState } from "react";

import ChevronUpIcon from "../../assets/icons/ChevronupIcon";
import ChevronDownIcon from "../../assets/icons/ChevrondownIcon";

interface Props {
  title: string;

  address: string;

  date: string;

  time: string;

  phone: string;

  email: string;
}

export default function DestinationPanel({
  title,
  address,
  date,
  time,
  phone,
  email,
}: Props) {
  const [expanded, setExpanded] =
    useState(false);

  return (
    <div
      className={`destination-panel ${
        expanded
          ? "destination-panel--expanded"
          : ""
      }`}
    >
      <button
        className="destination-panel__header"
        onClick={() =>
          setExpanded(!expanded)
        }
      >
        <span className="destination-panel__title">
          {title}
        </span>

        <span className="destination-panel__arrow">
          {expanded
            ? <ChevronUpIcon />
            : <ChevronDownIcon />
          }
        </span>
      </button>

      {expanded && (
        <div className="destination-panel__content">
          <p className="destination-panel__address">
            {address}
          </p>

          <p className="destination-panel__datetime">
            {date}
            <span className="destination-panel__dot">
              •
            </span>
            {time}
          </p>

          <p>{phone}</p>

          <p>{email}</p>
        </div>
      )}
    </div>
  );
}