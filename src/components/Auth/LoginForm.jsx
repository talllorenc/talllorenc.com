"use client";

import Link from "next/link";
import * as yup from "yup";
import { useFormik } from "formik";
import SocialAuth from "@/components/SocialAuth/SocialAuth";

const basicSchema = yup.object().shape({
  login: yup.string().required("! Required field"),
  password: yup.string().required("! Required field"),
});

const onSubmit = async (values) => {
  try {

  } catch (error) {
    console.error("Ошибка:", error);
  }
};

const LoginForm = ({ closePopup }) => {
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
      login: "",
      password: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col">
        <div className="text-xl p-2">
          <span className="">Log in to your account</span>
        </div>
        <form
          method="POST"
          onSubmit={handleSubmit}
          className="p-2 min-w-[300px] space-y-6 flex flex-col items-center"
        >
          <div className="relative w-full ">
            {errors.login && touched.login && (
              <span className="absolute right-4 top-2.5 font-bold text-rose-500 text-center text-[14px]">
                {errors.login}
              </span>
            )}
            <input
              id="login"
              name="login"
              type="text"
              placeholder="Login"
              className={
                errors.login && touched.login
                  ? "w-full border-red-500 focus:outline-none border-2 border-rose bg-black p-2 rounded-full"
                  : "focus:z-10 focus:border-[#F75380] focus:outline-none focus:ring-[#F75380] w-full border-2 border-[#8c8b8b] bg-black p-2 rounded-full"
              }
              onBlur={handleBlur}
              value={values.login}
              onChange={handleChange}
            />
          </div>

          <div className="relative w-full">
            {errors.password && touched.password && (
              <p className="absolute right-4 top-2.5 font-bold text-rose-500 text-center text-[14px]">
                {errors.password}
              </p>
            )}
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              className={
                errors.password && touched.password
                  ? "w-full border-red-500 focus:outline-none border-2 border-rose bg-black p-2 rounded-full"
                  : "focus:z-10 focus:border-[#F75380] focus:outline-none focus:ring-[#F75380] w-full border-2 border-[#8c8b8b] bg-black p-2 rounded-full"
              }
              onBlur={handleBlur}
              value={values.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-between w-full">
            <button
              type="submit"
              className="bg-[#F75370] border-2 border-[#F75370] p-1 w-[130px] rounded-lg hover:border-white"
            >
              Log in
            </button>
            <Link
              onClick={closePopup}
              href="/register"
              className="text-center border-[2px] border-[#F75370] p-1 w-[130px] rounded-lg hover:bg-[#F75370]"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
      <SocialAuth />
    </div>
  );
};
export default LoginForm;
