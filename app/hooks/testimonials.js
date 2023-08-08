import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  orderBy,
  query,
  setDoc,
  updateDoc,
  deleteDoc
} from "firebase/firestore";

import { uuidv4 } from "@firebase/util";
import { db } from "../lib/firebase";
import { useState } from "react";


import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";


// create new Testimonial
export function useAddTestimonial() {
  const [isLoading, setLoading] = useState(false);

  async function addTestimonial(testimonial) {
    setLoading(true);
    const id = uuidv4();
    await setDoc(doc(db, "testimonials", id), {
      ...testimonial,
      id,
      date: Date.now(),
    });

    setLoading(false);
  }
  return { addTestimonial, isLoading };
}



// Get All Testimonials

export function useTestimonials() {
  const q = query(collection(db, "testimonials"), orderBy("date", "desc"));
  const [testimonials, isLoading, error] = useCollectionData(q);
  if (error) throw error;
  return { testimonials, isLoading };
}



//Delete Testimonials

export function useDeleteTestimonial() {
  const [isLoading, setLoading] = useState(false);

  async function deleteTestimonial(id) {
    const res = window.confirm("Are you sure you want to delete this Testimonial?");
    if (res) {

      setLoading(true);
      await deleteDoc(doc(db, "testimonials", id));
      setLoading(false);

    }
  }

  return {deleteTestimonial, isLoading}
}
