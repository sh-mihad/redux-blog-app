/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch } from "react-redux";
import { editBlogs } from "../../redux/fetures/singleBlog/singleBlogSlice";
export default function MainContent({ blog }) {
  const { id, title, description, image, tags, likes, isSaved, createdAt } =
    blog || {};
  const dispatch = useDispatch();
  const handleSaved = (blog) => {
    const modifiedBlogData = { ...blog, isSaved: !blog.isSaved };
    dispatch(editBlogs(modifiedBlogData));
  };
  const handleLike = (blog) => {
    const modifiedBlogData = { ...blog, likes: blog.likes + 1 };
    dispatch(editBlogs(modifiedBlogData));
  };
  return (
    <main className="post">
      <img
        src={image}
        alt={title}
        className="w-full rounded-md"
        id="lws-megaThumb"
      />
      <div>
        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
          {title}
        </h1>
        <div className="tags" id="lws-singleTags">
          {tags?.map((item) =>
            tags.length - 1 ? (
              <span key={item}>#{item}</span>
            ) : (
              <span key={item}>#{item}</span>
            )
          )}
        </div>
        <div className="btn-group">
          <button
            onClick={() => handleLike(blog)}
            className="like-btn"
            id="lws-singleLinks"
          >
            <i className="fa-regular fa-thumbs-up"></i> {likes}
          </button>

          <button
            className={`${isSaved && "active"} save-btn`}
            id="lws-singleSavedBtn"
            onClick={() => handleSaved(blog)}
          >
            <i className="fa-regular fa-bookmark"></i> Saved
          </button>
        </div>
        <div className="mt-6">
          <p>{description}</p>
        </div>
      </div>
    </main>
  );
}
