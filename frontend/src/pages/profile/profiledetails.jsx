import React, { useEffect, useState } from "react";
import {
  CustomATag,
  LargeText,
  RegularText,
  WhiteHeading,
  XLargeText,
} from "../../styling/common";
import { createUserData, getUserData } from "../../localredux/user";
import withBase from "hocs/base_page";
import {
  ProfileParent,
  Left,
  Right,
  LeftParent,
  InputMargin,
  HeadingMargin,
  Table,
  TD,
  Tr,
  HeaderParent,
  ProfileDetailsParent,
  MarginButton,
  ButtonEditParent,
  DivRow,
  DivRowSpace,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import Lottie from "lottie-react";
import profile_animation from "images/lotties/profile.json";
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
import { EMAIL, TOKEN, USERID } from "utils/constants";
import { SelectUserData } from "localredux/user/selectors";
import edit from "images/lotties/edit.json";
import deletef from "images/lotties/delete.json";

function ProfileDetils() {
  const { t } = useBaseProps();
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector(SelectUserData);
  const [isEdit, setIsEdit] = useState(false);
  console.log(userData);
  const [inputs, setInputs] = useState({});
  const [cookies, setCookie] = useCookies(["token", "email", "userid"]);
  const email = cookies[EMAIL];
  const userid = cookies[USERID];
  const token = cookies[TOKEN];

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    dispatch(
      getUserData({ setCookie, navigation, showError, email, token, userid })
    );
  }, []);
  const updateUser = (event) => {
    event.preventDefault();
    const user = { ...inputs };
    dispatch(createUserData({ user, setCookie, navigation, showError }));
  };
  const notifyAccountCreationFail = (text) => toast(text);

  const showError = (text) => {
    notifyAccountCreationFail(text);
  };

  return (
    <ProfileDetailsParent>
      <AnimatePresence>
        <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
          <DivRowSpace>
            <HeadingMargin>
              <WhiteHeading>{t("profile.profiledata")}</WhiteHeading>
            </HeadingMargin>
            <MarginButton>
              <ButtonEditParent
                onClick={() => setIsEdit(!isEdit)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Lottie animationData={edit} loop={true} />
              </ButtonEditParent>
            </MarginButton>
            <MarginButton>
              <ButtonEditParent
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Lottie animationData={deletef} loop={true} />
              </ButtonEditParent>
            </MarginButton>
          </DivRowSpace>
          <DivRow>
            <InputMargin>
              <CustomInput
                name={"first_name"}
                icon={faUser}
                inputs={inputs}
                setInputs={setInputs}
                label={t("signup.first_name")}
                type="text"
                placeholder={userData.first_name}
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
                placeholder={userData.last_name}
              />
            </InputMargin>
          </DivRow>
          <DivRow>
            {isEdit ? (
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
            ) : (
              <InputMargin>
                <CustomInput
                  readOnly
                  name={"birthdate"}
                  icon={faBirthdayCake}
                  inputs={inputs}
                  setInputs={setInputs}
                  label={t("signup.birthdate")}
                  type="text"
                  placeholder={userData.birthdate?.split("T")[0]}
                />
              </InputMargin>
            )}
            <InputMargin>
              <CustomInput
                readOnly
                name={"email"}
                icon={faEnvelope}
                inputs={inputs}
                setInputs={setInputs}
                label={t("signup.email")}
                type="email"
                placeholder={userData.email}
              />
            </InputMargin>
          </DivRow>
          <DivRow>
            {isEdit ? (
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
            ) : (
              <InputMargin>
                <CustomInput
                  readOnly
                  name={"gender"}
                  icon={faGenderless}
                  inputs={inputs}
                  setInputs={setInputs}
                  label={t("signup.gender")}
                  type="text"
                  placeholder={userData.gender}
                />
              </InputMargin>
            )}
            {isEdit ? (
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
            ) : (
              <InputMargin>
                <CustomInput
                  readOnly
                  name={"marital_status"}
                  icon={faRing}
                  inputs={inputs}
                  setInputs={setInputs}
                  label={t("signup.marital_status")}
                  type="text"
                  placeholder={userData.marital_status}
                />
              </InputMargin>
            )}
          </DivRow>
          <DivRow>
            <InputMargin>
              <CustomInput
                name={"children"}
                icon={faChildren}
                inputs={inputs}
                setInputs={setInputs}
                label={t("signup.children")}
                type="number"
                placeholder={userData.children}
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
                placeholder={userData.address}
              />
            </InputMargin>
            <InputMargin>
              <CustomInput
                name={"zip_code"}
                icon={faLocation}
                inputs={inputs}
                setInputs={setInputs}
                label={t("signup.zipcode")}
                type="text"
                placeholder={userData.zipcode}
              />
            </InputMargin>
          </DivRow>
        </div>
      </AnimatePresence>
    </ProfileDetailsParent>
  );
}

export default withBase(ProfileDetils);
