import { SortOrder } from "../../util/SortOrder";

export type TripOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  listingId?: SortOrder;
  tripInfo?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
