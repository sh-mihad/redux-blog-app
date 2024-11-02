import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function BlogCard({ blog }) {
  const { image, title, tags, id, createdAt } = blog || {};
  return (
    <div className="card">
      <Link to={`/blog/${id}`}>
        <img src={image} className="card-image" alt="" />
      </Link>
      <div className="p-4">
        <Link
          to={`/blog/${id}`}
          className="text-lg post-title lws-RelatedPostTitle"
        >
          {title}
        </Link>
        <div className="mb-0 tags">
          {tags?.map((item) =>
            tags.length - 1 ? (
              <span key={item}>#{item}</span>
            ) : (
              <span key={item}>#{item}</span>
            )
          )}
        </div>
        <p>{createdAt}</p>
      </div>
    </div>
  );
}
