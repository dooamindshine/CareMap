import styled from 'styled-components';
import { motion } from "framer-motion";
import Colors from 'styling/color';

const SignUpParent = styled.div`
  display: flex;
  flex: 1;
  height: 90%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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

const Right = styled(motion.div)`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.blue_columbia_opaque};
  border: 1px solid ${Colors.blue_munsell};
  height: 90%;
  border-radius: 30px;
  margin-right: 20px;
  margin-left: 20px;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
`;

//CFE8EF
//068D9D
//0D0C1D
//9A48D0
//F4F4F9
export { SignUpParent, Left, Right };
