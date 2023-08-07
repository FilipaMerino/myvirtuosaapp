import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  orderBy,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";

import { uuidv4 } from "@firebase/util";
import { db } from "../lib/firebase";
import { useState } from "react";

import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";

// create new post
export function useAddPost() {
  const [isLoading, setLoading] = useState(false);

  async function addPost(post) {
    setLoading(true);
    const id = uuidv4();
    await setDoc(doc(db, "posts", id), {
      ...post,
      id,
      date: Date.now(),
    });

    setLoading(false);
  }
  return { addPost, isLoading };
}

// Get all posts
export function usePosts() {
  const q = query(collection(db, "posts"), orderBy("date", "desc"));
  const [posts, isLoading, error] = useCollectionData(q);
  if (error) throw error;
  return { posts, isLoading };
}
