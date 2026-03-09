import React from "react";
import { useTranslation } from "react-i18next";

function Marquee() {
  const { t } = useTranslation();
  return (
    <div className="overflow-x-hidden mt-20 md:-mt-14 md:inset-x-0 md:absolute md:px-0">
      <div className="marquee-text  font-[plateia] font-normal text-base leading-17 md:text-[32px]">
        <div className="marquee inline-flex items-center gap-x-6 overflow-hidden whitespace-nowrap py-4 font-bold leading-relaxed text-gray-50 justify-center">
          <p>{t("practical-eperience")}</p>
          <svg
            width="4.000000"
            height="4.000000"
            viewBox="0 0 4 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <defs />
            <rect
              id="Rectangle 1086"
              width="4.000000"
              height="4.000000"
              fill="#FFFFFF"
              fill-opacity="1.000000"
            />
          </svg>
          <p>{t("presence")}</p>
          <svg
            width="4.000000"
            height="4.000000"
            viewBox="0 0 4 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <defs />
            <rect
              id="Rectangle 1086"
              width="4.000000"
              height="4.000000"
              fill="#FFFFFF"
              fill-opacity="1.000000"
            />
          </svg>
          <p>{t("practical-experience")}</p>
          <svg
            width="4.000000"
            height="4.000000"
            viewBox="0 0 4 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <defs />
            <rect
              id="Rectangle 1086"
              width="4.000000"
              height="4.000000"
              fill="#FFFFFF"
              fill-opacity="1.000000"
            />
          </svg>
          <p className="">{t("presence")}</p>
        </div>
      </div>
    </div>
  );
}

export default Marquee;
