import React from "react";
import Image from "next/image";
import IconCard from "./IconCard";
import AOS from "aos";

const Icondata = [
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1675353177/html_lc6b0f_o2jqwt.webp",
    title: "HTML",
  },
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1675353225/logo-2582747_960_720_a9wazf_dsawfk.webp",
    title: "CSS",
  },
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1675353285/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y_md3zqu_xb4d54.webp",
    title: "Javascript",
  },
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1675353313/logo-react-icon_dpw90i_anheil.webp",
    title: "React Js",
  },
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1675353338/nextjs-boilerplate-logo_v5mp4s_khktsw.webp",
    title: "Next Js ",
  },
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1675353364/93786_bootstrap_512x512_kvdyve_p1pey6.webp",
    title: "Bootstrap",
  },
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1675353403/z8hzeszc9eb3sp3vp3qc_bzgahh_uqx9p8.webp",
    title: "Tailwind",
  },
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1675353449/mongodb_jthqpx_g71jfu.webp",
    title: "MongoDB",
  },
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1675353471/Axios_qf6bas_qybxz0.webp",
    title: "Axios",
  },
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1675353498/Redux_zx8eqa_dwd1u5.webp",
    title: "Redux",
  },
];
function SkillsContent() {
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

export default SkillsContent;
