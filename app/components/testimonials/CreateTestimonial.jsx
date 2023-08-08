
import { useAddTestimonial } from "@/app/hooks/testimonials";

import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../lib/firebase";



const CreateTestimonial = () => {
  const { register, handleSubmit, reset } = useForm();
  const { addTestimonial, isLoading } = useAddTestimonial();

  const [modalOpen, setModalOpen] = useState(false);



  const handleAddTestimonial = async (data) => {
    console.log(data);

    let avatarUrl = null;

    if (data.image && data.image.length > 0) {
      // Create a reference for the file
      const fileRef = ref(storage, `testimonials/${data.image[0].name}`);

      // Upload the file
      await uploadBytes(fileRef, data.image[0]);

      // Get the download URL of the file
      avatarUrl = await getDownloadURL(fileRef);
    }

    // addPost(data)
    addTestimonial({
      name: data.name,
      companyName: data.companyName,
      testimonial:data.testimonial,
      img: avatarUrl || "",
    });


    reset();
    setModalOpen(false);
  };


  return (
    <div className="flex justify-center ">
      <div className="bg-white text-black">
        <button className="btn mb-5" onClick={() => setModalOpen(true)}>
          Add New Testimonial
        </button>

        <dialog
          id="my_modal_3"
          className={`modal ${modalOpen ? "modal-open" : ""}`}>
          <form
            className="flex flex-col gap-4 modal-box"
            onSubmit={handleSubmit(handleAddTestimonial)}>
            <button
              onClick={() => setModalOpen(false)}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>

            <h3 className="font-bold text-2xl mb-10 text-center">
              Add New Testimonial
            </h3>

            <div className="flex flex-col">
              <label htmlFor="title">Name</label>
              <input
                name="name"
                className="input input-bordered mb-5 text-lg"
                {...register("name")}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="title">Company Name</label>
              <input
                name="companyName"
                className="input input-bordered mb-5 text-lg"
                {...register("companyName")}
              />
            </div>


            <div className="flex flex-col">
              <label htmlFor="content">Testimonial Text</label>
              <textarea
                name="testimonial"
                {...register("testimonial")}
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
}

export default CreateTestimonial
