import "./OrderCard.scss";

import type { Order } from "../../types/orderTypes";
import { mapOrderToCard } from "../../mappers/orderMapper";

import TruckIcon from "../../assets/icons/TruckIcon";
import LocationIcon from "../../assets/icons/LocationIcon";
import EyeIcon from "../../assets/icons/EyeIcon";

interface Props {
  order: Order;
}

export default function OrderCard({ order }: Props) {
  const card = mapOrderToCard(order);

  return (
    <article className="order-card">
      <div className="order-card__status">
        <div className="order-card__type">
          <TruckIcon />

          <span>
            {card.type}
          </span>
        </div>

        <span className="order-card__current-status">
          {card.status}
        </span>
      </div>

      <div className="order-card__location">
        <LocationIcon />

        <div>
          <p className="location-label">
            PICKUP
          </p>

          <h4>
            {card.pickupName}
          </h4>

          <div className="location-details">
            <span>
              {card.pickupAddress}
            </span>

            <small>
              {card.pickupDate}
            </small>
          </div>
        </div>
      </div>

      <div className="order-card__location">
        <LocationIcon />

        <div>
          <p className="location-label">
            DROPOFF
          </p>

          <h4>
            {card.dropoffName}
          </h4>

          <div className="location-details">
            <span>
              {card.dropoffAddress}
            </span>

            <small>
              {card.dropoffDate}
            </small>
          </div>
        </div>
      </div>

      <div className="order-card__actions">
        {card.showPickupButton && (
          <button className="pickup-btn">
            It's time for pickup
          </button>
        )}

        <button className="resume-btn">
          Resume

          <EyeIcon />
        </button>
      </div>
    </article>
  );
}