import { Listing, AllPassword, Boolean } from "interfaces";
import { createContext, useContext } from "react";

interface ListingContext {
  action: Boolean;
  reload: Boolean;
  listingdata: Listing[];
  allpassworddata: AllPassword[];
  addPassword: (password: any) => void;
  addProduct: (product: Listing) => void;
  setActionState: (data: Boolean) => void;
  setReloadAction: (data: Boolean) => void;
}

export const ListingContext = createContext<ListingContext>({
  action: false,
  reload: false,
  listingdata: [],
  allpassworddata: [],
  addPassword(password) {},
  addProduct(product) {},
  setActionState(data) {},
  setReloadAction(data) {},
});

export const useListingContext = () => useContext(ListingContext);
