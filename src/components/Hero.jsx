import {useState, Fragment} from "react";
import axios from "axios";
import magic from "../assets/hero-magic.svg";
import close from "../assets/close-icon.svg";
import { useTranslation } from "react-i18next";
import { ReactTyped } from "react-typed";
import { Dialog, Transition } from "@headlessui/react";

function Hero() {
  const [recipient_email, setEmail] = useState(
    localStorage.getItem("recipient_email")
  );
  const [subject, setSubject] = useState(localStorage.getItem("subject"));
  const [message, setMessages] = useState(localStorage.getItem("message"));
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isChecked) {
      sendMail();
      resetForm();
    }
  };

  function resetForm() {
    setEmail("");
    setSubject("");
    setMessages("");
    setIsChecked(false);
  }

  function sendMail() {
    console.log("Sending Email");

    if (recipient_email && subject && message) {
      localStorage.setItem("recipient_email", recipient_email);
      localStorage.setItem("subject", subject);
      localStorage.setItem("message", message);

      axios
        .post("https://send-email-indol.vercel.app/api/feedback", {
          name: recipient_email,
          phone: subject,
          message: message,
        })
        .then(() => openSuccessModal())
        .catch((err) => console.log(err, "Oppssy daisssy"));
      return;
    }
    return console.log("Fill in all the fields to continue");
  }

  const { t } = useTranslation();
  let [isOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
    // Disable scrolling on the body when the dialog is open
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    setIsOpen(false);
    // Enable scrolling on the body when the dialog is closed
    document.body.style.overflow = "auto";
  }

  let [isSuccessOpen, setIsSuccessOpen] = useState(false);
  function openSuccessModal() {
    setIsSuccessOpen(true);
    // Disable scrolling on the body when the dialog is open
    document.body.style.overflow = "hidden";
  }
  function closeSuccessModal() {
    setIsSuccessOpen(false);
    // Enable scrolling on the body when the dialog is closed
    document.body.style.overflow = "auto";
  }

  return (
      <>
      <div
          className="relative mt-8 flex flex-col px-4 pb-[75px] md:mt-40 md:grid md:grid-cols-2 md:items-start md:gap-x-8">
        <div className="z-10 flex max-w-[540px] flex-col items-start text-left text-white md:col-start-1 md:row-start-1">
        <h1 className="font-[Plateia] text-[26px] font-normal uppercase leading-[1.15] tracking-wide text-white whitespace-pre-line md:text-[42px] md:leading-[1.31]">
          {t("comprehensive-solutions")}
        </h1>
        <div className="hero-typed mt-2 min-h-[1.5rem] text-left text-sm font-normal normal-case leading-snug text-white md:mt-5 md:min-h-[2rem] md:text-xl md:leading-6">
          <ReactTyped
              strings={[
                t("in-marketing"),
                t("in-brand"),
                t("in-product"),
                t("in-analytics"),
                t("in-design"),
              ]}
              typeSpeed={45}
              backSpeed={28}
              backDelay={1800}
              loop
              smartBackspace
              showCursor
              cursorChar="|"
          />
        </div>
        </div>
        <div className="mx-auto mt-96 flex w-fit max-w-[352px] flex-row items-center justify-center gap-3 px-0 text-left text-white md:hidden">
            <img
                src={magic}
                alt=""
                className="h-[30px] w-[37px] shrink-0 object-contain"
                width={37}
                height={30}
                loading="lazy"
            />
            <p className="w-[267px] font-[Helvetica] text-left text-[11px] font-normal leading-[1.2] text-white">
              {t("get-system-solution")}
            </p>
        </div>
          <div className="mt-5 flex w-full justify-center md:hidden">
            <button type="button" onClick={openModal} className="w-full max-w-[339px]">
              <div className="main-button button-shadow flex min-h-[50px] items-center justify-center px-4">
                <span>{t("get-audit")}</span>
              </div>
            </button>
          </div>
        <div className="z-10 hidden w-full max-w-[540px] flex-col text-left text-white md:col-start-1 md:row-start-2 md:mt-12 md:flex md:items-start">
        <div className="mt-3 flex w-full max-w-[320px] flex-row items-start gap-3 md:mt-0 md:items-start md:gap-4">
          <img
              src={magic}
              alt=""
              className="mt-0.5 h-[30px] w-[37px] shrink-0 object-contain md:mt-[2px] md:h-8 md:w-10"
              width={37}
              height={30}
              loading="lazy"
          />
          <p className="w-[267px] font-[Helvetica] text-left text-xs font-normal leading-4 text-white md:flex-none">
            {t("get-system-solution")}
          </p>
        </div>
        <div className="mt-5 flex w-full justify-center md:mt-6 md:justify-start">
          <button type="button" onClick={openModal} className="w-full max-w-[339px]">
            <div className="main-button button-shadow flex min-h-[50px] items-center justify-center px-4">
              <span>{t("get-audit")}</span>
            </div>
          </button>
        </div>
        </div>
      </div>
        <Transition
            show={isOpen}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
            as={Fragment}
        >
          <Dialog
              open={isOpen}
              onClose={() => setIsOpen(false)}
              className="fixed inset-0 z-20 flex items-center justify-center"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true"/>
            <Dialog.Panel className="flex flex-col px-5 pb-5 pt-2.5 max-w-sm rounded-lg bg-[#2c2c2c] z-20">
              <button onClick={closeModal} className="w-9 h-9 -mr-3 p-0 self-end">
                <img src={close} loading="lazy"/>
              </button>
              <Dialog.Title>
                Оставьте заявку, что бы мы могли вам перезвоинть
              </Dialog.Title>
              <form
                  onSubmit={handleSubmit}
                  className="flex flex-col mt-6 max-w-sm md:max-w-[370px]"
              >
                <div className="flex flex-col gap-[10px]">
                  <input
                      placeholder={t("name")}
                      type="text"
                      id="message"
                      value={message}
                      required
                      onChange={(e) => setMessages(e.target.value)}
                      className="pl-5 border-[#B7B7B7] bg-transparent border rounded-[4px] h-[50px]"
                  ></input>
                  <input
                      placeholder={t("tel")}
                      type="tel"
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                      className="pl-5 border-[#B7B7B7] bg-transparent border rounded-[4px] h-[50px]"
                  ></input>
                  <input
                      placeholder="E-mail"
                      type="email"
                      id="email"
                      value={recipient_email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="pl-5 border-[#B7B7B7] bg-transparent border rounded-[4px] h-[50px]"
                  ></input>
                </div>
                <button type="submit" className="mt-5 mb-5 w-full">
                  <div className="main-button flex items-center justify-center">
                    <span>{t("send")}</span>
                  </div>
                </button>
                <div className="flex items-start gap-5">
                  <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                      className="checked:bg-[#987642]  checkbox-input mt-[3px] appearance-none min-w-4 h-4 border-[3px] border-[2C2C2B] rounded-sm "
                  ></input>
                  <p className="mt-0 text-xs text-left">
                    {t("i-confirm")}{" "}
                    <span className="font-bold underline">
                    <a
                        href="https://jvsqvggfg1pilypd.public.blob.vercel-storage.com/%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0%20%D0%B2%20%D0%BE%D1%82%D0%BD%D0%BE%D1%88%D0%B5%D0%BD%D0%B8%D0%B8%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8%20%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85%20%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85-2jCFI8pxSwd4boriXQ0iO2GQVrZxti.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      {t("privacy-policy")}
                    </a>
                  </span>{" "}
                    {t("i-consent")}
                  </p>
                </div>
              </form>
            </Dialog.Panel>
          </Dialog>
        </Transition>

        <Transition appear show={isSuccessOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50" onClose={closeSuccessModal}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25"/>
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center text-center">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel
                      className="w-full max-w-sm md:max-w-[370px] transform overflow-hidden rounded-lg bg-[#2c2c2c] p-8 text-left align-middle shadow-xl transition-all">
                    <div>
                      <p>Спасибо за заявку, наш менеджер свяжется с вами </p>
                    </div>

                    <div>
                      {/* <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeSuccessModal}
                    >
                      Понятно
                    </button> */}

                      <button
                          type="button"
                          onClick={closeSuccessModal}
                          className="mt-6 w-full"
                      >
                        <div className="main-button flex items-center justify-center">
                          <span>{t("Ok")}</span>
                        </div>
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
  );
}

export default Hero;
