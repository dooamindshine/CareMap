import { motion } from "framer-motion";
import styled from "styled-components";
import Colors from "styling/color";

const HeaderParent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  text-shadow: #e0e0e0 1px 1px 0;
  margin-left: 10px;
`;

const InputParent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-start;
`;

const LabelParent = styled(motion.label)`
  display: flex;
  flex-direction: column;
`;

const FieldLabelTextParent = styled(motion.label)`
  margin-left: 10px;
`;

const MarginLogo = styled(motion.div)`
  margin-left: -50px;
  z-index: 20;
`;

const FieldParent = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Input = styled.input`
  border: 1px solid ${Colors.blue_munsell_opaque};
  border-radius: 5px;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  font-family: "Encode Sans Expanded", sans-serif;
  color: ${Colors.rich_black};
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 16px;
  font-weight: 600;
  &:focus {
    border-color: ${Colors.border_green};
    box-shadow: 0 0 10px ${Colors.border_green};
    outline: none;
  }
`;

const Select = styled.select`
  border: 1px solid ${Colors.blue_munsell_opaque};
  border-radius: 5px;
  font-family: "Encode Sans Expanded", sans-serif;
  color: ${Colors.rich_black};
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 16px;
  font-weight: 600;
  &:focus {
    border-color: ${Colors.border_green};
    box-shadow: 0 0 10px ${Colors.border_green};
    outline: none;
  }
`;

const ButtonParent = styled(motion.button)`
  background-image: linear-gradient(
    to right,
    #005c97 0%,
    #363795 51%,
    #005c97 100%
  );
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
  border: none;
  display: block;
  font-family: "Encode Sans Expanded", sans-serif;
  color: ${Colors.ghost_white};
  font-size: 16px;
  font-weight: 600;
  &:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
`;

export {
  InputParent,
  FieldParent,
  LabelParent,
  HeaderParent,
  FieldLabelTextParent,
  Input,
  Select,
  ButtonParent,
  MarginLogo,
};
