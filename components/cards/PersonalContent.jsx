import React from "react";
import IconCard from "./IconCard";
const Icondata = [
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1675358024/641825_pzcygt_qbmbdj.webp",
    title: "Comp. Knowledge",
  },
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1675358095/202-2021032_microsoft-office-icon-png-image-free-download-searchpng_jweeh9_osgiox.webp",
    title: "MS Office",
  },
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1675358075/3532806_qwdxqx_yjwiog.webp",
    title: "JWindows",
  },
];
function PersonalContent() {
  return (
    <div>
      <div className="lap:flex lap:flex-row lap:flex-wrap">
        {Icondata.map((item, index) => (
          <IconCard key={index} img={item.img} title={item.title} />
        ))}
      </div>
    </div>
  );
}

export default PersonalContent;
