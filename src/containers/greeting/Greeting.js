import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { illustration, greeting } from "../../portfolio";

export default function Greeting() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (!greeting.displayGreeting) return null;

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <h1 className="greeting-text">
              {greeting.title}{" "}
              <span className="wave-emoji">{emoji("👋")}</span>
            </h1>

            <p className="greeting-text-p subTitle">
              {greeting.subTitle}
            </p>

            <SocialMedia />

            <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
            </div>
          </div>

          {/* Hide animation on mobile */}
          {!isMobile && (
            <div className="greeting-image-div">
              {illustration.animated ? (
                <DisplayLottie animationData={landingPerson} />
              ) : (
                <img
                  alt="man sitting on table"
                  src={require("../../assets/images/manOnTable.svg")}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </Fade>
  );
}