"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { fetchBeats } from "@/redux/slices/beats";
import { selectIsAuth } from "@/redux/slices/auth";

const DeleteBeatForm = () => {
  const [error, setError] = useState(null);
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const { beats, tags } = useSelector((state) => state.beats);

  useEffect(() => {
    dispatch(fetchBeats());
  }, []);

  const handleDelete = async (beatId) => {
    try {
      setError(null);

      if (!isAuth) {
        throw new Error("Вы не авторизованы");
      }

      const token = localStorage.getItem("token");
      const response = await fetch(
        `http://localhost:8080/beat/delete/${beatId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(
          `Ошибка при удалении из избранного. Код: ${response.status}`
        );
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="">
      {!beats.items.length ? (
        <p className="text-lg font-medium">Not a single bit has been added yet</p>
      ) : (
        <div className="flex flex-col gap-2">
          {error && <p className="text-red-500">{error}</p>}
          <p className="text-lg font-bold uppercase">Delete Beat</p>
          {beats.items.map((obj) => (
            <div
              key={obj._id}
              className="flex justify-between gap-16 items-center border border-[#151719] rounded-md p-4"
            >
              <div className="flex items-center gap-2">
                <Image
                  src="/test2.jpeg"
                  alt="beat cover"
                  width={50}
                  height={50}
                  className="rounded-lg border border-[#2c2b2b]"
                />
                <p className="text-lg overflow-hidden whitespace-nowrap overflow-ellipsis font-medium">
                  {obj.title}
                </p>
              </div>
              <Image
                src="/adminPanel/cancel.png"
                alt="delete beat image"
                width={30}
                height={30}
                className="bg-red-500 border-2 border-red-500 rounded-lg p-1 hover:border-white cursor-pointer"
                onClick={() => handleDelete(obj._id)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DeleteBeatForm;
