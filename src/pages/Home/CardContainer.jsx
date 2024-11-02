import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import { fetchBlogs } from "../../redux/fetures/blogs/blogsSlice";
import blogSort from "../../utils/sort";
import Card from "./Card";

export default function CardContainer() {
  const { blogs, loading, error } = useSelector((state) => state.blogs);
  const { sort } = useSelector((state) => state.sort);
  const { filter } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogs(filter));
  }, [dispatch, filter]);

  let content = null;
  let blogsArr = null;
  if (blogs?.length > 0 || sort === "newest") {
    blogsArr = blogSort(blogs, sort);
  } else {
    blogsArr = blogs;
  }
  if (loading) {
    content = <Loading />;
  }

  if (!loading && !error && blogs?.length <= 0) {
    content = <div>No Blog Found</div>;
  }
  if (!loading && !error && blogs?.length > 0) {
    content = blogsArr?.map((blog) => <Card key={blog.id} blog={blog} />);
  }
  if (!loading && error && blogs?.length <= 0) {
    content = <Error>{error}</Error>;
  }
  return (
    <main className="post-container" id="lws-postContainer">
      {content}
    </main>
  );
}
