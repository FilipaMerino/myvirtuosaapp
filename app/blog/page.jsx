'use client'
import React from 'react'
import Posts from '../components/posts/Posts'
import { auth } from '../lib/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Spinner from '../components/Spinner'

const Blog = () => {
  const [user, loading, error] = useAuthState(auth)

  if (loading) return <Spinner />

  return (
    <div>
      {user && <button>add post</button>}

      <Posts />
    </div>
  )
}

export default Blog
