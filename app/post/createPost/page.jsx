'use client'
import { useAddPost } from '@/app/hooks/posts'
import React from 'react'
import { useForm } from 'react-hook-form'
import {useState } from "react";




const CreatePost = () => {

  const { register, handleSubmit, reset } = useForm()
  const { addPost, isLoading } = useAddPost()


  const [modalOpen, setModalOpen] = useState(false);

  const handleAddPost = (data) => {
    console.log(data)
    addPost(data)
    reset()
  }

  return (
    <div className="flex justify-center mt-10 ">
      <div className="bg-white text-black mt-20">


      <button className="btn mb-5" onClick={() => setModalOpen(true)}>
          Add New Post
      </button>


      <dialog
        id="my_modal_3"
        className={`modal ${modalOpen ? "modal-open" : ""}`}>




        <form
          className="flex flex-col gap-4 modal-box"
          onSubmit={handleSubmit(handleAddPost)}
        >
          <button
            onClick={() => setModalOpen(false)}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>

          <h3 className="font-bold text-2xl mb-10 text-center">Add New Post</h3>


          <div className="flex flex-col">
            <label htmlFor="title">Title</label>
            <input name="title" className="input input-bordered mb-5 text-lg" {...register('title')} />
          </div>
          <div className="flex flex-col">
            <label htmlFor="content">Content</label>
            <input name="content" {...register('content')} className="textarea textarea-bordered text-lg mb-5" />
          </div>


          {/* <div>
            <label htmlFor="content">Image</label>
            <input type="file" {...register('image')} />
          </div> */}


          
          <input
            type="submit"
            className="btn btn-primary"
          />



        </form>
</dialog>
      </div>
    </div>
  )
}

export default CreatePost
