import { useTranslation } from "react-i18next";
import telegram from "../assets/tg-icon.svg";
import vkontakte from "../assets/vk-icon.svg";
import instagram from "../assets/instagram-icon.svg";
import youtube from "../assets/youtube-icon.svg";
const LOGO_SRC = "/assets/logo-Jpnsoa0I.png";

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
        <img
          src={LOGO_SRC}
          alt="JetyBox"
          className="mt-4 md:mt-[30px] h-8 w-auto object-contain md:h-9"
        />

        <p className="font-['Proxima-Nova'] font-light md:font-bold text-base mt-6 md:mt-[30px] text-left">
          {t("dedugin")}
        </p>
        <button
          onClick={handleScrollToTop}
          type="button"
          className="bg-white social-button mt-4 h-[26px] flex w-[134px] items-center justify-center rounded rounded-s"
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
          <a
            href="https://www.youtube.com/@jetybox"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white social-button h-[26px] flex w-[26px] items-center justify-center rounded rounded-s"
          >
            <img src={youtube} alt="YouTube" />
          </a>
          <a
            href="https://www.google.com/maps/place/jetybox/@59.9389348,30.3738134,17z/data=!3m1!4b1!4m6!3m5!1s0x4696318a6deea029:0xbc2532218e2d99e3!8m2!3d59.9389348!4d30.3763883!16s%2Fg%2F11x0q8w0j8!5m1!1e1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white social-button h-[26px] flex w-[26px] items-center justify-center rounded rounded-s"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
                fill="#1C1C1C"
              />
            </svg>
          </a>
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
              fill="white"
            />
            <rect
              x="13.8385"
              y="40.2246"
              width="2.59999"
              height="25.9999"
              transform="rotate(-135 13.8385 40.2246)"
              fill="#262525"
            />
            <rect
              x="48.7692"
              y="38.3848"
              width="2.59999"
              height="25.9999"
              transform="rotate(135 48.7692 38.3848)"
              fill="#262525"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Footer;
