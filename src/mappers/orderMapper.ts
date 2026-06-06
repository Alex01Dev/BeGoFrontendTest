import type { Order } from "../types/orderTypes";

import {
  formatDate,
  formatTime,
  truncateAddress,
} from "../utils/formatters";

export interface OrderCardModel {
  id: string;
  orderNumber: string;
  type: string;
  status: string;

  pickupName: string;
  pickupAddress: string;
  pickupDate: string;

  dropoffName: string;
  dropoffAddress: string;
  dropoffDate: string;

  showPickupButton: boolean;
}

export const mapOrderToCard = (
  order: Order
): OrderCardModel => {
  const pickup = order.destinations?.[0];
  const dropoff = order.destinations?.[1];

  return {
    id: order._id,

    orderNumber: order.order_number,

    type: order.type,

    status: order.status_string,

    pickupName:
      pickup?.nickname ?? "",

    pickupAddress:
      truncateAddress(
        pickup?.address ?? ""
      ),

    pickupDate:
      pickup?.start_date
        ? `${formatDate(
            pickup.start_date
          )} ${formatTime(
            pickup.start_date
          )}`
        : "",

    dropoffName:
      dropoff?.nickname ?? "",

    dropoffAddress:
      truncateAddress(
        dropoff?.address ?? ""
      ),

    dropoffDate:
      dropoff?.start_date
        ? `${formatDate(
            dropoff.start_date
          )} ${formatTime(
            dropoff.start_date
          )}`
        : "",

    showPickupButton:
      order.status === 1,
  };
};