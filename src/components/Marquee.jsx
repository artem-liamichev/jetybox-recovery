import React from "react";
import { useTranslation } from "react-i18next";

function Marquee() {
  const { t } = useTranslation();
  const items = [
    t("practical-experience"),
    t("presence"),
    t("practical-experience"),
    t("presence"),
  ];

  return (
    <div className="marquee-shell mt-24 overflow-x-hidden md:absolute md:inset-x-0 md:mt-4 md:px-0">
      <div className="marquee-text font-[plateia] text-[14px] font-normal leading-[1.1] md:text-[24px]">
        <div className="marquee-track">
          {[0, 1].map((trackIndex) => (
            <div key={trackIndex} className="marquee-group">
              {items.map((item, index) => (
                <React.Fragment key={`${trackIndex}-${item}-${index}`}>
                  <p className="marquee-item">{item}</p>
                  {index !== items.length - 1 && <span className="marquee-dot" aria-hidden="true" />}
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Marquee;
