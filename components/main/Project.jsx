import Image from "next/image";
import React from "react";

const projectdata = [
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1685598933/screenshot_5_icdbyg.png",
    link: "https://doct.vercel.app/",
    name: "",
    logo: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1689865693/Screenshot_2023-07-20_203755_ccp3cv.png",
  },
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1685599027/screenshot_6_a3ywsy.png",
    link: "https://cliniq-cyan.vercel.app/",
    name: "",
    logo: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1689866067/Screenshot_2023-07-20_204357_wqaequ.png",
  },
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1685597159/screenshot_2_1_zlxpio.png",
    link: "https://gevent-chi.vercel.app/",
    name: "",
    logo: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1689866208/Screenshot_2023-07-20_204626_xkwzgr.png",
  },
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1676718480/livenews-main.vercel.app__2_x42sf1.png",
    link: "https://livenews-main.vercel.app/",
    name: "",
    logo: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1689866358/Screenshot_2023-07-20_204847_yqt8ub.png",
  },
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1676717352/zezosoftrevamp-zeze121.vercel.app__1_nha1cl.png",
    link: "https://zezosoftrevamp-zeze121.vercel.app/",
    name: "",
    logo: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1689866500/Screenshot_2023-07-20_205117_v0zudd.png",
  },

  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1685547715/screenshot_1_f1uw2h.png",
    link: "https://newsportal-nine.vercel.app/",
    name: "",
    logo: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1689866606/Screenshot_2023-07-20_205303_pbldoe.png",
  },
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1685597957/screenshot_4_yfk092.png",
    link: "https://mediatools.vercel.app/",
    name: "",
    logo: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1689866755/Screenshot_2023-07-20_205540_nxul22.png",
  },
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1685597589/screenshot_3_hjfpub.png",
    link: "https://permoney.vercel.app/",
    name: "",
    logo: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1689866849/Screenshot_2023-07-20_205714_zsvkj2.png",
  },
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1696776113/movieapp/qafx2lft0qletoi4mirw.png",
    link: "https://food-recipe-eosin.vercel.app",
    name: "",
    logo: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1696776113/movieapp/qafx2lft0qletoi4mirw.png",
  },
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1696776618/movieapp/gwr4fwhwjhnlufnatzaz.png",
    link: "https://cargo-beige.vercel.app/",
    name: "",
    logo: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1696776113/movieapp/qafx2lft0qletoi4mirw.png",
  },
];
function Project() {
  return (
    <>
      <div className="bg-[rgb(36,36,36)] text-white">
        <div className="container m-auto py-10 ">
          {/* <div className="grid grid-cols-1 lap:grid-cols-3 mx-10 gap-7 my-5">
          {projectdata.map((item, index) => (
            <div key={index} className="  ">
              <div className="image-wrap rounded-lg">
                <a
                  className="hover:cursor-pointer"
                  target="blank"
                  href={item.link}
                >
                  <div className="hidden lap:block my-1 relative lap:w-[100%] bg-white rounded-md overflow-hidden  hover:border-4 hover:border-white lap:h-[18rem] mx-auto">
                    <div className="image-wrap">
                      <Image
                        src={item.img}
                        objectFit="cover"
                        layout="fill"
                        className="h-fit"
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
          ;
        </div> */}

          <div className="grid lap:grid-cols-3 tab:grid-cols-2">
            {projectdata.map((item, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-duration="1000"
                className="my-5 w-[90%] mx-auto"
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <div className="hidden lap:block  relative lap:w-[100%] bg-white rounded-md overflow-hidden  border-2 border-white  lap:h-[18rem] mx-auto">
                    <div className="image-wrap">
                      <Image
                        src={item.img}
                        alt={item.alt}
                        className="h-fit"
                        objectFit="cover"
                        layout="fill"
                      />
                    </div>
                  </div>
                  <div className="lap:hidden my-1 relative h-20 rounded-md overflow-hidden  hover:border-4 hover:border-white w-[50%] mx-auto">
                    <Image
                      src={item.logo}
                      alt={item.alt}
                      objectFit="contain"
                      layout="fill"
                    />
                  </div>
                  <h2>
                    <div className="text-white text-center">{item.name}</div>
                  </h2>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
