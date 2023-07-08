import React from "react";
import s from "./Footer.module.scss";
import logo from "../../assets/footer-logo.png";

const Footer = () => {
  const navigate = [
    "Terms",
    "Privacy",
    "Support",
    "About",
    "Resources",
    "Contact",
  ];
  return (
    <footer id="container" className={s.footer}>
      <div className={s.footerLogo}>
        <img src={logo} alt="img" />
      </div>
      <nav>
        <ul>
          {navigate.map((el, id) => (
            <li key={id}>
              <a href="">{el}</a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
