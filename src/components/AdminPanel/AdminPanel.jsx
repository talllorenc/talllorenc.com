"use client";

import Image from "next/image";
import { useState } from "react";
import AdminPanelPopup from "../AdminPanelPopup/AdminPanelPopup";

const AdminPanel = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupType, setPopupType] = useState(null);

  const togglePopup = (type) => {
    setPopupType(type);
    setIsPopupOpen(!isPopupOpen);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="border-2 border-[#2c2b2b] p-4 shadow-inner">
      <div className="container flex flex-col">
        <p className="px-4 py-2 text-lg uppercase font-bold border-b border-[#4c4b4b]">
          Administration panel
        </p>
        <div className="flex">
          <div className="flex gap-8 text-[#d6dfe2] font-medium mt-4 border-r-2 border-dashed border-[#4c4b4b] px-4">
            <button
              className="px-4 py-2 hover:bg-[#4c4b4b] rounded-lg flex flex-col items-center gap-1 admin-panel-btn"
              onClick={() => togglePopup("add")}
            >
              <Image
                src="/adminPanel/add.png"
                width={40}
                height={40}
                alt="add beat image"
              />
              Add beat
            </button>
            <button
              className="px-4 py-2 hover:bg-[#4c4b4b] rounded-lg flex flex-col items-center gap-1 admin-panel-btn"
              onClick={() => togglePopup("delete")}
            >
              <Image
                src="/adminPanel/delete.png"
                width={40}
                height={40}
                alt="delete beat image"
              />
              Delete beat
            </button>
          </div>
        </div>
      </div>
      <AdminPanelPopup
        isPopupOpen={isPopupOpen}
        closePopup={closePopup}
        popupType={popupType}
      />
    </div>
  );
};

export default AdminPanel;
