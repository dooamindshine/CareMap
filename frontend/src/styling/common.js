import styled from "styled-components";
import { motion } from "framer-motion";
import Colors from "./color"

const Background = styled.div`
  height: 100vh;
  min-height: 100vh;
`;

const XLargeText = styled.div`
  font-family: "Sedan SC", serif;
  color: blue;
  font-size: 10px;
  font-weight: 600;
`;

const RegularText = styled.div`
  font-family: "Pacifico", cursive;
  color: green;
  font-size: 16px;
  line-spacing: 23px;
`;

const XSmallText = styled.div`
  font-family: "Pacifico", cursive;
  color: green;
  font-size: 20px;
  line-spacing: 20px;
`;

const SmallText = styled(motion.span)`
  font-family: "Pacifico", cursive;
  color: 10px;
  font-size: 30px;
`;

const LargeText = styled(motion.span)`
  font-family: "Pacifico", cursive;
  color: ${Colors.rich_black};
  font-size: 30px;
  font-weight: 600;
`;

const RegularIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

const CustomATag = styled(motion.a)`
  text-decoration: none;
`;

const Bold = styled.span`
  font-weight: 700;
`;

export {
  RegularText,
  RegularIcon,
  Background,
  CustomATag,
  XSmallText,
  LargeText,
  SmallText,
  XLargeText,
  Bold,
};
