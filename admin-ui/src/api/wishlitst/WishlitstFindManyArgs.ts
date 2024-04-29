import { WishlitstWhereInput } from "./WishlitstWhereInput";
import { WishlitstOrderByInput } from "./WishlitstOrderByInput";

export type WishlitstFindManyArgs = {
  where?: WishlitstWhereInput;
  orderBy?: Array<WishlitstOrderByInput>;
  skip?: number;
  take?: number;
};
