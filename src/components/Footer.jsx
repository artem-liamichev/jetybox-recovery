import { useTranslation } from "react-i18next";
import telegram from "../assets/tg-icon.svg";
import vkontakte from "../assets/vk-icon.svg";
import instagram from "../assets/instagram-icon.svg";
import youtube from "../assets/youtube-icon.svg";
import logo from "../assets/logo.svg";

function Footer() {
  const { t } = useTranslation();
  const handleScrollToTop = () => {
    console.log("handleScrollToTop:");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="md:inset-x-0 md:absolute w-full px-4 pb-[127px] bg-[#262525] relative z-10">
      <div className="md:max-w-[1170px] md:m-auto md:relative md:px-4">
        <div className="md:max-w-[1170px] md:m-auto h-px w-full bg-gradient-to-r from-transparent via-white to-transparent"></div>
        {/* <h3 className="mt-4 md:mt-[30px] font-['Plateia'] md:font-['Proxima-Nova'] md:text-[46px] text-left uppercase text-xl">
          Logo
        </h3> */}
        <img src={logo} className="mt-4 md:mt-[30px]" />

        <p className="font-['Proxima-Nova'] font-light md:font-bold text-base mt-6 md:mt-[30px] text-left">
          {t("dedugin")}
        </p>
        <button
          onClick={handleScrollToTop}
          type="button"
          className="bg-white  social-button mt-4 h-[26px] flex items-center w-[128px] justify-center rounded rounded-s"
        >
          <img src={telegram} alt="Описание изображения" className="" />
        </button>

        <div className="flex-row flex mt-[14px] gap-[10px]">
          <button className="bg-white social-button h-[26px] w-[26px] flex items-center justify-center rounded rounded-s">
            <img src={instagram} alt="Описание изображения" />
          </button>

          <button className="bg-white social-button h-[26px] flex w-[26px] items-center justify-center rounded rounded-s">
            <img src={vkontakte} alt="Описание изображения" />
          </button>
          <button className="bg-white social-button  h-[26px] flex items-center w-[26px] justify-center rounded rounded-s">
            <img src={youtube} alt="Описание изображения" />
          </button>
        </div>
        <button
          onClick={handleScrollToTop}
          className="hidden md:block  absolute top-[56px] right-[22px] scroll-button"
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="svg-icon"
          >
            <rect
              id="background-rect"
              width="60"
              height="60"
              rx="4"
              fill="#7D6137"
            />
            <rect
              x="13.8385"
              y="40.2246"
              width="2.59999"
              height="25.9999"
              transform="rotate(-135 13.8385 40.2246)"
              fill="white"
            />
            <rect
              x="48.7692"
              y="38.3848"
              width="2.59999"
              height="25.9999"
              transform="rotate(135 48.7692 38.3848)"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Footer;
