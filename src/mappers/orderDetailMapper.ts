import type { UpcomingOrder } from "../types/upcomingOrderTypes";
import type { OrderDetailModel } from "../types/orderTypes";

const formatDate = (timestamp: number): string =>
  new Date(timestamp).toLocaleDateString("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const formatTime = (timestamp: number): string =>
  new Date(timestamp).toLocaleTimeString("es-MX", {
    hour: "2-digit",
    minute: "2-digit",
  });

export const mapOrderToDetail = (
  order: UpcomingOrder
): OrderDetailModel => {
  const pickup  = order.destinations[0];
  const dropoff = order.destinations[1];

  const pickupTs  = pickup?.start_date  ?? 0;
  const dropoffTs = dropoff?.start_date ?? 0;

  return {
    id: order._id,

    orderNumber: order.order_number,

    status:      order.status_string,
    statusClass: order.status_class,

    referenceNumber:
      order.reference_number ?? "A1180",

    pickupCity:    pickup?.address.split(",")[0]  ?? "",
    pickupAddress: pickup?.address                ?? "",

    dropoffCity:    dropoff?.address.split(",")[0] ?? "",
    dropoffAddress: dropoff?.address               ?? "",

    pickupDate: formatDate(pickupTs),
    pickupTime: formatTime(pickupTs),

    dropoffDate: formatDate(dropoffTs),
    dropoffTime: formatTime(dropoffTs),

    pickupTimestamp:  pickupTs,
    dropoffTimestamp: dropoffTs,

    driverName:      order.driver?.nickname  ?? "",
    driverPhone:     order.driver?.telephone ?? "",
    driverEmail:     order.driver?.email     ?? "",
    driverThumbnail: order.driver?.thumbnail ?? null,
  };
};