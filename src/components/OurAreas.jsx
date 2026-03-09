import { useTranslation } from "react-i18next";
import data from "../assets/areas-data.svg";
import design from "../assets/areas-design.svg";
import events from "../assets/areas-events.svg";
import IT from "../assets/areas-IT.svg";
import logistics from "../assets/areas-logistics.svg";
import processing from "../assets/areas-processing.svg";
import repair from "../assets/areas-repair.svg";
import planet from "../assets/grid-planet.svg";

function OurAreas() {
  const { t } = useTranslation();
  return (
    <div className=" px-4 pb-[56px] overflow-hidden">
      <div className="relative">
        <img
          src={planet}
          style={{ overflowBlock: "hidden" }}
          className="md:hidden absolute translate-y-[24%] overflow-[overlay] translate-x-[74%]"
        />
        <h3 className="md:tracking-[0%] leading-9 md:max-w-screen-xl md:leading-[32px] md:text-[32px] font-['Plateia'] text-left uppercase md:normal-case text-2xl max-w-[300px]">
          {t("covering-a-wide")}
        </h3>
        <div className="flex mt-8 justify-center md:mt-20">
          <ul className="grid gap-2 md:gap-x-[30px] md:gap-y-[27px] grid-cols-2 md:grid-cols-4 md:grid-rows-2 ">
            <li className="bg-[#1E1E1E] leading-5 z-10 min-w-[168px] min-h-[172px] md:h-[257px] md:max-w-[270px] gap-4 flex flex-col items-center justify-center md:justify-between md:pt-[59px] md:pb-6 md:px-9 border text-center grid-border rounded rounded-s px-3 py-2">
              <div className="hidden md:flex w-[100px] h-[100px] items-center justify-center">
                <img src={events} className="w-full h-full" />
              </div>
              <img src={events} className="md:hidden" />
              <p>{t("event-organization")}</p>
            </li>

            <li className="bg-[#1E1E1E] leading-5 z-10 min-w-[168px] min-h-[172px] md:h-[257px] md:max-w-[270px] gap-4 flex flex-col items-center justify-center md:justify-between md:pt-[59px] md:pb-6 md:px-9 border text-center grid-border rounded rounded-s px-3 py-2">
              <div className="hidden md:flex w-[100px] h-[100px] items-center justify-center">
                <img src={design} className="w-full h-full" />
              </div>
              <img src={design} className="md:hidden" />
              <p>{t("design-products")}</p>
            </li>

            <li className="bg-[#1E1E1E] leading-5 z-10 min-w-[168px] min-h-[172px] md:h-[257px] md:max-w-[270px] gap-4 flex flex-col items-center justify-center md:justify-between md:pt-[59px] md:pb-6 md:px-9 border text-center grid-border rounded rounded-s px-3 py-2">
              <div className="hidden md:flex w-[100px] h-[100px] items-center justify-center">
                <img src={IT} className="w-full h-full" />
              </div>
              <img src={IT} className="md:hidden" />
              <p>{t("it-services")}</p>
            </li>

            <li className="bg-[#1E1E1E] leading-5 z-10 min-w-[168px] min-h-[172px] md:h-[257px] md:max-w-[270px] gap-4 flex flex-col items-center justify-center md:justify-between md:pt-[59px] md:pb-6 md:px-9 border text-center grid-border rounded rounded-s px-3 py-2">
              <div className="hidden md:flex w-[100px] h-[100px] items-center justify-center">
                <img src={logistics} className="w-full h-full" />
              </div>
              <img src={logistics} className="md:hidden" />
              <p>{t("logistics")}</p>
            </li>

            <li className="bg-[#1E1E1E] leading-5 z-10 min-w-[168px] min-h-[172px] md:h-[257px] md:max-w-[270px] gap-4 flex flex-col items-center justify-center md:justify-between md:pt-[59px] md:pb-6 md:px-9 border text-center grid-border rounded rounded-s px-3 py-2">
              <div className="hidden md:flex w-[100px] h-[100px] items-center justify-center">
                <img src={data} className="w-full h-full" />
              </div>
              <img src={data} className="md:hidden" />
              <p>{t("data-analysis")}</p>
            </li>

            <li className="bg-[#1E1E1E] leading-5 z-10 min-w-[168px] min-h-[172px] md:h-[257px] md:max-w-[270px] gap-4 flex flex-col items-center justify-center md:justify-between md:pt-[59px] md:pb-6 md:px-9 border text-center grid-border rounded rounded-s px-3 py-2">
              <div className="hidden md:flex w-[100px] h-[100px] items-center justify-center">
                <img src={processing} className="w-full h-full" />
              </div>
              <img src={processing} className="md:hidden" />
              <p>{t("recycling-raw-materials")}</p>
            </li>

            <li className="bg-[#1E1E1E] leading-5 z-10 min-w-[168px] min-h-[172px] md:h-[257px] md:max-w-[270px] gap-4 flex flex-col items-center justify-center md:justify-between md:pt-[59px] md:pb-6 md:px-9 border text-center grid-border rounded rounded-s px-3 py-2">
              <div className="hidden md:flex w-[100px] h-[100px] items-center justify-center">
                <img src={repair} className="w-full h-full" />
              </div>
              <img src={repair} className="md:hidden" />
              <p>{t("repair-production")}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OurAreas;
