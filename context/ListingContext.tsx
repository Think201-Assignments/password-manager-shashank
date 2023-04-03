import { Listing, AllPassword } from "interfaces";
import { createContext, useContext } from "react";

interface ListingContext {
  listingdata: Listing[];
  allpassworddata: AllPassword[];
  addPassword: (password: any) => void;
  addProduct: (product: Listing) => void;
}

export const ListingContext = createContext<ListingContext>({
  listingdata: [],
  allpassworddata: [],
  addPassword(password) {},
  addProduct(product) {},
});

export const useListingContext = () => useContext(ListingContext);
