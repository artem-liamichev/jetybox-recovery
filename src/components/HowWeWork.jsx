import plan from "../assets/how-we-work.svg";
import desktopPlan from "../assets/desktop-plan.svg";
import { useTranslation } from "react-i18next";
import planet from "../assets/how-we-work-planet.svg";

function HowWeWork() {
  const { t } = useTranslation();
  return (
    <div className="mt-10 px-4 pb-[56px]">
      <div className="relative">
        <h3 className="md:leading-[131%] md:text-[32px] mb-9 md:mb-36 font-['Plateia'] text-left uppercase text-2xl max-w-[300px] md:max-w-full leading-normal">
          {t("how-work")}
        </h3>
        <img
          src={planet}
          className="md:hidden absolute overflow-[overlay] -translate-x-[5%] top-[461px] "
        />
        <div className="md:hidden ml-3 flex mt-8">
          <img
            src={plan}
            loading="lazy"
            alt="Описание изображения"
            className="mr-9 h-[515px] z-10"
          />
          <div className="">
            <p className="text-left">
              <strong>{t("conduct")}</strong>
              <br /> {t("interview")}
            </p>
            <p className="text-left mt-14">
              <strong>{t("plan")} </strong>
              <br /> {t("interaction")}
            </p>
            <p className="text-left mt-14 max-w-[206px]">
              <strong>{t("team")} </strong>
              <br /> {t("responsible-person")}
            </p>
            <p className="text-left mt-8 z-10 relative max-w-[232px]">
              <strong>{t("create-system")} </strong>
              <br /> {t("visualized-system")}
            </p>
            <p className="text-left mt-5 z-10 relative">
              <strong>{t("implement")} </strong>
              <br /> {t("to-work")}
            </p>
          </div>
        </div>

        <div className="hidden md:flex ml-3 mt-8 relative justify-center">
          <img
            src={desktopPlan}
            loading="lazy"
            alt="Описание изображения"
            className="h-[515px] -mt-[123PX] max-w-[1040px] w-full"
          />
          <div className="grid grid-cols-5 grid-rows-2 absolute text-[21px] leading-6 tracking-[0%]">
            <p className="text-left row-start-1 col-start-1 max-w-[216px] h-[140px] translate-y-[3%]">
              <strong>{t("conduct")}</strong>{" "}
              <span className="lowercase">{t("interview")}</span>
            </p>
            <p className="text-center row-start-2 col-start-2 translate-x-[-20%] translate-y-[54%]">
              <strong>{t("plan")} </strong>
              <br /> <span className="lowercase">{t("interaction")}</span>
            </p>
            <p className="absolute top-[-50px] text-center row-start-1 col-start-3 w-[298px] h-[140px] translate-y-[3%] translate-x-[-25%]">
              <strong>{t("team")} </strong>
              <br /> {t("responsible-person")}
            </p>
            <p className="text-center z-10 row-start-2 col-start-4 w-[298px] translate-x-[-20%] translate-y-[54%]">
              <strong>{t("create-system")} </strong>
              <br /> {t("visualized-system")}
            </p>
            <p className="text-right row-start-1 col-start-5 max-w-[216px] h-[140px] translate-y-[3%]">
              <strong>{t("implement")} </strong>
              {t("to-work")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowWeWork;
