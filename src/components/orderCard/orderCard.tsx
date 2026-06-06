import "./OrderCard.scss";
import type { UpcomingOrder } from "../../types/upcomingOrderTypes";
import { mapOrderToCard } from "../../mappers/orderMapper";
import { useNavigate } from "react-router-dom";

import TruckIcon from "../../assets/icons/TruckIcon";
import LocationIcon from "../../assets/icons/LocationIcon";
import EyeIcon from "../../assets/icons/EyeIcon";

interface Props {
  order: UpcomingOrder;
}

export default function OrderCard({ order }: Props) {
  const navigate = useNavigate();

  const card = mapOrderToCard(order);

  const formatDateTime = (value: string) => {
    if (!value) {
      return { date: "", time: "" };
    }

    const parts = value.split(" ");

    return {
      date: parts[0] ?? "",
      time: parts[1] ?? "",
    };
  };

  const pickup = formatDateTime(card.pickupDate);
  const dropoff = formatDateTime(card.dropoffDate);

  return (
    <div className="order-card-wrapper">
      <div className="order-card__external-id">
        Order #{card.orderNumber}
      </div>

      <article className="order-card">
        <div className="order-card__status">
          <div className="order-card__type">
            <TruckIcon />
            <span>{card.type}</span>
          </div>

          <div className="order-card__current-status">
            <span className="status-dot" />
            {card.status}
          </div>
        </div>

        <div className="order-card__body">
          <div className="order-card__location pickup">
            <div className="location-icon">
              <LocationIcon />
            </div>

            <div className="location-content">
              <span className="location-label">PICKUP</span>

              <h4>{card.pickupName}</h4>

              <p>{card.pickupAddress}</p>
            </div>

            <div className="location-date">
              <span>{pickup.date}</span>
              <strong>{pickup.time}</strong>
            </div>
          </div>

          <div className="order-card__location">
            <div className="location-icon">
              <LocationIcon />
            </div>

            <div className="location-content">
              <span className="location-label">DROPOFF</span>

              <h4>{card.dropoffName}</h4>

              <p>{card.dropoffAddress}</p>
            </div>

            <div className="location-date">
              <span>{dropoff.date}</span>
              <strong>{dropoff.time}</strong>
            </div>
          </div>
        </div>

        <div
          className={`order-card__actions ${
            !card.showPickupButton ? "single-action" : ""
          }`}
        >
          {card.showPickupButton && (
            <button className="pickup-btn">
              It's time for pickup
            </button>
          )}

          <button
            className="resume-btn"
            onClick={() => navigate(`/orders/${card.id}`)}
          >
            Resume
            <EyeIcon />
          </button>
        </div>
      </article>
    </div>
  );
}