import { useEffect, useState } from "react";
import BlogCards from "./BlogCards";

const Blog = () => {
  useEffect(() => {
    document.title = "Blog | Gadget Heaven";
  });

  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("../../blogData.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const authModal = (id) => {
    const modalBlog = blogs.find(data => data.id === id)
    const { photo, date, author, category, description, title, post } = modalBlog;
    document.getElementById("modalDetailsBlog").innerHTML = `
    <figure>
        <img src='${photo}' class="w-96 h-56 rounded-xl" />
      </figure>
    <h3 class="font-bold text-lg">${title}</h3>
          <div class="flex justify-between items-center">
          <div class="font-medium">
            <strong>By: </strong>
            ${author}
          </div>
          <ul class="text-sm opacity-80 list-disc">
            <li>${date}</li>
          </ul>
          </div>
          <p>${post}</p>
    `
    document.getElementById("detailsModal").showModal()
  }

  return (
    <div>
      <div className="bg-purple-600 text-center place-content-start py-8">
        <h3 className="text-3xl font-bold text-white mb-4">Gadget Blog</h3>
        <p className="mb-8 text-white px-8 lg:px-0 max-w-[48rem] mx-auto font-light text-base">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      <div className="grid  grid-cols-3 gap-5 px-12 py-10">
        {
            blogs.map(blog => <BlogCards key={blog.id} 
            blog={blog} 
            authModal={authModal}>
            </BlogCards>)
        }
      </div>
      <dialog id="detailsModal" className="modal">
        <div className="modal-box">
          <div id="modalDetailsBlog" className="px-8 space-y-4">
            
          </div>
          <div className="modal-action justify-center">
      <form method="dialog">
        <button className="btn">Close</button>
      </form>
    </div>
        </div>
      </dialog>
    </div>
  );
};

export default Blog;
