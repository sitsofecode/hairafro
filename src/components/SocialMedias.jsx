import React from "react";
import { SiTwitter, SiInstagram, SiFacebook } from "react-icons/si";

const SocialMedias = () => {
  return (
    <div className="app__social flex space-x-5">
      <div
        className="media" onClick={() => window.open("#", "_blank")} >
        <SiTwitter className=" text-2xl" />
      </div>
      <div className="media" onClick={() => window.open("", "_blank")}>
        <SiInstagram className="text-2xl"/>
      </div>
      <div className="media" onClick={() => window.open("", "_blank")}>
        <SiFacebook className="text-2xl"/>
      </div>
    </div>
  );
};

export default SocialMedias;
