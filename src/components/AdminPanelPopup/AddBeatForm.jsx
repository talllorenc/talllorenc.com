"use client";

import React, { useRef } from "react";
import { useFormik } from "formik";
import { useState } from "react";


const AddBeatForm = () => {
  const inputFileRef = useRef(null);
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
      title: "",
      bpm: "",
      price: "",
      tags: "",
      imageUrl: "",
    },
    onSubmit: async (values) => {
      try {
        setIsLoading(true);

        const formDataWithImageUrl = {
          ...values,
          imageUrl: imageUrl,
        };

        const response = await fetch("http://localhost:8080/beat/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`, 
          },
          body: JSON.stringify(formDataWithImageUrl),
        });

        if (!response.ok) {
          throw new Error("Failed to create beat");
        }

        console.log("Beat created successfully!");
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    },
  });

  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append("image", file);

      const response = await fetch("http://localhost:8080/beat/upload", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to upload file");
      }

      const data = await response.json();
      setImageUrl(data.url);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <p className="text-lg font-bold uppercase">Add Beat</p>
      <form
        method="POST"
        onSubmit={handleSubmit}
        className="p-2 min-w-[300px] space-y-6 flex flex-col items-center"
      >
        <div className="relative w-full ">
          {errors.title && touched.title && (
            <span className="absolute right-4 top-2.5 font-bold text-rose-500 text-center text-[14px]">
              {errors.title}
            </span>
          )}
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Title"
            className={
              errors.title && touched.title
                ? "w-full border-red-500 focus:outline-none border-2 border-rose bg-black p-2 rounded-full"
                : "focus:z-10 focus:border-[#F75380] focus:outline-none focus:ring-[#F75380] w-full border-2 border-[#8c8b8b] bg-black p-2 rounded-full"
            }
            onBlur={handleBlur}
            value={values.title}
            onChange={handleChange}
          />
        </div>

        <div className="relative w-full">
          {errors.bpm && touched.bpm && (
            <p className="absolute right-4 top-2.5 font-bold text-rose-500 text-center text-[14px]">
              {errors.bpm}
            </p>
          )}
          <input
            id="bpm"
            name="bpm"
            type="text"
            placeholder="Bpm"
            className={
              errors.bpm && touched.bpm
                ? "w-full border-red-500 focus:outline-none border-2 border-rose bg-black p-2 rounded-full"
                : "focus:z-10 focus:border-[#F75380] focus:outline-none focus:ring-[#F75380] w-full border-2 border-[#8c8b8b] bg-black p-2 rounded-full"
            }
            onBlur={handleBlur}
            value={values.bpm}
            onChange={handleChange}
          />
        </div>

        <div className="relative w-full">
          {errors.price && touched.price && (
            <p className="absolute right-4 top-2.5 font-bold text-rose-500 text-center text-[14px]">
              {errors.price}
            </p>
          )}
          <input
            id="price"
            name="price"
            type="text"
            placeholder="Price"
            className={
              errors.price && touched.price
                ? "w-full border-red-500 focus:outline-none border-2 border-rose bg-black p-2 rounded-full"
                : "focus:z-10 focus:border-[#F75380] focus:outline-none focus:ring-[#F75380] w-full border-2 border-[#8c8b8b] bg-black p-2 rounded-full"
            }
            onBlur={handleBlur}
            value={values.price}
            onChange={handleChange}
          />
        </div>

        <div className="relative w-full">
          {errors.tags && touched.tags && (
            <p className="absolute right-4 top-2.5 font-bold text-rose-500 text-center text-[14px]">
              {errors.tags}
            </p>
          )}
          <input
            id="tags"
            name="tags"
            type="text"
            placeholder="Tags"
            className={
              errors.tags && touched.tags
                ? "w-full border-red-500 focus:outline-none border-2 border-rose bg-black p-2 rounded-full"
                : "focus:z-10 focus:border-[#F75380] focus:outline-none focus:ring-[#F75380] w-full border-2 border-[#8c8b8b] bg-black p-2 rounded-full"
            }
            onBlur={handleBlur}
            value={values.tags}
            onChange={handleChange}
          />
        </div>

        <div className="relative w-full">
          <input
            onChange={handleChangeFile}
            ref={inputFileRef}
            id="imageUrl"
            name="imageUrl"
            type="file"
            placeholder="ImageUrl"
            className="focus:z-10 focus:border-[#F75380] focus:outline-none focus:ring-[#F75380] w-full border-2 border-[#8c8b8b] bg-black p-2 rounded-full"
          />
        </div>
        <button
          type="submit"
          className="bg-[#F75370] border-2 border-[#F75370] p-1 w-[130px] rounded-lg hover:border-white"
        >
          Add beat
        </button>
      </form>
    </div>
  );
};

export default AddBeatForm;
