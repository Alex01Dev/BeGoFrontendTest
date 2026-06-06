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

  // 🔥 UI view model
  const card = mapOrderToCard(order);

  return (
    <article className="order-card">

      {/* STATUS */}
      <div className="order-card__status">
        <div className="order-card__type">
          <TruckIcon />

          <span>{card.type}</span>
        </div>

        <span className="order-card__current-status">
          {card.status}
        </span>
      </div>

      {/* PICKUP */}
      <div className="order-card__location">
        <LocationIcon />

        <div>
          <p className="location-label">PICKUP</p>

          <h4>{card.pickupName}</h4>

          <div className="location-details">
            <span>{card.pickupAddress}</span>
            <small>{card.pickupDate}</small>
          </div>
        </div>
      </div>

      {/* DROPOFF */}
      <div className="order-card__location">
        <LocationIcon />

        <div>
          <p className="location-label">DROPOFF</p>

          <h4>{card.dropoffName}</h4>

          <div className="location-details">
            <span>{card.dropoffAddress}</span>
            <small>{card.dropoffDate}</small>
          </div>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="order-card__actions">

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
  );
}