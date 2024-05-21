import React from "react";
import {
  FieldLabelTextParent,
  FieldParent,
  Input,
  InputParent,
  Select,
} from "./styles";
import { AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RegularText } from "styling/common";
import Colors from "styling/color";

function OptionGroup(props) {
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
          <Select>
            {props.list.map((item) => {
              return <option value={item}>{item}</option>;
            })}
          </Select>
        </label>
      </AnimatePresence>
    </InputParent>
  );
}

export default OptionGroup;
