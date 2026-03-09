import React, { useState, Fragment, useEffect, useRef } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.svg";

const languages = ["ru", "en"];

function Header() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    console.log("changeLanguage:", lng);
    i18n.changeLanguage(lng);
  };
  const [selected, setSelected] = useState(i18n.resolvedLanguage);

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleClickClose = () => {
    console.log("handleClickClose:", handleClickClose);
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const LanguageLine = () => (
    <svg
      className="w-full h-0.5"
      width="52.000000"
      height="1.000000"
      viewBox="0 0 52 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <desc>Created with Pixso.</desc>
      <defs>
        <radialGradient
          id="paint_radial_246_403_0"
          cx="0.000000"
          cy="0.000000"
          r="1.000000"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(25.6166 0.5) rotate(90) scale(0.5 25.6166)"
        >
          <stop stopColor="#FFFFFF" />
          <stop offset="1.000000" stopColor="#FFFFFF" stopOpacity="0.000000" />
        </radialGradient>
      </defs>
      <rect
        id="Rectangle 1024"
        width="51.233292"
        height="1.000000"
        fill="url(#paint_radial_246_403_0)"
        fillOpacity="1.000000"
      />
    </svg>
  );

  return (
    <header className="md:inset-x-0 md:absolute w-full md:px-0 px-4 border-white min-w-[375px] top-3 md:top-0 bg-[#333333_43%] md:bg-[#333333]">
      <nav className="md:px-4 md:h-[70px] md:max-w-[1170px] md:m-auto flex justify-between items-center pt-3 md:pt-0">
        <Listbox
          value={selected}
          onChange={(newValue) => {
            setSelected(newValue);
            changeLanguage(newValue);
          }}
          className="uppercase"
        >
          <div className="relative w-16 h-9">
            <Listbox.Button className="w-full flex cursor-pointer hover:bg-gray-400 hover:opacity-80 rounded py-1.5 pl-2 text-left  selector-shadow focus:outline-none">
              <div className="back rounded h-full flex bg-[#2e2e2e] items-center justify-center gap-1.5">
                <span className="block truncate text-white uppercase -mt-0.5">
                  {i18n.resolvedLanguage}
                </span>
                <span className="pointer-events-none inset-y-0 right-0 flex items-center overflow-hidden">
                  <div className="ml-0.5">
                    <svg
                      width="15.789879"
                      height="8.581177"
                      viewBox="0 0 15.7899 8.58118"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <defs />
                      <rect
                        id="Rectangle 1018"
                        y="0.828491"
                        width="1.000000"
                        height="11.104889"
                        transform="rotate(-45.7235 0.000000 0.828491)"
                        fill="#FFFFFF"
                        fill-opacity="1.000000"
                      />
                      <rect
                        id="Rectangle 1019"
                        width="1.000000"
                        height="11.104889"
                        transform="matrix(-0.70926 -0.704947 -0.704947 0.70926 15.7899 0.704956)"
                        fill="#FFFFFF"
                        fill-opacity="1.000000"
                      />
                    </svg>
                  </div>
                </span>
              </div>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="w-full z-10 absolute mt-[10px] max-h-60 overflow-auto rounded bg-[#454545] py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                {languages.map((language, languageIdx) => (
                  <div key={languageIdx} className="relative">
                    <Listbox.Option
                      className={({ active }) =>
                        `lang-button select-none py-[1.5px] ${
                          active ? "bg-opacity-100" : "bg-transparent"
                        }`
                      }
                      value={language}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={` block truncate ${
                              selected ? "text-white " : "text-[#7D7D7D]"
                            }`}
                          >
                            {language}
                          </span>
                        </>
                      )}
                    </Listbox.Option>
                    {languageIdx !== languages.length - 1 && <LanguageLine />}
                  </div>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
        <div className="fixed top-16 w-72"></div>
        <img src={logo} />
        <p className="hidden md:block">+7 (000) 000-00-00</p>
        <button
          className="bg-[#2e2e2e] md:hidden justify-center flex flex-col space-y-2 focus:outline-none  hover:opacity-80"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Меню"
        >
          <div className="w-7 h-0.5 bg-white"></div>
          <div className="w-7 h-0.5 bg-white"></div>
        </button>
        {isOpen && (
          <div
            ref={menuRef}
            className="z-10 w-[309px] flex flex-col backdrop-filter backdrop-blur-lg bg-gray-800 bg-opacity-50 absolute top-0 right-0 px-5 bg-transparent rounded-lg"
          >
            <button
              type="button"
              className="hover:opacity-80 self-end rounded-md  focus:outline-none focus:ring-2 focus:ring-inset py-3"
              onClick={() => handleClickClose()}
              aria-label="Меню"
            >
              <span class="sr-only">Close menu</span>
              <svg
                class="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="border h-[0.5px] border-opacity-60 border-white top-[54.75px] mx-[-20px]"></div>
            <section className="mt-6 flex flex-col items-start text-left">
              <h3 className="uppercase font-[Plateia] font-normal text-2xl leading-9">
                {t("Solutions")}
              </h3>
              <ul className="mt-5 flex flex-col gap-y-7 text-base">
                <li>
                  <a>{t("Development")}</a>
                </li>
                <li>
                  <a>{t("Advertising")}</a>
                </li>
                <li>
                  <a>{t("Design")}</a>
                </li>
                <li>
                  <a>{t("Telephony")}</a>
                </li>
                <li>
                  <a>{t("CRM Systems")}</a>
                </li>
                <li>
                  <a>{t("Analytics")}</a>
                </li>
              </ul>
              <p className="mt-[152px] mb-5">+7 (000) 000-00-00</p>
            </section>
            <div className="border h-[0.5px] border-opacity-60 border-white top-[54.75px] mx-[-20px]"></div>
            <section>
              <div className="flex-row flex my-5 gap-[10px]">
                <button className="social-button bg-[#1C1C1C] w-[26px] h-[26px] flex items-center justify-center rounded rounded-s">
                  <svg
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#D69B56" />
                        <stop offset="100%" stopColor="#FDDFBC" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M7 4.31262C5.4168 4.31262 4.30769 5.45037 4.30769 7.03538C4.30769 8.62039 5.4168 9.70339 7 9.70339C8.5832 9.70339 9.69231 8.59302 9.69231 7.008C9.69231 5.42299 8.5832 4.31262 7 4.31262ZM7 4.31262C5.4168 4.31262 4.30769 5.45037 4.30769 7.03538C4.30769 8.62039 5.4168 9.70339 7 9.70339C8.5832 9.70339 9.69231 8.59302 9.69231 7.008C9.69231 5.42299 8.5832 4.31262 7 4.31262ZM11.9492 0H2.05078C1.07692 0 0 1.07815 0 2.05313V11.9629C0 12.9379 1.07692 14.016 2.05078 14.016H11.9492C12.9231 14.016 14 12.9379 14 11.9629V2.05313C14 1.07815 12.9231 0 11.9492 0ZM7 10.731C4.96565 10.731 3.30859 9.07205 3.30859 7.03538C3.30859 4.99865 4.96565 3.33975 7 3.33975C9.03435 3.33975 10.6914 4.99865 10.6914 7.03538C10.6914 9.07205 9.03435 10.731 7 10.731ZM11.5117 3.33975C11.0605 3.33975 10.6914 2.97019 10.6914 2.5185C10.6914 2.06681 11.0605 1.69725 11.5117 1.69725C11.9629 1.69725 12.332 2.06681 12.332 2.5185C12.332 2.97019 11.9629 3.33975 11.5117 3.33975ZM7 4.31262C5.4168 4.31262 4.30769 5.45037 4.30769 7.03538C4.30769 8.62039 5.4168 9.70339 7 9.70339C8.5832 9.70339 9.69231 8.59302 9.69231 7.008C9.69231 5.42299 8.5832 4.31262 7 4.31262ZM7 4.31262C5.4168 4.31262 4.30769 5.45037 4.30769 7.03538C4.30769 8.62039 5.4168 9.70339 7 9.70339C8.5832 9.70339 9.69231 8.59302 9.69231 7.008C9.69231 5.42299 8.5832 4.31262 7 4.31262ZM7 4.31262C5.4168 4.31262 4.30769 5.45037 4.30769 7.03538C4.30769 8.62039 5.4168 9.70339 7 9.70339C8.5832 9.70339 9.69231 8.59302 9.69231 7.008C9.69231 5.42299 8.5832 4.31262 7 4.31262Z"
                      fill="url(#gradient)"
                    />
                  </svg>
                </button>
                <button className="bg-[#1C1C1C] social-button bg-gradient-to-br w-[26px] flex items-center justify-center rounded rounded-s text-yellow-300">
                  <svg
                    width="20"
                    height="10"
                    viewBox="0 0 20 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.0236 9.03107C19.0004 8.98532 18.9788 8.94738 18.9588 8.91697C18.6269 8.36931 17.9929 7.69707 17.0569 6.90008L17.0371 6.88183L17.0273 6.87288L17.0172 6.86371H17.0072C16.5823 6.49259 16.3133 6.24305 16.2006 6.1153C15.9945 5.87193 15.9484 5.62559 16.0611 5.376C16.1406 5.18742 16.4397 4.78916 16.9573 4.18069C17.2295 3.85821 17.4451 3.59976 17.6045 3.40505C18.753 2.00572 19.2509 1.11152 19.0981 0.722126L19.0389 0.63113C18.9989 0.57634 18.896 0.526223 18.7302 0.480516C18.5641 0.434905 18.3517 0.427363 18.0928 0.457759L15.2252 0.475913C15.1787 0.460828 15.1122 0.462234 15.0259 0.480516C14.9395 0.498799 14.8964 0.507972 14.8964 0.507972L14.8465 0.530826L14.8069 0.558284C14.7736 0.576435 14.7371 0.608373 14.6973 0.654013C14.6576 0.699496 14.6244 0.752876 14.5979 0.813702C14.2857 1.54983 13.9308 2.23425 13.5324 2.86692C13.2867 3.24418 13.0611 3.57113 12.8551 3.84796C12.6494 4.12469 12.4768 4.32857 12.3375 4.45928C12.1979 4.5901 12.0721 4.6949 11.9589 4.77408C11.8461 4.85328 11.7599 4.88674 11.7002 4.8745C11.6404 4.86227 11.5841 4.85012 11.5308 4.83798C11.4378 4.78319 11.3632 4.70868 11.3069 4.61439C11.2502 4.5201 11.2122 4.40143 11.1923 4.25845C11.1724 4.11539 11.1607 3.99232 11.1574 3.88887C11.1543 3.78553 11.1557 3.63937 11.1624 3.45078C11.1693 3.26211 11.1724 3.13445 11.1724 3.06752C11.1724 2.83631 11.1774 2.58536 11.1872 2.31464C11.1973 2.04391 11.2055 1.82941 11.2122 1.67138C11.219 1.5132 11.2221 1.34585 11.2221 1.16941C11.2221 0.992982 11.2104 0.85461 11.1872 0.75418C11.1644 0.653887 11.1293 0.556528 11.083 0.462137C11.0364 0.367849 10.9683 0.294908 10.8789 0.243129C10.7893 0.191413 10.6778 0.150373 10.5453 0.119881C10.1934 0.0469093 9.74533 0.00743558 9.20089 0.00129832C7.96621 -0.0108469 7.17287 0.0622199 6.82103 0.220404C6.68162 0.287238 6.55548 0.378555 6.44269 0.494069C6.32317 0.627964 6.30649 0.701031 6.39279 0.713051C6.79114 0.767735 7.07315 0.898557 7.23913 1.10539L7.29895 1.21499C7.34547 1.29406 7.39192 1.43406 7.43842 1.63479C7.48485 1.83551 7.51481 2.05756 7.52798 2.30079C7.56111 2.74499 7.56111 3.12521 7.52798 3.44152C7.49474 3.75795 7.46336 4.00428 7.43341 4.18071C7.40345 4.35715 7.35866 4.50012 7.29895 4.6096C7.23914 4.7191 7.19934 4.78603 7.1794 4.81032C7.15948 4.83461 7.14287 4.84992 7.1297 4.85593C7.04341 4.88624 6.95367 4.90167 6.86079 4.90167C6.76778 4.90167 6.65499 4.85903 6.52223 4.77383C6.38954 4.6886 6.25182 4.57156 6.10906 4.42248C5.96631 4.27338 5.80532 4.06501 5.62602 3.79735C5.44686 3.52971 5.26096 3.21337 5.06843 2.84836L4.90915 2.58363C4.80958 2.41333 4.67356 2.16537 4.50096 1.83996C4.32825 1.51442 4.17559 1.19952 4.04288 0.895329C3.98983 0.767578 3.91014 0.670313 3.80395 0.603377L3.75411 0.57593C3.72097 0.551638 3.66779 0.525839 3.59483 0.498352C3.52176 0.470896 3.44552 0.451207 3.36579 0.439092L0.637403 0.457247C0.358607 0.457247 0.16943 0.515133 0.069823 0.630741L0.0299589 0.685425C0.0100452 0.71589 0 0.764538 0 0.831495C0 0.898431 0.0199148 0.980573 0.0597789 1.07784C0.458072 1.93572 0.891207 2.76307 1.35918 3.56003C1.82716 4.357 2.23383 4.99897 2.57893 5.48538C2.9241 5.97214 3.27595 6.43154 3.63444 6.86335C3.99294 7.29533 4.23024 7.57216 4.34635 7.69377C4.46259 7.81562 4.5539 7.90672 4.62027 7.96754L4.86926 8.18651C5.02858 8.33256 5.26252 8.50745 5.57122 8.71122C5.87998 8.91513 6.22181 9.11582 6.59688 9.31369C6.97201 9.51131 7.40844 9.67247 7.90636 9.79717C8.40424 9.92197 8.88881 9.9721 9.36016 9.94791H10.5054C10.7375 9.92951 10.9134 9.86264 11.0331 9.74714L11.0727 9.70139C11.0993 9.66503 11.1243 9.60867 11.1473 9.53269C11.1706 9.45671 11.1822 9.37294 11.1822 9.28179C11.1754 9.0202 11.1971 8.78446 11.2468 8.57464C11.2965 8.36483 11.3529 8.20665 11.4163 8.10012C11.4795 7.99368 11.5509 7.90388 11.6303 7.83105C11.7098 7.75809 11.7666 7.71389 11.7999 7.69866C11.8329 7.68335 11.8593 7.67297 11.8792 7.66674C12.0385 7.6181 12.226 7.66521 12.4419 7.80829C12.6577 7.95127 12.8602 8.1278 13.0495 8.33761C13.2387 8.5476 13.466 8.78324 13.7315 9.04474C13.9972 9.30642 14.2295 9.50088 14.4284 9.62883L14.6275 9.73838C14.7605 9.81137 14.9331 9.87833 15.1456 9.93914C15.3577 9.99997 15.5436 10.0152 15.7031 9.9848L18.2521 9.94835C18.5042 9.94835 18.7003 9.91006 18.8395 9.83416C18.9791 9.7581 19.0618 9.67431 19.0886 9.58326C19.1152 9.49204 19.1167 9.38853 19.0936 9.27277C19.07 9.15736 19.0468 9.07664 19.0236 9.03107Z"
                      fill="url(#gradient)"
                    />
                  </svg>
                </button>
                <button className="bg-[#1C1C1C] social-button bg-gradient-to-br w-[26px] flex items-center justify-center rounded rounded-s text-yellow-300">
                  <svg
                    width="17"
                    height="12"
                    viewBox="0 0 17 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.3374 1.02816C15.7238 0.297886 14.5908 0 12.4272 0H4.5728C2.35955 0 1.20739 0.317102 0.596044 1.09458C0 1.85265 0 2.96958 0 4.51545V7.46187C0 10.4567 0.707202 11.9773 4.5728 11.9773H12.4272C14.3034 11.9773 15.3433 11.7144 16.016 11.0699C16.7058 10.4091 17 9.33001 17 7.46187V4.51545C17 2.8852 16.9539 1.76168 16.3374 1.02816ZM10.9141 6.39544L7.34747 8.26154C7.26774 8.30326 7.18054 8.32396 7.09345 8.32396C6.99485 8.32396 6.89648 8.29739 6.80934 8.24457C6.64526 8.14504 6.54506 7.967 6.54506 7.77496V4.05473C6.54506 3.86302 6.64498 3.68515 6.80874 3.58555C6.97254 3.48597 7.17626 3.47917 7.34621 3.56755L10.9128 5.42162C11.0943 5.51594 11.2082 5.70349 11.2085 5.9081C11.2087 6.11288 11.0953 6.30068 10.9141 6.39544Z"
                      fill="url(#gradient)"
                    />
                  </svg>
                </button>
                <button className="bg-[#1C1C1C] social-button bg-gradient-to-br w-[26px] flex items-center justify-center rounded rounded-s text-yellow-300">
                  <svg
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.2044 11.9999C16.1211 12.3036 16.0865 12.6163 15.9818 12.9149C15.9291 13.074 15.863 13.2291 15.7842 13.3785C15.4904 13.9119 15.0902 14.0875 14.4636 13.9605C14.0444 13.8755 13.677 13.6847 13.3326 13.4562C12.382 12.8253 11.3987 12.2411 10.4394 11.6207C10.407 11.6007 10.3746 11.5855 10.3422 11.5682C9.80798 11.1994 9.24684 10.8676 8.69834 10.5183C8.49261 10.3873 8.28914 10.2549 8.11516 10.0872C7.72185 9.70988 7.69917 9.35262 8.05199 8.94189C8.35783 8.58615 8.72393 8.28388 9.07643 7.97128C10.3976 6.79895 11.7487 5.65609 13.029 4.44396C13.1959 4.28568 13.3498 4.11556 13.5098 3.95121C13.6103 3.84792 13.6174 3.73278 13.5474 3.61522C13.4797 3.50221 13.3631 3.5101 13.2468 3.52195C13.1172 3.53502 13.0167 3.60489 12.9121 3.66625C11.6991 4.37469 10.5204 5.13417 9.33173 5.87877C8.23698 6.56442 7.14904 7.25919 6.0543 7.94455C5.60655 8.22495 5.12802 8.44003 4.58016 8.49137C4.13242 8.53269 3.70541 8.42818 3.27775 8.3337C2.63496 8.19123 2.0074 7.99801 1.3779 7.81149C1.04549 7.71275 0.71114 7.62526 0.401734 7.47337C0.26728 7.40714 0.135095 7.34091 0.0596062 7.19995C0.000889117 7.08931 -0.0150588 6.96298 0.0144838 6.84254C0.0440264 6.72209 0.117229 6.61499 0.221599 6.53951C0.61038 6.25364 1.06396 6.09507 1.50685 5.91097C2.09715 5.66277 2.69425 5.43493 3.28714 5.19493C4.0187 4.89934 4.74734 4.59829 5.47825 4.30239C6.8027 3.7665 8.12747 3.23173 9.45257 2.69807C10.7291 2.18163 12.0095 1.67247 13.2996 1.18549C14.2786 0.816083 15.2516 0.430268 16.2634 0.144097C16.6123 0.0456683 16.9661 -0.050026 17.3406 0.0295673C17.7991 0.127084 17.9293 0.312397 17.9854 0.74135C18.0304 1.08524 17.9604 1.42215 17.9251 1.76239C17.8665 2.33109 17.7809 2.89614 17.696 3.4615C17.512 4.68851 17.3073 5.91218 17.0934 7.13494C16.8329 8.62777 16.5627 10.1164 16.2715 11.6049C16.2697 11.6251 16.2697 11.6455 16.2715 11.6657C16.2543 11.7447 16.2371 11.824 16.2203 11.9029C16.2141 11.9342 16.2096 11.9664 16.2044 11.9999Z"
                      fill="url(#gradient)"
                    />
                  </svg>
                </button>
              </div>
            </section>
          </div>
        )}
      </nav>

      <div className="mt-3 md:mt-0 h-px w-full bg-gradient-to-r from-transparent via-white to-transparent"></div>
      <div className="hidden md:block bg-[#2c2c2c] w-full ">
        <nav className="md:max-w-[1170px] m-auto md:px-4">
          <ul className="pt-[14px] flex gap-x-12 justify-left">
            <li>
              <a>{t("Advertising")}</a>
            </li>
            <li>
              <a>{t("Development")}</a>
            </li>
            <li>
              <a>{t("social-networks")}</a>
            </li>
            <li>
              <a>{t("Design")}</a>
            </li>
            <li>
              <a>{t("Telephony")}</a>
            </li>
            <li>
              <a>{t("CRM Systems")}</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
