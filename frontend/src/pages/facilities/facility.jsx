import React, { useEffect, useState } from "react";
import { RegularText, WhiteHeading } from "../../styling/common";
import {
  getUserData,
  deleteAddress,
  setFavAddress,
  getFacilities,
  deleteFacilities,
} from "../../localredux/user";
import withBase from "hocs/base_page";
import {
  InputMargin,
  HeadingMargin,
  AddressDetailsParent,
  MarginButton,
  ButtonEditParent,
  DivRow,
  DivRowSpace,
  PaddinButton,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import Lottie from "lottie-react";
import CustomInput from "components/custom_inputs";
import { faDumpster, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useBaseProps } from "hocs/base_component";
import Button from "components/custom_button";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EMAIL, TOKEN, USERID } from "utils/constants";
import { SelectFacilities, SelectUserData } from "localredux/user/selectors";
import add from "images/lotties/add.json";
import Colors from "styling/color";
import { CurrentMargin } from "./styles";
import { CardList } from "./styles";
import { CardParent } from "./styles";
import { DelFavParent } from "./styles";
import { DelFavButton } from "./styles";
import { addAddress } from "localredux/user";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { t } from "i18next";
import { SmallText, SmallTextBold } from "styling/common";
const exclude = ["idlocations", "idfacilities", "userid"];

function Facility() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector(SelectUserData);
  const facilities = useSelector(SelectFacilities);
  const [cookies, setCookie] = useCookies(["token", "email", "userid"]);
  const email = cookies[EMAIL];
  const userid = cookies[USERID];
  const token = cookies[TOKEN];

  useEffect(() => {
    dispatch(getFacilities({ email, token, userid }));
  }, []);

  const showErrorDelete = (text) => {
    toast(text);
  };

  const showSuccessDelete = () => {
    toast(t("adressess.deletesuccess"));
  };

  const deleteFacilityHandle = (event, id) => {
    event.preventDefault();
    dispatch(
      deleteFacilities({
        showErrorDelete,
        showSuccessDelete,
        email,
        userid,
        token,
        id,
      })
    );
  };

  return (
    <AddressDetailsParent>
      <AnimatePresence>
        <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
          <DivRowSpace>
            <HeadingMargin>
              <WhiteHeading>{t("locations.favfaci")}</WhiteHeading>
            </HeadingMargin>
          </DivRowSpace>
          <CardList>
            {facilities?.map((item) => {
              return (
                <CardParent>
                  <DelFavParent>
                    <FontAwesomeIcon color={Colors.red} icon={faHeart} />
                    <DelFavButton
                      onClick={(event) => deleteFacilityHandle(event, item.idfacilities)}
                    >
                      <FontAwesomeIcon
                        color={Colors.purple}
                        icon={faDumpster}
                      />
                    </DelFavButton>
                  </DelFavParent>
                  {Object.entries(item).map(([key, value]) => {
                    if (value && !exclude.includes(key)) {
                      return (
                        <SmallText>
                          <SmallTextBold>{key} : </SmallTextBold>
                          {value}
                        </SmallText>
                      );
                    }
                  })}

                  {/* <RegularText color={Colors.blue_columbia}>
                    {item.text}
                  </RegularText> */}
                </CardParent>
              );
            })}
          </CardList>
        </div>
      </AnimatePresence>
    </AddressDetailsParent>
  );
}

export default withBase(Facility);
