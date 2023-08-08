'use client'
import React from 'react'
import Posts from '../components/posts/Posts'
import { auth } from '../lib/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Spinner from '../components/Spinner'
import Link from "next/link"

const Blog = () => {
  const [user, loading, error] = useAuthState(auth)

  if (loading) return <Spinner />

  return (
    <div className='mt-o'>
      <Posts />
    </div>
  )
}

export default Blog






