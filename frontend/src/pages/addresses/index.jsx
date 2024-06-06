import React from "react";
import withBase from "hocs/base_page";
import { AddressParent } from "./styles";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "components/menu/NavBar";
import Addadresses from "./addadresses";

function Address() {
  return (
    <AddressParent>
      <Navbar />
      <Addadresses />
    </AddressParent>
  );
}

export default withBase(Address);
