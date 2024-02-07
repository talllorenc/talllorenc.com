import LoginForm from "@/components/Auth/LoginForm";
import {useEffect} from "react";
import {motion, AnimatePresence} from "framer-motion"

const Popup = ({closePopup, isPopupOpen}) => {
    useEffect(() => {
        function handleEscapeKey(e) {
            if (e.key === 'Escape') {
                closePopup();
            }
        }

        document.addEventListener('keydown', handleEscapeKey)
        return () => document.removeEventListener('keydown', handleEscapeKey)
    }, [])

    return (
        <AnimatePresence>
            {isPopupOpen && (
                <motion.div
                    className="fixed p-2 top-0 left-0 w-full h-screen bg-black bg-opacity-70 flex justify-center items-center"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.15}}
                    onClick={closePopup}
                >
                    <motion.div
                        className="flex flex-col gap-4 items-center min-w-[300px] border-2 border-[#F75380] rounded-lg p-4 bg-black"
                        initial={{opacity: 0, scale: 0.7}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 0.2}}
                        exit={{ scale: 0.9, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button onClick={closePopup}
                                className="flex border font-medium border-[#8c8b8b] bg-[#3c3b3b] p-1 rounded-lg ml-auto">
                            Esc
                        </button>
                        <div className="flex flex-col text-center border-b-2 border-[#8c8b8b] w-[250px]">
                            <span className="font-bold text-xl text-[#F75380]">TALLLORENC</span>
                            <span className="text-md text-[#9c9b9b] uppercase">welcome to sad fun</span>
                        </div>
                        <LoginForm closePopup={closePopup}/>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Popup;
