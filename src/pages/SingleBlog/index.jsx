import MainContent from "./MainContent";
import RelatedBlogs from "./RelatedBlogs";
import SingleBlogHeader from "./SingleBlogHeader";

export default function SingleBlog() {
  return (
    <>
      <SingleBlogHeader />
      <section className="post-page-container">
        <MainContent />

        <RelatedBlogs />
      </section>
    </>
  );
}
