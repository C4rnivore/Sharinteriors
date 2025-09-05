"use client";

import "./css/Popup.css";
import {
  emailJSpublicKey,
  emailJStemplateID,
  emailJSserviceID,
  mailTo,
} from "@/lib/constants/constants";
import { useTranslation } from "react-i18next";
import { useMask } from "@react-input/mask";
import { FormEvent, useState } from "react";
import { Div } from "@/lib/types/types";

import contactIcon from "@/assets/design/Arrow 47.svg";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import NavLink from "@/components/routing/NavLink";
import Image from "next/image";

function Popup() {
  const { t } = useTranslation();
  const [sender, setSender] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [phone, setPhone] = useState<string | null>(null);
  const [mail, setMail] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [validName, setValidName] = useState<boolean>(true);
  const [validPhone, setValidPhone] = useState<boolean>(true);
  const phoneInput = useMask({
    mask: "+ _ (___) ___ - __ - __",
    replacement: { _: /\d/ },
  });

  const handlePopupBgClick = (e: React.MouseEvent<Element, MouseEvent>) => {
    if (
      e.target instanceof HTMLElement &&
      e.target.className === "popup-wrapper popup-show"
    ) {
      const wrapper: Div = document.querySelector(".popup-wrapper");
      wrapper && wrapper.classList.remove("popup-show");
    }
  };

  const handleFormSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!checkValidFields()) {
      toast.error(t("form-error"));
      return;
    }
    setIsPending(true);
    const messageParams = {
      subject: "Shareinteriors",
      sender: sender,
      message: message,
      to: mailTo,
      contact_phone: phone,
      contact_email: mail ? mail : "",
    };
    sendMail(messageParams);
  };

  const checkValidFields = () => {
    let valid = true;
    if (!sender) {
      setValidName(false);
      valid = false;
    } else setValidName(true);

    if (!phone) {
      setValidPhone(false);
      valid = false;
    } else setValidPhone(true);

    return valid;
  };

  const sendMail = (messageParams: any) => {
    emailjs
      .send(emailJSserviceID, emailJStemplateID, messageParams, {
        publicKey: emailJSpublicKey,
      })
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        toast.success(t("form-success"));
        closeForm();
        setIsPending(false);
      })
      .catch((err) => {
        console.log("FAILED...", err);
        toast.error(t("server-error"));
        setIsPending(false);
      });
  };

  const closeForm = () => {
    const wrapper = document.querySelector(".popup-wrapper");
    wrapper && wrapper.classList.remove("popup-show");
  };

  return (
    <div className="popup-wrapper" onClick={handlePopupBgClick}>
      <form className="popup-form" onSubmit={handleFormSend}>
        <div className="popup-inner">
          <label htmlFor="name">
            {!validName ? t("popup-name") + "*" : t("popup-name")}
          </label>
          <input
            name="name"
            onChange={(e) => setSender(e.target.value)}
            placeholder={t("form-field-name")}
            type="text"
          />

          <label htmlFor="tel">
            {!validPhone ? t("popup-tel") + "*" : t("popup-tel")}
          </label>
          <input
            ref={phoneInput}
            name="tel"
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+ X (XXX) XXX - XX - XX"
            type="tel"
          />

          <label htmlFor="email">e-mail</label>
          <input
            name="email"
            onChange={(e) => setMail(e.target.value)}
            placeholder={t("form-field-email")}
            type="email"
          />

          <label htmlFor="comm">{t("popup-comm")}</label>
          <input
            name="comm"
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t("form-field-comment")}
            type="text"
          />

          <button type="submit" disabled={isPending}>
            <span>{isPending ? t("popup-sending") : t("popup-send")}</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export const initPopup = (e: React.MouseEvent<Element, MouseEvent>) => {
  const wrapper = document.querySelector(".popup-wrapper");
  if (!wrapper) return;

  const form = wrapper.childNodes[0] as HTMLElement;
  const x = e.clientX;
  const y = e.clientY;

  wrapper.classList.add("popup-show");
  form.style.left = `${x}px`;
  form.style.top = `${y}px`;
};

export const PopupInitBtn = () => {
  const { t } = useTranslation();

  return (
    <div onClick={initPopup} className={"popup-initer"}>
      <span>{t("contact-us")}</span>
      <div className="contact-icon-wrapper">
        <Image src={contactIcon} width={19} height={19} alt="" />
        {/* <img src={contactIcon} alt="" /> */}
      </div>
    </div>
  );
};

export default Popup;
