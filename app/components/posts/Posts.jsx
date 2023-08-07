'use client'
import { usePosts } from '@/app/hooks/posts'
import React from 'react'
import Spinner from '../Spinner'

const Posts = () => {
  const { posts, isLoading } = usePosts()
  if (isLoading) return <Spinner />

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  )
}

export default Posts
