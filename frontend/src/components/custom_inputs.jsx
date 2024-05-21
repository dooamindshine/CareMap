import React from "react";
import {
  FieldLabelTextParent,
  FieldParent,
  Input,
  InputParent,
} from "./styles";
import { AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RegularText } from "styling/common";
import Colors from "styling/color";

function CustomInput(props) {
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    props.setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <InputParent>
      <AnimatePresence>
        <label>
          <FieldParent>
            <FontAwesomeIcon color={Colors.ghost_white} icon={props.icon} />
            <FieldLabelTextParent>
              <RegularText $color={Colors.ghost_white}>
                {props.label}
              </RegularText>
            </FieldLabelTextParent>
          </FieldParent>
          <Input
            type={props.type}
            name={props.name}
            value={props.inputs[props.name] || ""}
            onChange={handleChange}
          ></Input>
        </label>
      </AnimatePresence>
    </InputParent>
  );
}

export default CustomInput;
