"use client";

import { Product } from "interfaces";
import React, { ReactNode, useState } from "react";
import { ListingContext } from "./ListingContext";

interface IProps {
  children: ReactNode;
}

const ListingContextProvider = ({ children }: IProps) => {
  const [AllPassword, setAllPassword] = useState<any | []>([
    { text: "Google", color: "green" },
    { text: "Milan", color: "purple" },
    { text: "Figma", color: "#EDD869" },
    { text: "Adobe design suite", color: "red" },
    { text: "Storyblocks", color: "" },
  ]);
  const [action, setAction] = useState<Boolean | any>(false);
  const [reload, setReload] = useState<Boolean | any>(false);
  const setReloadAction = (data: boolean) => {
    setReload(data);
  };
  const setActionState = (data: boolean) => {
    setAction(data);
  };
  const addPassword = (data: any) => {
    data.id = AllPassword.length;
    setAllPassword([...AllPassword, data]);
  };
  const [listing, setProducts] = useState<Product[]>([
    {
      company: "Adobe design suite",
      login: "thepeopleteam@think201.com",
      password: "45_6tg5d%3f01d",
      token: "Adobedesign",
      link: "https://www.w3schools.com/js/js_loop_for.asp",
      tags: ["admin", "git"],
      color: "red",
    },
    {
      company: "Milan",
      login: "Dummy@123",
      password: "45_6tg5d%3f01d",
      token: "Milan",
      link: "https://mui.com/material-ui/react-text-field/.asp",
      tags: ["admin", "git"],
      color: "purple",
    },
    {
      company: "Google",
      login: "Dummy@google",
      password: "fdfdfdf",
      token: "Null",
      link: "dummyjson.com",
      tags: ["admin", "git"],
      color: "green",
    },
    {
      company: "Figma",
      login: "thepeopleteam@think201.com",
      password: "45_6tg5d%3f01d",
      token: "token",
      link: "https://www.figma.com",
      tags: ["admin", "git"],
      color: "#edd869",
    },
    {
      company: "Storyblocks",
      login: "thepeopleteam@think201.com",
      password: "password",
      token: "something",
      link: "https://www.figma.com",
      tags: ["admin", "git"],
      color: "",
    },
  ]);
  const addProduct = (data: Product) => {
    data.id = listing.length;
    setProducts([...listing, data]);
  };
  return (
    <ListingContext.Provider
      value={{
        listingdata: listing,
        allpassworddata: AllPassword,
        action,
        reload,
        setReloadAction,
        setActionState,
        addPassword,
        addProduct,
      }}
    >
      {children}
    </ListingContext.Provider>
  );
};

export default ListingContextProvider;
