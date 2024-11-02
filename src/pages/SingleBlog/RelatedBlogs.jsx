import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedBlogs } from "../../redux/fetures/realatedBlogs/realetdBlogSlice";
import BlogCard from "./BlogCard";
// eslint-disable-next-line react/prop-types
export default function RelatedBlogs({ blog, id }) {
  const { relatedBlogs } = useSelector((state) => state.relatedBlogs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchRelatedBlogs({
        tags: blog?.tags,
        id,
      })
    );
  }, [dispatch, blog, id]);
  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      <div className="space-y-4 related-post-container">
        {relatedBlogs?.map((item) => (
          <BlogCard key={item.id} blog={item} />
        ))}
      </div>
    </aside>
  );
}
