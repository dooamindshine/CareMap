import styled from "styled-components";
import { motion } from "framer-motion";
import Colors from "styling/color";

const SignUpParent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow-y: auto;
  @media screen and (max-width: 700px) {
    flex-direction: column; !important;
  }
`;

const LeftParent = styled(motion.div)`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media screen and (max-width: 700px) {
    flex: 0.1;
  }
`;

const Left = styled(motion.div)`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 700px) {
    display: none !important;
  }
`;

const InputMargin = styled(motion.div)`
  margin-bottom: 15px;
`;

const HeadingMargin = styled(motion.div)`
  margin-bottom: 25px;
  margin-top: 25px;
  margin-right: 25px;
`;

const Right = styled(motion.div)`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${Colors.blue_munsell_opaque};
  border-left-top: 1px solid ${Colors.blue_munsell};
  border-left-bottom: 1px solid ${Colors.blue_munsell};
  height: 100%;
  overflow-y: auto;
  margin-left: 20px;
  padding-left: 20px;
  padding-top: 20px;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  @media screen and (max-width: 700px) {
    margin-left: 0px;
    border-radius: 10px;
  }
`;

//CFE8EF
//068D9D
//0D0C1D
//9A48D0
//F4F4F9
export {
  SignUpParent,
  Left,
  Right,
  LeftParent,
  InputMargin,
  HeadingMargin,
};
