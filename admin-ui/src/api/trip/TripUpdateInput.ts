import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TripUpdateInput = {
  listing?: ListingWhereUniqueInput;
  tripInfo?: InputJsonValue;
  user?: UserWhereUniqueInput;
};
