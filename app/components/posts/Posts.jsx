"use client";

import CreatePost from "./CreatePost";

import { usePosts, useDeletePost } from "@/app/hooks/posts";
import React from "react";
import Spinner from "../Spinner";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsTrash3Fill } from "react-icons/bs";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/lib/firebase";

const Posts = () => {
  const [user, loading, error] = useAuthState(auth);
  const { deletePost, isLoading: deletePostsLoading } = useDeletePost();
  const { posts, isLoading: postsIsLoading } = usePosts();

  if (postsIsLoading) return <Spinner />;

  const handleDeleteClick = (id) => {
    deletePost(id);
  };

  return (
    <div className="flex flex-col items-center p-10 mx-10 overflow-hidden">
      {/* (user && (<CreatePost />)) */}

      <div className="mb-10">{user && <CreatePost />}</div>

      {posts.map((post) => (
        <div className="mb-10" key={post.id}>
          <div className=" flex flex-col items-center w-[30rem] lg:w-[40rem] lg:mb-10">
            <h3 className="text-xl lg:text-3xl mb-10 text-center w-64 lg:w-full">
              {post.title}
            </h3>

            <Link href={`/blog/${post.id}`}>
              <img src={post.img} alt="post" className="hover:brightness-90 transition-all duration-200 w-[40rem] mb-5 rounded-lg"/>
            </Link>
            <div className="w-[25rem] md:w-full">
              <p className="text-md mb-5 text-start lg:text-justify md:w-full">
                {post.content.substring(0, 180) + "..."}
              </p>

              <div className="flex justify-between">
                <div className="flex justify-start items-center ">
                  <Link
                    href={`/blog/${post.id}`}
                    className="flex items-center text-sm hover:text-[#fb653e]">
                    <p className="text-sm hover:text-[#fb653e]">Learn More</p>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="flex ml-2 text-sm  md:w-2"
                    />
                  </Link>

                  {/* <a
                    href={post.href}
                    className="text-xs hover:underline hover:text-[#fb653e]">
                    Learn More
                  </a>
                  <a href={post.href}>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="flex ml-2 text-sm  md:w-2"
                    />
                  </a> */}
                </div>

                <div className="flex justify-end">
                  {user && (
                    <button onClick={() => handleDeleteClick(post.id)}>
                      <BsTrash3Fill className="hover:text-[#fb653e]" />
                    </button>
                  )}
                </div>
              </div>
              <hr className="horizontalLineBlog w-full mt-5"></hr>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
