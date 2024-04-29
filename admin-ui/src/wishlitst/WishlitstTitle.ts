import { Wishlitst as TWishlitst } from "../api/wishlitst/Wishlitst";

export const WISHLITST_TITLE_FIELD = "id";

export const WishlitstTitle = (record: TWishlitst): string => {
  return record.id?.toString() || String(record.id);
};
