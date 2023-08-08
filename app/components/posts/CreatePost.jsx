"use client";
import { useAddPost } from "@/app/hooks/posts";
// import React from 'react'
// import { useForm } from 'react-hook-form'
// import {useState } from "react";
// import { uploadBytes, getDownloadURL } from "firebase/storage";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { storage } from '../../lib/firebase';

import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../lib/firebase";

const CreatePost = () => {
  const { register, handleSubmit, reset } = useForm();
  const { addPost, isLoading } = useAddPost();

  const [modalOpen, setModalOpen] = useState(false);

  const handleAddPost = async (data) => {
    console.log(data);

    let imageUrl = null;

    if (data.image && data.image.length > 0) {
      // Create a reference for the file
      const fileRef = ref(storage, `posts/${data.image[0].name}`);

      // Upload the file
      await uploadBytes(fileRef, data.image[0]);

      // Get the download URL of the file
      imageUrl = await getDownloadURL(fileRef);
    }

    // addPost(data)
    addPost({
      title: data.title,
      content: data.content,
      img: imageUrl,
    });
    reset();
    setModalOpen(false);
  };

  return (
    <div className="flex justify-center ">
      <div className="bg-white text-black mt-20">
        <button className="btn mb-5" onClick={() => setModalOpen(true)}>
          Add New Post
        </button>

        <dialog
          id="my_modal_3"
          className={`modal ${modalOpen ? "modal-open" : ""}`}>
          <form
            className="flex flex-col gap-4 modal-box"
            onSubmit={handleSubmit(handleAddPost)}>
            <button
              onClick={() => setModalOpen(false)}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>

            <h3 className="font-bold text-2xl mb-10 text-center">
              Add New Post
            </h3>

            <div className="flex flex-col">
              <label htmlFor="title">Title</label>
              <input
                name="title"
                className="input input-bordered mb-5 text-lg"
                {...register("title")}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="content">Content</label>
              <textarea
                name="content"
                {...register("content")}
                className="textarea textarea-bordered text-lg mb-5"
              />
            </div>

            <div>
              <label htmlFor="content">Image</label>
              <input type="file" {...register("image")} />
            </div>

            <input type="submit" className="btn btn-primary" />
          </form>
        </dialog>
      </div>
    </div>
  );
};

export default CreatePost;
