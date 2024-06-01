import styled from "styled-components";
import { motion } from "framer-motion";
import Colors from "styling/color";

const ProfileParent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  @media screen and (max-width: 700px) {
    flex-direction: column; !important;
  }
`;

const ProfileDetailsParent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  border-left-top: 1px solid ${Colors.blue_munsell};
  border-left-bottom: 1px solid ${Colors.blue_munsell};
  margin-left: 20px;
  padding-left: 20px;
  padding-top: 20px;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  margin-left: 50px;
  margin-right: 50px;
  border-radius: 10px;
`;

const HeaderParent = styled(motion.div)`
  display: flex;
  flex: 1;
  flex-direction: row;
  margin-left: 50px;
  @media screen and (max-width: 700px) {
    flex: 0.1;
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

const MarginButton = styled(motion.div)`
  margin-left: 20px;
`;

const ButtonEditParent = styled(motion.button)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  display: block;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  @media screen and (max-width: 700px) {
    margin-top: 10px !important;
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

const DivRow = styled(motion.div)`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: start;
  @media screen and (max-width: 700px) {
    flex-direction: column !important;
  }
`;

const DivRowSpace = styled(motion.div)`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 15px;
  @media screen and (max-width: 700px) {
    flex-direction: row !important;
  }
`;

const InputMargin = styled(motion.div)`
  margin-bottom: 15px;
  margin-left: 15px;
`;

const HeadingMargin = styled(motion.div)`
  display: flex;
  flex: 1;
  flex-direction: column;
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

export {
  ProfileParent,
  Left,
  Right,
  LeftParent,
  InputMargin,
  HeadingMargin,
  HeaderParent,
  ProfileDetailsParent,
  MarginButton,
  ButtonEditParent,
  DivRow,
  DivRowSpace
};
