import * as React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Colors from "styling/color";
import { t } from "i18next";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF00FF", "#D309E1", "#9C1AFF", "#9A48D0", "#068D9D", "#00b894"];

export const MenuItem = ({ i }) => {
  const style = { border: `2px solid ${colors[i.id]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder" style={style}>
        <FontAwesomeIcon style={{marginLeft: "9px"}} color={colors[i.id]} icon={i.icon} />
      </div>
      <div className="text-placeholder" style={style}>
        {t(i.name)}
      </div>
    </motion.li>
  );
};
