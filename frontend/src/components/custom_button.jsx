import React from "react";
import { useBaseProps } from "hocs/base_component";
import { ButtonParent } from "./styles";

function Button(props) {
  const { t } = useBaseProps();

  return (
    <ButtonParent whileTap={{ scale: 0.9 }} onClick={props.onClick}>
      {props.label}
    </ButtonParent>
  );
}

export default Button;
