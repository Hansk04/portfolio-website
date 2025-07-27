import React, { useEffect } from "react";
import "./Hero.scss";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Data Science Major", "Northwestern University", "Creative Coder"],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 70,
    delaySpeed: 1500,
  });

  const isNorthwestern = (currentText) => {
    return currentText.includes("N");
  };

  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__text">
          <h1 className="hero__title cascade">Hello I'm</h1>
          <h1 className="hero__name cascade">Hans Kuthy</h1>
          <h2 className="hero__subtitle cascade">
            <span>
              {isNorthwestern(text) ? (
                <span className="northwestern-purple">{text}</span>
              ) : (
                text
              )}
            </span>
            <Cursor cursorBlinking={true} cursorStyle="|" />
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;