"use client";

import Image from "next/image";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import * as yup from "yup";
import { useFormik } from "formik";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const basicSchema = yup.object().shape({
  name: yup
    .string()
    .max(15, "! Must be 15 characters or less")
    .required("! Required field"),
  email: yup
    .string()
    .email("! Enter the correct email address")
    .required("! Required field"),
  message: yup.string().required("! Required field"),
});

const ContactForm = () => {
  const formRef = useRef();

  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);

  const {
    values,
    handleChange,
    touched,
    handleBlur,
    handleSubmit,
    errors,
    isValid,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: basicSchema,
    onSubmit: (values, { resetForm }) => {
      setSending(true);

      const recaptchaValue = formRef.current["g-recaptcha-response"].value;

      if (!recaptchaValue) {
        setSending(false);
        setError(false);
        setSuccess(false);
        setCaptchaError(true);
        return;
      }

      emailjs
        .sendForm(
          "service_lyiw33m",
          "template_q1gdp1x",
          formRef.current,
          "aKZuUw2Oseva1iRsh"
        )
        .then(
          (result) => {
            setSending(false);
            setError(false);
            setSuccess(true);
            resetForm();
          },
          (error) => {
            setSending(false);
            setError(true);
            setSuccess(false);
          }
        );
    },
  });

  return (
    <div className="mt-16">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col max-w-[600px]">
          <span className="text-4xl font-medium">Contact me</span>
          <span className="text-[#9c9b9b] font-medium">
            You can contact me on social networks, as well as there you will
            find up-to-date information about releases
          </span>
          <div className="flex flex-col in:flex-row gap-4 mt-8">
            <a
              target="_blank"
              href="https://www.instagram.com/tellmynumber/"
              className="flex items-center gap-2 border-2 border-[#4c4b4b] hover:border-white hover:scale-110 transition duration-300 ease-in-out p-3 rounded-lg cursor-pointer"
            >
              <Image
                src="/SocialsLinks/icon-instagram.png"
                width={30}
                height={30}
                alt="instagram image"
              />
              <span>Instagram</span>
            </a>
            <a
              target="_blank"
              href="https://soundcloud.com/talllorenc"
              className="flex items-center gap-2 border-2 border-[#4c4b4b] hover:border-white hover:scale-110 transition duration-300 ease-in-out p-3 rounded-lg cursor-pointer"
            >
              <Image
                src="/SocialsLinks/icon-soundcloud.png"
                width={30}
                height={30}
                alt="soundcloud image"
              />
              <span>SoundCloud</span>
            </a>
            <a
              target="_blank"
              href="#"
              className="flex items-center gap-2 border-2 border-[#4c4b4b] hover:border-white hover:scale-110 transition duration-300 ease-in-out p-3 rounded-lg cursor-pointer"
            >
              <Image
                src="/SocialsLinks/icon-youtube.png"
                width={30}
                height={30}
                alt="youtube image"
              />
              <span>YouTube</span>
            </a>
          </div>
        </div>
        <div className="w-full">
          <form
            method="POST"
            className="flex flex-col gap-8 flex-1"
            id="contactForm"
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <div className="relative">
              {errors.name && touched.name && (
                <span className="absolute right-4 top-2.5 font-bold text-red-500 text-center text-[14px]">
                  {errors.name}
                </span>
              )}
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                className={
                  errors.name && touched.name
                    ? "w-full border-red-500 focus:outline-none border-2 border-danger bg-black p-2 rounded-xl"
                    : "focus:z-10 focus:border-[#F75380] focus:outline-none focus:ring-[#F75380] w-full border-2 border-[#8c8b8b] bg-black p-2 rounded-xl"
                }
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <label for="name" className="text-xs text-[#8c8b8b]">
                <span className="text-red-600 text-lg mr-1">*</span>
                Maximum 15 characters
              </label>
            </div>
            <div className="relative">
              {errors.email && touched.email && (
                <span className="absolute right-4 top-2.5 font-bold text-danger text-red-500 text-[14px]">
                  {errors.email}
                </span>
              )}
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Your email"
                className={
                  errors.email && touched.email
                    ? "w-full border-red-500 focus:outline-none border-2 border-danger bg-black p-2 rounded-xl"
                    : "focus:z-10 focus:border-[#F75380] focus:outline-none focus:ring-[#F75380] w-full border-2 border-[#8c8b8b] bg-black p-2 rounded-xl"
                }
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <label for="email" className="text-xs text-[#8c8b8b]">
                <span className="text-red-600 text-lg mr-1">*</span>
                Required field
              </label>
            </div>
            <div className="relative">
              {errors.message && touched.message && (
                <span className="absolute right-4 top-[25px] font-bold text-red-500 text-center text-[14px]">
                  {errors.message}
                </span>
              )}
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                className={
                  errors.message && touched.message
                    ? "w-full border-red-500 resize-none focus:outline-none border-2 border-danger bg-black p-2 rounded-xl"
                    : "focus:z-10 resize-none focus:border-[#F75380] focus:outline-none focus:ring-[#F75380] w-full border-2 border-[#8c8b8b] bg-black p-2 rounded-xl"
                }
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              ></textarea>
              <label for="message" className="text-xs text-[#8c8b8b]">
                <span className="text-red-600 text-lg mr-1">*</span>
                Required field
              </label>
            </div>
            <ReCAPTCHA
              sitekey="6LdnSWQpAAAAALUyIfCA2c8yvFBW_wP0MK1FtkBB"
              onChange={(value) => {
                setCaptchaError(false);
              }}
            />
            <div className="flex justify-between items-center">
              <div>
                <span className="text-red-600 text-lg mr-1">*</span>- required
                fields
              </div>
              <button
                type="submit"
                className={`flex border-2 border-[#f75380] bg-[#f75380] ml-auto px-7 py-1 rounded-lg text-lg transistion duration-300 ease-in-out font-medium hover:border-white ${
                  sending ? "cursor-not-allowed opacity-50" : ""
                }`}
                disabled={sending}
              >
                {sending ? (
                  <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden"></span>
                  </div>
                ) : (
                  "Send"
                )}
              </button>
            </div>
          </form>
          <div className="flex items-center justify-center mt-4">
            {captchaError ? (
              <p className="flex gap-1 items-center text-red-600 dark:text-red-500 py-1 px-2 w-fit text-lg rounded-md bg-red-100 dark:bg-red-950 border border-red-600 dark:border-red-500">
                Go through the captcha, please
              </p>
            ) : null}
            {success && !sending ? (
              <p className="flex gap-1 items-center text-green-600 dark:text-green-500 py-1 px-2 w-fit text-lg rounded-md bg-green-100 dark:bg-green-950 border border-green-600 dark:border-green-500">
                The message has been sent successfully
              </p>
            ) : null}
            {error && !sending ? (
              <p className="flex gap-1 items-center text-red-600 dark:text-red-500 py-1 px-2 w-fit text-lg rounded-md bg-red-100 dark:bg-red-950 border border-red-600 dark:border-red-500">
                The message has not been sent, please try again later
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
