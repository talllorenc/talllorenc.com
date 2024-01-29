"use client"
import * as yup from "yup";
import {useFormik} from "formik";
import SocialAuth from "@/components/SocialAuth/SocialAuth";

const passwordRules = /[!@#$%^&*()_+={}[\]:;<>,.?~\\/-]/;
const loginRules = /^[A-Za-z0-9]+$/;

const basicSchema = yup.object().shape({
    email: yup
        .string()
        .email("! Invalid format"),
    login: yup
        .string()
        .min(6, "! Minimum of 6 characters")
        .matches(loginRules, {message: "! Latin characters"})
        .required("! Required field"),
    password: yup
        .string()
        .min(6, "! Minimum of 6 characters")
        .matches(passwordRules, {
            message: "! Special character",
        })
        .required("! Required field"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "! Passwords don't match")
        .required("! Required field"),
});

const onSubmit = async (values, actions) => {
    try {
      const response = await fetch('http://localhost:8080/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          login: values.login,
          name: values.name,
          position: values.position,
          password: values.password,
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Ошибка регистрации:', errorData.message);
        return;
      }
  
      const userData = await response.json();
  
      localStorage.setItem('token', userData.token);
      localStorage.setItem('user', JSON.stringify(userData));
  
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

const RegisterForm = () => {
    const {values, handleChange, touched, handleBlur, handleSubmit, errors} =
        useFormik({
            initialValues: {
                email: "",
                login: "",
                password: "",
                confirmPassword: "",
            },
            validationSchema: basicSchema,
            onSubmit,
        });

    return (
        <div className="flex flex-col items-center gap-8">
            <form method="POST" onSubmit={handleSubmit} className="mt-4 min-w-[300px] space-y-6 flex flex-col items-center">
                <div className="relative w-full">
                    {errors.email && touched.email && (
                        <span className="absolute right-4 top-2.5 font-bold text-rose-500 text-center text-[14px]">
                            {errors.email}
                        </span>
                    )}
                    <input
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Email"
                        className="focus:z-10 focus:border-[#F75380] focus:outline-none focus:ring-[#F75380] w-full border-2 border-[#8c8b8b] bg-black p-2 rounded-full"
                        onBlur={handleBlur}
                        value={values.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="relative w-full">
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
                    <label form="login" className="text-xs text-[#8c8b8b]">
                        <span className="text-red-600 text-lg mr-1">*</span>
                        Login length is at least 6 characters
                    </label>
                </div>
                <div className="relative w-full">
                    {errors.password && touched.password && (
                        <span className="absolute right-4 top-2.5 font-bold text-rose-500 text-center text-[14px]">
                            {errors.password}
                        </span>
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
                    <label form="password" className="text-xs text-[#8c8b8b]">
                        <span className="text-red-600 text-lg mr-1">*</span>
                        Minimum 6 characters and a special character
                    </label>
                </div>
                <div className="w-full relative">
                    {errors.confirmPassword && touched.confirmPassword && (
                        <span className="absolute right-4 top-2.5 font-bold text-rose-500 text-center text-[14px]">
                            {errors.confirmPassword}
                        </span>
                    )}
                    <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                        className={
                            errors.confirmPassword && touched.confirmPassword
                                ? "w-full border-red-500 focus:outline-none border-2 border-rose bg-black p-2 rounded-full"
                                : "focus:z-10 focus:border-[#F75380] focus:outline-none focus:ring-[#F75380] w-full border-2 border-[#8c8b8b] bg-black p-2 rounded-full"
                        }
                        onBlur={handleBlur}
                        value={values.confirmPassword}
                        onChange={handleChange}
                    />
                    <label form="password" className="text-xs text-[#8c8b8b]">
                        <span className="text-red-600 text-lg mr-1">*</span>
                        Please remember the password
                    </label>
                </div>
                <div className="flex justify-between w-full items-center">
                    <button type="submit"
                            className="border-[2px] border-[#F75370] p-1 w-[130px] rounded-lg hover:bg-[#F75380]">
                        Register
                    </button>
                    <span>
                        <span className="text-red-600 text-lg mr-1">*</span>
                        - required fields
                    </span>
                </div>
            </form>
            <SocialAuth/>
        </div>
    )
};

export default RegisterForm;