import React, { useState, Fragment } from "react";
import axios from "axios";
import classNames from "classnames";
import styles from "./DropdownList.module.css";
import { faq } from "./utils/constants";
import { useTranslation } from "react-i18next";
import { Dialog, Transition } from "@headlessui/react";
import close from "../assets/close-icon.svg";

export default function DropdownList() {
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
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    return setSelected(i);
  };

  return (
    <div className="px-4 md:pb-[160px] pb-[87px]">
      <h3 className="md:leading-9 md:text-[32px] mb-9 font-['Plateia'] text-left uppercase md:normal-case text-2xl max-w-[300px] md:max-w-full leading-normal">
        {t("we-help")}
      </h3>{" "}
      <ul className={styles.questionsContainer}>
        {faq().map((item, i) => (
          <li
            className={
              selected === i
                ? classNames(styles.questionsItem, styles.questionsItemActive)
                : styles.questionsItem
            }
            key={item.question}
          >
            <div className={styles.questionsHeader} onClick={() => toggle(i)}>
              <div className="flex gap-4 items-center">
                <span className="text-[#838383]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className={styles.questionsQuestion}>{item.question}</p>
              </div>
              <div
                className={
                  selected === i
                    ? classNames(
                        styles.questionsArrow,
                        styles.questionsArrowActive
                      )
                    : styles.questionsArrow
                }
              />
            </div>
            <div
              className={
                selected === i
                  ? classNames(
                      styles.questionsAnswer,
                      styles.questionsAnswerActive
                    )
                  : styles.questionsAnswer
              }
            >
              {/* {selected === i && (
                <div className="h-16 sm:h-[119px] md:h-[154px]">
                  <img
                    loading="lazy"
                    src={item.backgroundImage}
                    alt="описание изображения"
                    className={styles.backgroundImage}
                  ></img>
                </div>
              )} */}

              <div
                className={
                  (selected === i
                    ? classNames(
                        styles.questionsAnswer,
                        styles.questionsAnswerActive
                      )
                    : styles.questionsAnswer,
                  "h-16 sm:h-[119px] md:h-[154px]")
                }
              >
                <img
                  loading="lazy"
                  src={item.backgroundImage}
                  alt="описание изображения"
                  className={styles.backgroundImage}
                ></img>{" "}
              </div>
              <p
                className={
                  (selected === i
                    ? classNames(
                        styles.questionsAnswer,
                        styles.questionsAnswerActive
                      )
                    : styles.questionsAnswer,
                  "mt-5")
                }
              >
                {item.answer}
              </p>

              <button
                className={
                  (selected === i
                    ? classNames(
                        styles.questionsAnswer,
                        styles.questionsAnswerActive
                      )
                    : styles.questionsAnswer,
                  "mt-5 mb-5 w-full")
                }
              >
                <div
                  onClick={openModal}
                  className="flex items-center justify-center main-button"
                >
                  <span>{t("send-request")}</span>
                </div>
              </button>

              {/* {selected === i && (
                <button type="submit" className="mt-5 mb-5 w-full">
                  <div className="flex items-center justify-center main-button">
                    <span>{t("send-request")}</span>
                  </div>
                </button>
              )} */}
            </div>
          </li>
        ))}
      </ul>
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
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          <Dialog.Panel className="flex flex-col px-5 pb-5 pt-2.5 max-w-sm rounded-lg bg-[#2c2c2c] z-20">
            <button onClick={closeModal} className="w-9 h-9 -mr-3 p-0 self-end">
              <img src={close} loading="lazy" />
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
