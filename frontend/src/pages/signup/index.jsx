import React, { useEffect, useState } from "react";
import { LargeText } from "../../styling/common";
import { createUserData } from "../../localredux/user";
import withBase from "hocs/base_page";
import { SignUpParent, Left, Right } from "./styles";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import Lottie from 'lottie-react';
import signup from 'images/lotties/signup.json';

function SignUp() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };

  useEffect(() => {
    //dispatch(getSessionData({ sessionId: 23, navigation }));
  });

  return (
    <SignUpParent>
      <AnimatePresence>
        <Left>
        <Lottie animationData={signup} loop={true} />
        </Left>
        <Right>
          <label>
            Enter your name:
            <input
              type="text"
              name="username"
              value={inputs.username || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Enter your age:
            <input
              type="number"
              name="age"
              value={inputs.age || ""}
              onChange={handleChange}
            />
          </label>
        </Right>
      </AnimatePresence>
    </SignUpParent>
  );
}

export default withBase(SignUp);
