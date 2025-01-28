import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

const Blog = () => {
  return (
    <section id="blog" className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Our Portfolio"
          paragraph=""
          center
        />
        <div className="flex justify-center">
          {/* just change the grid back to 3 on xl screen, when we have enough project to showcase */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-2 max-w-[900px] w-full">
            {blogData.map((blog) => (
              <div key={blog.id} className="w-full">
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
