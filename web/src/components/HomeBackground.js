import React from "react";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";

const HomeBackground = (props) => {
  const image = getImage(props.backgroundImage);
  const bgImage = convertToBgImage(image);
  return (
    <section className="relative block" style={{ height: "500px" }}>
      <BackgroundImage
        Tag="section"
        className="absolute top-0 w-full h-full bg-center bg-cover bg-hero-pattern" // Spread bgImage into BackgroundImage:
        {...bgImage}
      >
        <div>
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full h-full absolute pointer-events-none overflow-hidden"
          style={{ height: "70px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </BackgroundImage>
    </section>
  );
};

export default HomeBackground;
