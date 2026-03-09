import { useTranslation } from "react-i18next";
import "swiper/css";

import { ServiceData } from "./utils/constants.js";
import planet from "../assets/planet-slider.svg";
import income from "../assets/slide-income.svg";
import marketing from "../assets/slide-marketing.svg";
import processes from "../assets/slide-processes.svg";
import product from "../assets/slide-product.svg";
import team from "../assets/slide-team.svg";
import testing from "../assets/slide-testing.svg";

export default function () {
  const { t } = useTranslation();
  return (
    <div className="pt-9 px-4 pb-[89px] mb:pb-3 overflow-hidden ">
      <h3 className="md:leading-[131%] md:text-[32px] mt-4 md:mt-8 mb-9 font-['Plateia'] text-left uppercase md:capitalize text-2xl max-w-[300px] leading-normal">
        {t("if")}
      </h3>
      <img
        src={planet}
        className="md:hidden absolute right-0 top-[254px] overflow-[overlay]"
      />
      <div className="md:hidden overflow-visible">
        <div
          className="slider-container"
          style={{
            overflowX: "auto",
            marginRight: "-20px",
            marginLeft: "-165px",
          }}
        >
          <swiper-container
            slides-per-view="auto"
            // scrollbar-clickable="true"
            mousewheel-invert="true"
            loop="true"
            className="overflow-visible cursor-pointer"
          >
            {ServiceData().map((item) => (
              <swiper-slide
                key={item.id}
                style={{
                  marginLeft: "auto",
                  marginRight: "20px",
                  width: "fit-content",
                }}
              >
                <div className="leading-5 mr-6 selector-shadow flex flex-col group relative rounded  text-white px-3 py-3 h-[268px] w-[187px] overflow-hidden">
                  <div
                    className="before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-tl before:from-[#202020] before:to-transparent before:z-[-5] z-10 bg-gradient-to-tl from-white to-black absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.backgroundImage})` }}
                  />
                  <div className="flex w-full h-full">
                    <div className="relative justify-end flex flex-col">
                      <p className="z-50  text-left">{item.content} </p>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            ))}
          </swiper-container>
        </div>
      </div>
      <section className="hidden md:grid grid-cols-3 grid-rows-3 gap-x-[30px] gap-y-6">
        <div className="order-1 row-start-1 row-end-3 selector-shadow flex flex-col gap-6 group relative rounded  text-white px-5 py-4 h-[370px] max-w-[370px] overflow-hidden ">
          <div
            className="before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-tl before:from-[#202020] before:to-transparent before:z-[-5] z-10 bg-gradient-to-tl from-white to-black absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${marketing})` }}
          />
          <div className="flex w-full h-full">
            <div className="relative justify-end flex flex-col">
              <p className="z-50 text-left">{t("need-department")} </p>
            </div>
          </div>
        </div>
        <div className="order-2 row-start-1 row-end-1 selector-shadow flex flex-col gap-6 group relative rounded  text-white px-5 py-4 h-[207px] max-w-[370px] overflow-hidden ">
          <div
            className=" before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-tl before:from-[#202020] before:to-transparent before:z-[-5] z-10 bg-gradient-to-tl from-white to-black absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${income})` }}
          />
          <div className="flex w-full h-full">
            <div className="relative justify-end flex flex-col">
              <p className="z-50 text-left">{t("need-channel")} </p>
            </div>
          </div>
        </div>
        <div className="order-3 row-start-1 row-end-3 selector-shadow flex flex-col gap-6 group relative rounded  text-white px-5 py-4 h-[370px] max-w-[370px] overflow-hidden ">
          <div
            className=" before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-tl before:from-[#202020] before:to-transparent before:z-[-5] z-10 bg-gradient-to-tl from-white to-black absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${team})` }}
          />
          <div className="flex w-full h-full">
            <div className="relative justify-end flex flex-col">
              <p className="z-50 text-left">{t("need-team")} </p>
            </div>
          </div>
        </div>

        <div className="order-4 row-start-3 col-start-1 -mt-[68px] selector-shadow flex flex-col gap-6 group relative rounded  text-white px-5 py-4 h-[207px] max-w-[370px] overflow-hidden ">
          <div
            className=" before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-tl before:from-[#202020] before:to-transparent before:z-[-5] z-10 bg-gradient-to-tl from-white to-black absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${product})` }}
          />
          <div className="flex w-full h-full">
            <div className="relative justify-end flex flex-col">
              <p className="z-50  text-left">{t("need-product")} </p>
            </div>
          </div>
        </div>

        <div className="order-5 row-start-2 row-end-4 col-start-2 selector-shadow flex flex-col gap-6 group relative rounded  text-white px-5 py-4 h-[370px] max-w-[370px] overflow-hidden ">
          <div
            className=" before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-tl before:from-[#202020] before:to-transparent before:z-[-5] z-10 bg-gradient-to-tl from-white to-black absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${processes})` }}
          />
          <div className="flex w-full h-full">
            <div className="relative justify-end flex flex-col">
              <p className="z-50  text-left">{t("need-optimisation")} </p>
            </div>
          </div>
        </div>

        <div className="order-6 row-start-3 row-end-3 col-start-3 -mt-[68px] selector-shadow flex flex-col gap-6 group relative rounded  text-white px-5 py-4 h-[207px] max-w-[370px] overflow-hidden ">
          <div
            className=" before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-tl before:from-[#202020] before:to-transparent before:z-[-5] z-10 bg-gradient-to-tl from-white to-black absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${testing})` }}
          />
          <div className="flex w-full h-full">
            <div className="relative justify-end flex flex-col">
              <p className="z-50  text-left">{t("need-test")} </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
