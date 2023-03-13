import React from "react";
import { SiWhatsapp, SiGithub, SiTwitter, SiInstagram } from "react-icons/si";

const SocialMedias = () => {
  return (
    <div className="app__social">
      <div
      className="media"
        onClick={() =>
          window.open(
            "#",
            "_blank"
          )
        }
      >
        <SiTwitter/>
      </div>
      <div  className="media" onClick={() => window.open("", "_blank")}>
        <SiInstagram />
      </div>
    </div>
  );
};

export default SocialMedias;
