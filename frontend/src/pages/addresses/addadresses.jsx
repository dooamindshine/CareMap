import React, { useEffect, useState } from "react";
import { RegularText, WhiteHeading } from "../../styling/common";
import {
  getUserData,
  updateUserData,
  deleteUserData,
  deleteAddress,
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
import { faAddressCard, faLocation } from "@fortawesome/free-solid-svg-icons";
import { useBaseProps } from "hocs/base_component";
import Button from "components/custom_button";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EMAIL, TOKEN, USERID } from "utils/constants";
import { SelectUserData } from "localredux/user/selectors";
import add from "images/lotties/add.json";
import deletefav from "images/lotties/deletefav.json";
import addfav from "images/lotties/fav.json";
import unfav from "images/lotties/unfav.json";
import Colors from "styling/color";
import { CurrentMargin } from "./styles";
import { CardList } from "./styles";
import { CardParent } from "./styles";
import { DelFavParent } from "./styles";
import { DelFavButton } from "./styles";
import { addAddress } from "localredux/user";

function AddAdresses() {
  const { t } = useBaseProps();
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector(SelectUserData);
  const [isAdd, setIsAdd] = useState(false);
  const [newAddresses, setNewAddresses] = useState([]);
  const [inputs, setInputs] = useState({});
  const [cookies, setCookie] = useCookies(["token", "email", "userid"]);
  const email = cookies[EMAIL];
  const userid = cookies[USERID];
  const token = cookies[TOKEN];

  const addNewAddress = () => {
    const value = inputs.newAddresses;
    console.log(value);
    const address = {
      text: value,
      isFav: false,
      uuid: uuidv4(),
    };
    setNewAddresses([...newAddresses, address]);
    setIsAdd(false);
    dispatch(
      addAddress({
        address,
        showErrorAdd,
        showSuccessAdd,
        token,
        email,
        userid,
      })
    );
  };
  const showErrorAdd = (text) => {
    toast(text);
  };

  const showSuccessAdd = () => {
    toast("adressess.addsuccess");
  };

  const showErrorDelete = (text) => {
    toast(text);
  };

  const showSuccessDelete = () => {
    toast(t("adressess.deletesuccess"));
  };

  const deleteAddressHandle = (event, uuid) => {
    event.preventDefault();
    const filtered = newAddresses.filter((item) => item.uuid != uuid);
    setNewAddresses([...filtered]);
    dispatch(
      deleteAddress({
        showErrorDelete,
        showSuccessDelete,
        email,
        userid,
        token,
        uuid,
      })
    );
  };

  return (
    <AddressDetailsParent>
      <AnimatePresence>
        <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
          <DivRowSpace>
            <HeadingMargin>
              <WhiteHeading>{t("addresses.details")}</WhiteHeading>
            </HeadingMargin>
            <MarginButton>
              <ButtonEditParent
                onClick={() => setIsAdd(!isAdd)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Lottie animationData={add} loop={true} />
              </ButtonEditParent>
            </MarginButton>
          </DivRowSpace>
          <CurrentMargin>
            <RegularText $color={Colors.ghost_white}>
              {t("addresses.current")}
            </RegularText>
          </CurrentMargin>

          <DivRow>
            <InputMargin>
              <CustomInput
                name={"address"}
                icon={faAddressCard}
                inputs={inputs}
                setInputs={setInputs}
                label={t("signup.address")}
                type="text"
                placeholder={`${userData.address} - ${userData.zipcode}`}
                readOnly
              />
            </InputMargin>
            {isAdd && (
              <>
                <DivRow>
                  <InputMargin>
                    <CustomInput
                      name={"newAddresses"}
                      icon={faAddressCard}
                      inputs={inputs}
                      setInputs={setInputs}
                      label={t("addresses.new")}
                      type="text"
                    />
                  </InputMargin>
                  <PaddinButton>
                    <Button
                      label={t("addresses.done")}
                      onClick={addNewAddress}
                    ></Button>
                  </PaddinButton>
                </DivRow>
              </>
            )}
          </DivRow>

          <CardList>
            {newAddresses?.map((item) => {
              return (
                <CardParent>
                  <DelFavParent>
                    <DelFavButton>
                      <Lottie
                        animationData={item.isFav ? addfav : unfav}
                        loop={true}
                      />
                    </DelFavButton>
                    <DelFavButton
                      onClick={(event) => deleteAddressHandle(event, item.uuid)}
                    >
                      <Lottie animationData={deletefav} loop={true} />
                    </DelFavButton>
                  </DelFavParent>
                  <RegularText color={Colors.blue_columbia}>
                    {item.text}
                  </RegularText>
                </CardParent>
              );
            })}
          </CardList>
        </div>
      </AnimatePresence>
    </AddressDetailsParent>
  );
}

export default withBase(AddAdresses);
