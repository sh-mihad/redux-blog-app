import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleBlog } from "../../redux/fetures/singleBlog/singleBlogSlice";
import MainContent from "./MainContent";
import RelatedBlogs from "./RelatedBlogs";
import SingleBlogHeader from "./SingleBlogHeader";

export default function SingleBlog() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { blog } = useSelector((state) => state.blog);
  useEffect(() => {
    dispatch(fetchSingleBlog(id));
  }, [dispatch, id]);
  return (
    <>
      <SingleBlogHeader />
      <section className="post-page-container">
        <MainContent blog={blog} />

        <RelatedBlogs blog={blog} id={id} />
      </section>
    </>
  );
}
