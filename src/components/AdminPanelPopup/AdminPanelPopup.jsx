"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AddBeatForm from "./AddBeatForm";
import DeleteBeatForm from "./DeleteBeatForm";
import UpdateBeatForm from "./UpdateBeatForm";

const AdminPanelPopup = ({ closePopup, isPopupOpen, popupType }) => {
  useEffect(() => {
    function handleEscapeKey(e) {
      if (e.key === "Escape") {
        closePopup();
      }
    }

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  });

  return (
    <div>
      <AnimatePresence>
        {isPopupOpen && (
          <motion.div
            className="fixed p-2 top-0 left-0 w-full h-screen bg-black bg-opacity-70 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={closePopup}
          >
            <motion.div
              className="flex flex-col gap-4 items-center border-2 border-[#F75380] rounded-lg p-4 bg-black"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closePopup}
                className="flex border font-medium border-[#8c8b8b] bg-[#3c3b3b] p-1 rounded-lg ml-auto"
              >
                Esc
              </button>
              <div className="">
                {popupType === 'add' && <AddBeatForm/>}
                {popupType === 'delete' && <DeleteBeatForm/>}
                {popupType === 'update' && <UpdateBeatForm/>}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminPanelPopup;
