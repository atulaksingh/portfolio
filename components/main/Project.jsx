import React from "react";

const projectdata = [
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1676718480/livenews-main.vercel.app__2_x42sf1.png",
    link: "https://livenews-main.vercel.app/",
    name: "",
  },
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1676717352/zezosoftrevamp-zeze121.vercel.app__1_nha1cl.png",
    link: "https://zezosoftrevamp-zeze121.vercel.app/",
    name: "",
  },

  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1685547715/screenshot_1_f1uw2h.png",
    link: "https://newsportal-nine.vercel.app/",
    name: "",
  },
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1685597159/screenshot_2_1_zlxpio.png",
    link: "https://gevent-chi.vercel.app/",
    name: "",
  },
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1685597589/screenshot_3_hjfpub.png",
    link: "https://permoney.vercel.app/",
    name: "",
  },
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1685597957/screenshot_4_yfk092.png",
    link: "https://mediatools.vercel.app/",
    name: "",
  },
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1685598933/screenshot_5_icdbyg.png",
    link: "https://doct.vercel.app/",
    name: "",
  },
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1685599027/screenshot_6_a3ywsy.png",
    link: "https://cliniq-cyan.vercel.app/",
    name: "",
  },
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1685597589/screenshot_3_hjfpub.png",
    link: "https://permoney.vercel.app/",
    name: "",
  },
];
function Project() {
  return (
    <>
      <div className="container m-auto my-10">
        <div className="grid grid-cols-1 lap:grid-cols-3 mx-10 gap-7 my-5">
          {projectdata.map((item, index) => (
            <div key={index} className="col-span-1  ">
              <div className="image-wrap rounded-lg">
                <a
                  className="hover:cursor-pointer"
                  target="blank"
                  href={item.link}
                >
                  <img src={item.img} />
                </a>
              </div>
            </div>
          ))}
          ;
        </div>
      </div>
    </>
  );
}

export default Project;
