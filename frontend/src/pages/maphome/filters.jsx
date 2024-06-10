import * as React from "react";
import {
  ButtonGroup,
  ControlParent,
  ButtonParentType1,
  ButtonParentType3,
  ButtonParentType2,
  ButtonParentType4,
} from "./styles";
import { RegularText, WhiteHeading } from "styling/common";
import { t } from "i18next";
import Colors from "styling/color";

function Filter({ onClick }) {
  return (
    <ControlParent>
      <WhiteHeading>{t("locations.filter")}</WhiteHeading>
      <div>
        <RegularText $color={Colors.ghost_white}>
          {t("locations.desc")}
        </RegularText>
        <ButtonGroup>
          <ButtonParentType1
            whileTap={{ scale: 0.9 }}
            onClick={() => onClick(t("locations.type1"))}
          >
            {t("locations.type1")}
          </ButtonParentType1>
          <ButtonParentType2
            whileTap={{ scale: 0.9 }}
            onClick={() => onClick(t("locations.type2"))}
          >
            {t("locations.type2")}
          </ButtonParentType2>
          <ButtonParentType3
            whileTap={{ scale: 0.9 }}
            onClick={() => onClick(t("locations.type3"))}
          >
            {t("locations.type3")}
          </ButtonParentType3>
          <ButtonParentType4
            whileTap={{ scale: 0.9 }}
            onClick={() => onClick(t("locations.type4"))}
          >
            {t("locations.type4")}
          </ButtonParentType4>
        </ButtonGroup>
      </div>
    </ControlParent>
  );
}

export default React.memo(Filter);
