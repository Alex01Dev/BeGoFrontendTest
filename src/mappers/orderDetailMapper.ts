import type { UpcomingOrder } from "../types/upcomingOrderTypes";
import type { OrderDetailModel } from "../types/orderTypes";

export const mapOrderToDetail = (
  order: UpcomingOrder
): OrderDetailModel => {
  const pickup = order.destinations[0];
  const dropoff = order.destinations[1];

  return {
    id: order._id,

    orderNumber: order.order_number,

    status: order.status_string,
    statusClass: order.status_class,

    pickupCity: pickup?.address.split(",")[0] ?? "",
    pickupAddress: pickup?.address ?? "",

    dropoffCity: dropoff?.address.split(",")[0] ?? "",
    dropoffAddress: dropoff?.address ?? "",

    pickupDate: new Date(
      pickup?.start_date ?? 0
    ).toLocaleString(),

    dropoffDate: new Date(
      dropoff?.start_date ?? 0
    ).toLocaleString(),

    pickupTimestamp: pickup?.start_date ?? 0,
    dropoffTimestamp: dropoff?.start_date ?? 0,

    driverName:
      order.driver?.nickname ?? "",

    driverPhone:
      order.driver?.telephone ?? "",

    driverEmail:
      order.driver?.email ?? "",

    driverThumbnail:
      order.driver?.thumbnail ?? null,
  };
};