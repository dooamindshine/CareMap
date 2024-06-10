import styled from "styled-components";
import { motion } from "framer-motion";
import Colors from "styling/color";

const MapHomeParent = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  flex-direction: column;
`;

const ControlParent = styled.div`
  background-color: #068d9d;
  padding: 20px;
`;

const PopupParent = styled.div`
  background-color: #F4F4F9;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex: 0.5;
  flex-direction: row;
  @media screen and (max-width: 700px) {
    flex-direction: column; !important;
  }
`;

const ButtonParentType1 = styled(motion.button)`
  background-image: linear-gradient(
    to right,
    #f07857 0%,
    #f07857 51%,
    #f07857 100%
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

const ButtonParentType2 = styled(motion.button)`
  background-image: linear-gradient(
    to right,
    #00b894 0%,
    #00b894 51%,
    #00b894 100%
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

const ButtonParentType3 = styled(motion.button)`
  background-image: linear-gradient(
    to right,
    #9a48d0 0%,
    #9a48d0 51%,
    #9a48d0 100%
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

const ButtonParentType4 = styled(motion.button)`
  background-image: linear-gradient(
    to right,
    #d1001f 0%,
    #d1001f 51%,
    #d1001f 100%
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


const DelFavParent = styled(motion.div)`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 20px;
  justify-content: flex-end;
`;

const DelFavButton = styled(motion.button)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  display: block;
  margin-left: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
  @media screen and (max-width: 700px) {
    margin-top: 10px !important;
  }
`;

export {
  MapHomeParent,
  ControlParent,
  ButtonGroup,
  ButtonParentType1,
  ButtonParentType2,
  ButtonParentType3,
  ButtonParentType4,
  PopupParent,
  DelFavParent,
  DelFavButton
};
