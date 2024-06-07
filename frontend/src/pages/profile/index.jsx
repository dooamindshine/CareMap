import React, { useEffect, useState } from "react";
import { createUserData, getUserData } from "../../localredux/user";
import withBase from "hocs/base_page";
import {
  ProfileParent,
  HeaderParent,
  ProfileInnerChild,
  ButtonEditParent,
  MenuButton,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import Lottie from "lottie-react";
import CareHeader from "components/header";
import { useBaseProps } from "hocs/base_component";
import { useScroll, useSpring } from "framer-motion";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EMAIL, TOKEN, USERID } from "utils/constants";
import { SelectUserData } from "localredux/user/selectors";
import Profiledetails from "./profiledetails";
import Navbar from "components/menu/NavBar";

function Profile() {
  const { t } = useBaseProps();
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector(SelectUserData);
  const [cookies, setCookie] = useCookies(["token", "email", "userid"]);
  const email = cookies[EMAIL];
  const userid = cookies[USERID];
  const token = cookies[TOKEN];

  useEffect(() => {
    dispatch(
      getUserData({ setCookie, navigation, showError, email, token, userid })
    );
  }, []);

  const notifyAccountCreationFail = (text) => toast(text);

  const showError = (text) => {
    notifyAccountCreationFail(text);
  };
  return (
    <ProfileParent>
      <Navbar/>  
      <Profiledetails />
    </ProfileParent>
  );
}

export default withBase(Profile);
