import React, {useContext} from "react";
import "./Contact.scss";
import { useTranslation } from "react-i18next";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration} from "../../portfolio";
import {Fade} from "react-reveal";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  const { t } = useTranslation();
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{t('contact.title')}</h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {t('contact.subtitle')}
            </p>
            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              <div className="contact-info">
                <p><strong>📞 Phone:</strong> <a href={"tel:" + t('contact.number')}>{t('contact.number')}</a></p>
                <p><strong>📧 Email:</strong> <a href={"mailto:" + t('contact.email')}>{t('contact.email')}</a></p>
                <p><strong>📍 Location:</strong> {t('contact.location')}</p>
                <p><strong>🌏 Citizenship:</strong> {t('contact.citizenship')}</p>
                <p><strong>🗣️ Languages:</strong> {t('contact.languages')}</p>
              </div>
              <br />
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={email} />
            ) : (
              <img
                alt="Man working"
                src={require("../../assets/images/contactMailDark.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
