import React from "react";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row footer__content">
          <div className="col-md-8 col-sm-12">
            <div className="footer__text">
              <p>Made With Love By Figmaland All Right Reserved </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="footer__icons">
              <img src={facebook} />
              <img src={instagram} />
              <img src={twitter} />
              <img src={youtube} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
