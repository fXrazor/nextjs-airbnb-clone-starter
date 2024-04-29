import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WishlitstCreateInput = {
  listing: ListingWhereUniqueInput;
  user: UserWhereUniqueInput;
};
