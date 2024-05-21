import React, { useEffect } from "react";
import { LargeText, XLargeText } from "../styling/common";
import withBase from "hocs/base_page";
import { HeaderParent, MarginLogo } from "./styles";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { useBaseProps } from "hocs/base_component";
import Lottie from "lottie-react";
import logo from "images/lotties/logo_top.json";

function Header() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const { t } = useBaseProps();

  return (
    <HeaderParent>
      <AnimatePresence>
        <Lottie style={{ height: 80 }} animationData={logo} loop={true} />
        <MarginLogo>
          <XLargeText
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {t("home.logo")}
          </XLargeText>
        </MarginLogo>
      </AnimatePresence>
    </HeaderParent>
  );
}

export default Header;
