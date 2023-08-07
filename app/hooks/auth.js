"use client";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../lib/firebase";

export function useLogin() {
  const [isLoading, setLoading] = useState(false);

  async function login({ email, password }) {
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("logged in.");
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }
  return { login, isLoading };
}
