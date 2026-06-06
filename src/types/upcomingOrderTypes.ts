import type { Destination }
from "./orderTypes";

export interface UpcomingOrder {
  _id: string;

  order_number: string;

  status: number;

  status_string: string;

  status_class: string;

  type: string;

  reference_number: string;

  manager: {
    nickname: string;
    email: string;
    telephone: string;
  };

  driver: {
    nickname: string;
    email: string;
    telephone: string;
    thumbnail?: string | null;
  };

  route: {
    pickup: string;
    dropoff: string;
    route: string;
  };

  pricing: {
    subtotal: number;
    taxes: number;
    total: number;
  };

  truck: {
    attributes: {
      plates: string;
      brand: string;
      year: string;
      color: string;
    };

    thumbnail?: string | null;
  };

  trailer: {
    attributes: {
      plates?: string;
      trailer_number?: string;
      type?: string;
    };

    thumbnail: string;
  };

  destinations: Destination[];

  start_date: number;

  end_date: number;
}

export interface OrderCardModel {
    id: string;
    orderNumber: string;
    type: string;
    status: string;
    statusClass: string;

    pickupName: string;
    pickupAddress: string;
    pickupDate: string;
    pickupStartDate: number;

    dropoffName: string;
    dropoffAddress: string;
    dropoffDate: string;

    showPickupButton: boolean;
}

export interface Props {
    order: UpcomingOrder;
}