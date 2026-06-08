import "./orderCard.scss";

import type { UpcomingOrder } from "../../types/upcomingOrderTypes";

import { mapOrderToCard } from "../../mappers/orderMapper";

import { useNavigate } from "react-router-dom";

import { usePickupCountdown } from "../../hooks/usePickupCountdown";

import TruckIcon from "../../assets/icons/TruckIcon";
import EyeIcon from "../../assets/icons/EyeIcon";

import OrderLocation from "./orderLocation";
import PickupButton from "./pickupButton";

interface Props {
    order: UpcomingOrder;
}

export default function OrderCard({
    order,
}: Props) {
    const navigate = useNavigate();

    const card = mapOrderToCard(order);

    const {
        canPickup,
        remainingTime,
    } = usePickupCountdown(
        card.pickupStartDate,
        card.showPickupButton
    );

    const splitDateTime = (
        value: string
    ) => {
        const [date = "", time = ""] =
            value.split(" ");

        return { date, time };
    };

    const pickup = splitDateTime(
        card.pickupDate
    );

    const dropoff = splitDateTime(
        card.dropoffDate
    );

    const handlePickup = () => {
        console.log("Navegar");
    };

    return (
        <div className="order-card-wrapper">
            <div className="order-card__external-id">
                Order <span className="orderNumber">#{card.orderNumber}</span>
            </div>

            <article className="order-card">
                <header className="order-card__status">
                    <div className="order-card__type">
                        <TruckIcon />

                        <span>{card.type}</span>
                    </div>

                    <div className="order-card__current-status">
                        <span
                            className={`status-dot ${card.statusClass}`}
                        />

                        <span>{card.status}</span>
                    </div>
                </header>

                <section className="order-card__content">
                    <OrderLocation
                        type="PICKUP"
                        city={card.pickupName}
                        address={card.pickupAddress}
                        date={pickup.date}
                        time={pickup.time}
                    />

                    <OrderLocation
                        type="DROPOFF"
                        city={card.dropoffName}
                        address={card.dropoffAddress}
                        date={dropoff.date}
                        time={dropoff.time}
                    />
                </section>

                <footer
                    className={`order-card__footer ${card.showPickupButton
                            ? "dual"
                            : "single"
                        }`}
                >
                    {card.showPickupButton && (
                        <PickupButton
                            canPickup={canPickup}
                            remainingTime={
                                remainingTime
                            }
                            onPickup={
                                handlePickup
                            }
                        />
                    )}

                    <button
                        className="resume-btn"
                        onClick={() =>
                            navigate(
                                `/orders/${card.id}`
                            )
                        }
                    >
                        Resume

                        <EyeIcon />
                    </button>
                </footer>
            </article>
        </div>
    );
}