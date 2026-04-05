import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "swiper/css";

import { ServiceData } from "./utils/constants.js";
import planet from "../assets/planet-slider.svg";
import income from "../../archive-build/assets/slide-income-Waf4chYw.webp";
import marketing from "../../archive-build/assets/slide-marketing-Bkt-0A-8.webp";
import processes from "../../archive-build/assets/slide-processes-Bw0mKP4s.webp";
import product from "../../archive-build/assets/slide-product-BJ3krgMq.webp";
import team from "../../archive-build/assets/slide-team-B6im7yBb.webp";
import testing from "../../archive-build/assets/slide-testing-D_vt1M9C.webp";

export default function () {
  const { t } = useTranslation();
  const mobileSliderRef = useRef(null);
  const serviceItems = ServiceData();
  const loopedServiceItems = [...serviceItems, ...serviceItems, ...serviceItems];

  useEffect(() => {
    const slider = mobileSliderRef.current;

    if (!slider || window.innerWidth >= 768) {
      return;
    }

    const cards = slider.children;
    const groupSize = serviceItems.length;
    const initialCard = cards[groupSize];

    if (!initialCard) {
      return;
    }

    slider.scrollLeft = initialCard.offsetLeft;

    const handleScroll = () => {
      const firstMiddleCard = cards[groupSize];
      const lastMiddleCard = cards[groupSize * 2];

      if (!firstMiddleCard || !lastMiddleCard) {
        return;
      }

      const leftBoundary = firstMiddleCard.offsetLeft / 2;
      const rightBoundary = lastMiddleCard.offsetLeft + lastMiddleCard.clientWidth / 2;

      if (slider.scrollLeft < leftBoundary) {
        slider.scrollLeft += firstMiddleCard.offsetLeft;
      } else if (slider.scrollLeft > rightBoundary) {
        slider.scrollLeft -= firstMiddleCard.offsetLeft;
      }
    };

    slider.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      slider.removeEventListener("scroll", handleScroll);
    };
  }, [serviceItems.length]);

  return (
    <div className="pt-9 px-4 pb-[89px] mb:pb-3 overflow-hidden ">
      <h3 className="md:leading-[131%] md:text-[32px] mt-4 md:mt-8 mb-9 font-['Plateia'] text-left uppercase md:capitalize text-2xl max-w-[300px] leading-normal">
        {t("if")}
      </h3>
      <img
        src={planet}
        className="md:hidden absolute right-0 top-[254px] overflow-[overlay]"
      />
      <div className="md:hidden overflow-visible -mx-4">
        <div
          ref={mobileSliderRef}
          className="mobile-loop-slider flex gap-5 overflow-x-auto pr-4 snap-x snap-mandatory"
        >
          {loopedServiceItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="snap-start shrink-0 selector-shadow flex flex-col group relative rounded text-white px-[10px] py-[10px] h-[266px] w-[calc((100vw-68px)/2)] min-w-[170px] max-w-[190px] overflow-hidden"
            >
              <div
                className="before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-t before:from-[#1f1f1f] before:via-[#1f1f1f]/55 before:via-[42%] before:to-transparent before:z-[-5] z-10 absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="flex w-full h-full">
                <div className="relative justify-end flex flex-col">
                  <p className="z-50 text-left text-[16px] leading-[108%] font-normal tracking-[-0.02em] max-w-[150px]">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
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
