import type { UpcomingOrder, OrderCardModel } from "../types/upcomingOrderTypes";

import {
    formatDate,
    formatTime,
    truncateAddress,
    extractCityFromAddress,
} from "../utils/formatters";


export const mapOrderToCard = (
    order: UpcomingOrder
): OrderCardModel => {
    const pickup  = order.destinations?.[0];
    const dropoff = order.destinations?.[1];

    return {
        id: order._id,

        orderNumber: order.order_number,

        type: order.type ?? "",

        status: order.status_string ?? "",
        statusClass: order.status_class ?? "",

        pickupName: extractCityFromAddress(
            pickup?.address ?? ""
        ),

        pickupAddress: truncateAddress(
            pickup?.address ?? ""
        ),

        pickupDate: pickup?.startDate
            ? `${formatDate(
                pickup.startDate
            )} ${formatTime(
                pickup.startDate
            )}`
            : "",

        pickupStartDate: pickup?.startDate ?? 0,

        dropoffName: extractCityFromAddress(
            dropoff?.address ?? ""
        ),

        dropoffAddress: truncateAddress(
            dropoff?.address ?? ""
        ),

        dropoffDate: dropoff?.startDate
            ? `${formatDate(
                dropoff.startDate
            )} ${formatTime(
                dropoff.startDate
            )}`
            : "",

        showPickupButton:
            order.status_string
                ?.toLowerCase()
                .includes("recolección completada"),
    };
};