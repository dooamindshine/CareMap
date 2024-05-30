import React, { useEffect, useState } from "react";
import {
  CustomATag,
  LargeText,
  RegularText,
  WhiteHeading,
  XLargeText,
} from "../../styling/common";
import { createUserData } from "../../localredux/user";
import withBase from "hocs/base_page";
import {
  SignUpParent,
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
import {
  faUser,
  faUsersLine,
  faPerson,
  faGenderless,
  faRing,
  faChildren,
  faAddressCard,
  faLocation,
  faEnvelope,
  faBirthdayCake,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { useBaseProps } from "hocs/base_component";
import OptionGroup from "components/option_group";
import { motion, useScroll, useSpring } from "framer-motion";
import Button from "components/custom_button";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Colors from "../../styling/color";

function SignUp() {
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

  const createUser = (event) => {
    event.preventDefault();
    //console.log(inputs);
    const user = { ...inputs };
    dispatch(createUserData({ user, setCookie, navigation, showError }));
  };
  const notifyAccountCreationFail = (text) => toast(text);

  const showError = (text) => {
    notifyAccountCreationFail(text);
  };
  return (
    <SignUpParent>
      <AnimatePresence>
        <LeftParent>
          <CareHeader />
          <Left>
            <Lottie animationData={signup} loop={false} />
          </Left>
        </LeftParent>

        <Right style={{ scaleX }}>
          <HeadingMargin>
            <WhiteHeading>{t("signup.create")}</WhiteHeading>
            <CustomATag href="/signin">
              <RegularText $color={Colors.ghost_white}>
                {t("signup.already")}
              </RegularText>
            </CustomATag>
          </HeadingMargin>
          <InputMargin>
            <CustomInput
              name={"first_name"}
              icon={faUser}
              inputs={inputs}
              setInputs={setInputs}
              label={t("signup.first_name")}
              type="text"
            />
          </InputMargin>
          <InputMargin>
            <CustomInput
              name={"last_name"}
              icon={faUsersLine}
              inputs={inputs}
              setInputs={setInputs}
              label={t("signup.last_name")}
              type="text"
            />
          </InputMargin>
          <InputMargin>
            <CustomInput
              name={"birthdate"}
              icon={faBirthdayCake}
              inputs={inputs}
              setInputs={setInputs}
              label={t("signup.birthdate")}
              type="date"
            />
          </InputMargin>
          <InputMargin>
            <CustomInput
              name={"email"}
              icon={faEnvelope}
              inputs={inputs}
              setInputs={setInputs}
              label={t("signup.email")}
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
          <InputMargin>
            <CustomInput
              name={"age"}
              icon={faPerson}
              inputs={inputs}
              setInputs={setInputs}
              label={t("signup.age")}
              type="number"
            />
          </InputMargin>
          <InputMargin>
            <OptionGroup
              name={"gender"}
              icon={faGenderless}
              inputs={inputs}
              setInputs={setInputs}
              label={t("signup.gender")}
              list={["male", "female", "prefer not to say"]}
            />
          </InputMargin>
          <InputMargin>
            <OptionGroup
              name={"marital_status"}
              icon={faRing}
              inputs={inputs}
              setInputs={setInputs}
              label={t("signup.marital_status")}
              list={["single", "married", "prefer not to say"]}
            />
          </InputMargin>
          <InputMargin>
            <CustomInput
              name={"children"}
              icon={faChildren}
              inputs={inputs}
              setInputs={setInputs}
              label={t("signup.children")}
              type="number"
            />
          </InputMargin>
          <InputMargin>
            <CustomInput
              name={"address"}
              icon={faAddressCard}
              inputs={inputs}
              setInputs={setInputs}
              label={t("signup.address")}
              type="text"
            />
          </InputMargin>
          <InputMargin>
            <CustomInput
              name={"zip_code"}
              icon={faLocation}
              inputs={inputs}
              setInputs={setInputs}
              label={t("signup.zip_code")}
              type="text"
            />
          </InputMargin>
          <Button label={t("signup.submit")} onClick={createUser}></Button>
        </Right>
      </AnimatePresence>
    </SignUpParent>
  );
}

export default withBase(SignUp);
