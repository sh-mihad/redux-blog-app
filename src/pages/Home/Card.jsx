/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

export default function Card({ blog }) {
  const { id, title, description, image, tags, likes, isSaved, createdAt } =
    blog || {};

  return (
    <div className="lws-card">
      <Link to={`blog/${id}`}>
        <img src={image} className="lws-card-image" alt="" />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt}</p>
          <p className="lws-likeCount">
            <i className="fa-regular fa-thumbs-up"></i>
            {likes}
          </p>
        </div>
        <Link  to={`blog/${id}`} className="lws-postTitle">
          {title}
        </Link>
        <div className="lws-tags">
          {tags?.map((item) =>
            tags.length - 1 ? <span key={item}>#{item}</span> : <span key={item}>#{item}</span>
          )}
        </div>

      {
        isSaved &&   <div className="flex flex-wrap gap-2 mt-4 ">
        <span className="lws-badge"> Saved </span>
      </div>
      }
      </div>
    </div>
  );
}
