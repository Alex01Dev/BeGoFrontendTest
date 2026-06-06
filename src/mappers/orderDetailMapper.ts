import type { UpcomingOrder, OrderDetailModel } from "../types/upcomingOrderTypes";

export const mapOrderToDetail = (
    order: UpcomingOrder
): OrderDetailModel => {
    const pickup = order.destinations?.[0];
    const dropoff = order.destinations?.[1];

    return {
        id: order._id,
        orderNumber: order.order_number,

        driver:
            typeof order.driver === "string"
                ? "No driver assigned"
                : order.driver.nickname,

        manager:
            typeof order.manager === "string"
                ? "No manager assigned"
                : order.manager.nickname,

        route:
            pickup && dropoff
                ? `${pickup.address} → ${dropoff.address}`
                : "No route assigned",

        total: order.pricing?.total ?? 0,
    };
};