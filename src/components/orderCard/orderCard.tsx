import "./OrderCard.scss";
import type { Order } from "../../types/orderTypes";

interface Props {
  order: Order;
}

export default function OrderCard({ order }: Props) {
  return (
    <article className="order-card">
      <div className="order-card__header">
        <h3 className="order-card__number">
          Order #{order.order_number}
        </h3>

        <span className="order-card__type">
          {order.type ?? "FTL"}
        </span>
      </div>

      <div className="order-card__locations">
        <div>
          <p>Pickup</p>
          <span>
            {order.destinations?.[0]?.nickname ??
              "Pickup"}
          </span>
        </div>

        <div>
          <p>Dropoff</p>
          <span>
            {order.destinations?.[1]?.nickname ??
              "Dropoff"}
          </span>
        </div>
      </div>

      <div className="order-card__footer">
        <span>
          {order.status_string ?? "In Progress"}
        </span>

        <button className="resume-btn">
          Resume
        </button>
      </div>
    </article>
  );
}