import React from "react";
import images from "../../assets/img/images";

const FooterMosque = () => {
  return (
    <div className="xl:-mb-16 lg:-mb-16 md:-mb-14 min-[540px]:-mb-10 -mb-6 mx-auto w-full mt-10">
      <img
        src={images.footerMosque}
        alt="Footer Mosque"
        className="mx-auto "
        width={800}
      />
    </div>
  );
};

export default FooterMosque;
