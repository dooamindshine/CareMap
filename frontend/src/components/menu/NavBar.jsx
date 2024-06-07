import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navbar.css";
import Colors from "styling/color";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import Header from "components/header";
import { useBaseProps } from "hocs/base_component";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useBaseProps();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <Header isHeaderPart={true} />
        </Link>
      </div>
      <div className="nav-menu-icon" onClick={toggleMenu}>
        {isOpen ? (
          <FontAwesomeIcon color={Colors.ghost_white} icon={faClose} />
        ) : (
          <FontAwesomeIcon color={Colors.ghost_white} icon={faBars} />
        )}
      </div>
      <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="/maphome" className="nav-links" onClick={toggleMenu}>
            {t("menu.home")}
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/profile" className="nav-links" onClick={toggleMenu}>
            {t("menu.details")}
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/addresses" className="nav-links" onClick={toggleMenu}>
            {t("menu.address")}
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-links" onClick={toggleMenu}>
            {t("menu.faciliteis")}
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-links" onClick={toggleMenu}>
            {t("menu.logout")}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
