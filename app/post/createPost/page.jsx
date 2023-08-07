'use client'
import { useAddPost } from '@/app/hooks/posts'
import React from 'react'
import { useForm } from 'react-hook-form'

const CreatePost = () => {
  const { register, handleSubmit, reset } = useForm()
  const { addPost, isLoading } = useAddPost()

  const handleAddPost = (data) => {
    console.log(data)
    addPost(data)
    reset()
  }

  return (
    <div className="flex justify-center mt-10 ">
      <div className="bg-white text-black mt-20">
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(handleAddPost)}
        >
          <div>
            <label htmlFor="title">Title</label>
            <input name="title" className="" {...register('title')} />
          </div>
          <div>
            <label htmlFor="content">Content</label>
            <input name="content" {...register('content')} />
          </div>
          {/* <div>
            <label htmlFor="content">Image</label>
            <input type="file" {...register('image')} />
          </div> */}
          <input
            type="submit"
            className="p-4 cursor-pointer bg-slate-200 hover:bg-slate-100 duration-500"
          />
        </form>
      </div>
    </div>
  )
}

export default CreatePost
