import { useState, Fragment } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Dialog, Transition } from "@headlessui/react";

// import planet from "../assets/application-planet.svg";
function Application() {
  const { t } = useTranslation();
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
    <div className="md:flex md:mt-10 px-4 pb-[79px] relative md:overflow-hidden md:gap-x-[110px]">
      <div className="max-w-[670px]">
        <h3 className="min-w-[300px] max-w-[670px] md:leading-[131%] md:text-[32px] mt-4 mb-5 z-10 relative font-['Plateia'] text-left uppercase md:normal-case text-2xl leading-normal">
          {t("where-to-start")}
        </h3>
        <p className="leading-5 text-left max-w-[345px] md:max-w-[480px]">
          {t("we-audit")}
        </p>
      </div>
      {/* <img
        src={planet}
        style={{ overflowBlock: "hidden" }}
        className="md:hidden absolute translate-y-[55%] translate-x-[30%]"
      /> */}
      <form onSubmit={handleSubmit} className="flex flex-col mt-6 md:w-[370px]">
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
            <div className="fixed inset-0 bg-black/25" />
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
                <Dialog.Panel className="w-full max-w-sm md:max-w-[370px] transform overflow-hidden rounded-lg bg-[#2c2c2c] p-8 text-left align-middle shadow-xl transition-all">
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
    </div>
  );
}

export default Application;
