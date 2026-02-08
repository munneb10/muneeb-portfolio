import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className={`contact-shell ${isDark ? "contact-shell--dark" : ""}`}>

          {/* Header */}
          <div className="contact-mini-header">
            <div className="contact-avatar-wrap">
              <img
                src={require("../../assets/images/profile.jpeg")}
                alt="Muneeb Arif"
                className="contact-avatar"
              />
              <span className="contact-status-dot" />
            </div>

            <h1 className="heading contact-title">{contactInfo.title}</h1>

            <p className={isDark ? "dark-mode contact-subtitle" : "subTitle contact-subtitle"}>
              {contactInfo.subtitle}
            </p>
          </div>

          {/* Centered Info */}
          <div className="contact-center-content">
            {contactInfo.number && (
              <a className="contact-detail" href={"tel:" + contactInfo.number}>
                {contactInfo.number}
              </a>
            )}

            <a
              className="contact-detail-email"
              href={"mailto:" + contactInfo.email_address}
            >
              {contactInfo.email_address}
            </a>

            <SocialMedia />
          </div>

        </div>
      </div>
    </Fade>
  );
}