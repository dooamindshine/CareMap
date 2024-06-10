import React from "react";
import withBase from "hocs/base_page";
import { FacilityParent } from "./styles";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "components/menu/NavBar";
import Facility from "./facility";

function Facilitities() {
  return (
    <FacilityParent>
      <Navbar />
      <Facility />
    </FacilityParent>
  );
}

export default withBase(Facilitities);
