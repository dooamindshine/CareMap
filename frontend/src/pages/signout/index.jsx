import React, { useEffect } from "react";
import { LargeText } from "../../styling/common";
import withBase from "hocs/base_page";
import { Parent } from "./styles";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import loading from "images/lotties/loading.json";
import { AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { t } from "i18next";
import { useCookies } from "react-cookie";
import { EMAIL, TOKEN, USERID } from "utils/constants";

function Signout() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [cookies, setCookie, removeCookie] = useCookies([
    "token",
    "email",
    "userid",
  ]);

  useEffect(() => {
    removeCookie(TOKEN, { path: "/", domain: "localhost" });
    removeCookie(EMAIL, { path: "/", domain: "localhost" });
    removeCookie(USERID, { path: "/", domain: "localhost" });
    setTimeout(() => {
      navigation("/signin");
    }, 1000);
  });

  return (
    <Parent>
      <AnimatePresence>
        <LargeText
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {t("home.redirecting")}
        </LargeText>
      </AnimatePresence>
      <Lottie animationData={loading} loop={true} />
    </Parent>
  );
}

export default withBase(Signout);
