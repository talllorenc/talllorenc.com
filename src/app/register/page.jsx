"use client";
import RegisterForm from "@/components/Auth/RegisterForm";

const RegisterPage = () => {
  return (
      <div className="flex flex-col justify-center items-center mt-24 p-4">
        <span className="text-4xl font-bold">Registration</span>
        <span className="mt-8 mb-8 text-[#8c8b8b] text-center">
          Register to be able to add your tracks to the Records section. The
          contact information will only be used to place orders and work with
          the site more conveniently. I am glad to welcome you to my little
          world of sad fun
        </span>
        <RegisterForm />
      </div>
  );
};

export default RegisterPage;
