import type { UpcomingOrder, OrderCardModel } from "../types/upcomingOrderTypes";

import {
    formatDate,
    formatTime,
    truncateAddress,
    extractCityFromAddress,
} from "../utils/formatters";

const getTimestamp = (
    dest: { startDate?: number; start_date?: number } | undefined
): number => dest?.startDate ?? dest?.start_date ?? 0;

export const mapOrderToCard = (
    order: UpcomingOrder
): OrderCardModel => {
    const pickup  = order.destinations?.[0];
    const dropoff = order.destinations?.[1];

    const pickupTs  = getTimestamp(pickup);
    const dropoffTs = getTimestamp(dropoff);

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

        pickupDate: pickupTs
            ? formatDate(pickupTs)
            : "",

        pickupTime: pickupTs
            ? formatTime(pickupTs)
            : "",

        pickupStartDate: pickupTs,

        dropoffName: extractCityFromAddress(
            dropoff?.address ?? ""
        ),

        dropoffAddress: truncateAddress(
            dropoff?.address ?? ""
        ),

        dropoffDate: dropoffTs
            ? formatDate(dropoffTs)
            : "",

        dropoffTime: dropoffTs
            ? formatTime(dropoffTs)
            : "",

        showPickupButton:
            order.status_string
                ?.toLowerCase()
                .includes("recolección completada"),
    };
};