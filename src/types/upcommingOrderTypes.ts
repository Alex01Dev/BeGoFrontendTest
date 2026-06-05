export interface UpcomingOrder {
  _id: string;
  order_number: string;
  status: number;
  stampedPercentage: number;
  start_date: number;
  end_date: number;

  manager: {
    nickname: string;
    email: string;
    telephone: string;
  };

  driver: {
    nickname: string;
    thumbnail: string;
  };

  pricing: {
    subtotal: number;
    taxes: number;
    total: number;
  };
}