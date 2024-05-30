import React, { useEffect, useState } from "react";
import {
  CustomATag,
  LargeText,
  RegularText,
  WhiteHeading,
  XLargeText,
} from "../../styling/common";
import { signInUser } from "../../localredux/user";
import withBase from "hocs/base_page";
import {
  SignInParent,
  Left,
  Right,
  LeftParent,
  InputMargin,
  HeadingMargin,
  Table,
  Td,
  Tr,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import Lottie from "lottie-react";
import signup from "images/lotties/signup.json";
import CareHeader from "components/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomInput from "components/custom_inputs";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { useBaseProps } from "hocs/base_component";
import { motion, useScroll, useSpring } from "framer-motion";
import Button from "components/custom_button";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Colors from "../../styling/color";

function SignIn() {
  const { t } = useBaseProps();
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});
  const [cookies, setCookie] = useCookies(["token", "email"]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const signInUserPress = (event) => {
    event.preventDefault();
    const user = { ...inputs };
    dispatch(signInUser({ user, setCookie, navigation, showError }));
  };
  const notifyAccountCreationFail = (text) => toast(text);

  const showError = (text) => {
    notifyAccountCreationFail(text);
  };
  return (
    <SignInParent>
      <AnimatePresence>
        <LeftParent>
          <CareHeader />
          <Left>
            <Lottie animationData={signup} loop={false} />
          </Left>
        </LeftParent>

        <Right style={{ scaleX }}>
          <HeadingMargin>
            <WhiteHeading>{t("signin.signin")}</WhiteHeading>
            <CustomATag href="/signup">
              <RegularText $color={Colors.ghost_white}>
                {t("signin.dont")}
              </RegularText>
            </CustomATag>
          </HeadingMargin>
          <InputMargin>
            <CustomInput
              name={"email"}
              icon={faEnvelope}
              inputs={inputs}
              setInputs={setInputs}
              label={t("signin.email")}
              type="email"
            />
          </InputMargin>
          <InputMargin>
            <CustomInput
              name={"password"}
              icon={faLock}
              inputs={inputs}
              setInputs={setInputs}
              label={t("signup.password")}
              type="password"
            />
          </InputMargin>
          <Button label={t("signin.submit")} onClick={signInUserPress}></Button>
        </Right>
      </AnimatePresence>
    </SignInParent>
  );
}

export default withBase(SignIn);
