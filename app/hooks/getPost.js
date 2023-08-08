import { db } from "@/app/lib/firebase";
import { getDoc, doc } from "firebase/firestore";

export async function getPostById(id) {
  const postDoc = await getDoc(doc(db, "posts", id));

  if (postDoc.exists()) {
    return postDoc.data();
  } else {
    return null;
  }
}
