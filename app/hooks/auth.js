"use client";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../lib/firebase";
import { useSignOut } from "react-firebase-hooks/auth";

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

export function useLogout() {
  const [signOut, isLoading, error] = useSignOut(auth);
  async function logout() {
    if (await signOut()) {
      console.log("logged out.");
    } else {
      return false;
    }
  }
  return { logout, isLoading };
}
