"use client";

import HeaderPage from "@/app/header/page";
import BeatsSection from "./beatsSection/page";
import LicensingPage from "./licensing/page";
import ContactPage from "./contact/page";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthMe, selectIsAuth, selectUserRole } from "@/redux/slices/auth";
import { useEffect } from "react";
import AdminPage from "./admin/page";

export default function Home() {
  const dispatch = useDispatch();
  const userRole = useSelector(selectUserRole);
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    dispatch(fetchAuthMe(token));
  }, []);

  return (
    <div className="flex flex-1 flex-col">
      {userRole === "admin" && <AdminPage/>}
      <HeaderPage />
      <BeatsSection />
      <LicensingPage />
      <ContactPage />
    </div>
  );
}
