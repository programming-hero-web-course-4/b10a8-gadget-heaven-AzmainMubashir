const BlogCards = ({ blog,authModal }) => {
  const { id, photo, date, author, category, description, title, post } = blog;

  const handleDetails = (id) => {
    authModal(id);
  }

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={photo} className="w-96 h-56" />
      </figure>
      <div className="card-body">
        <div
          className={
            "badge bg-opacity-10 text-sm font-medium badge-outline border-purple-600 text-purple-600 bg-purple-600"
          }
        >
          {category}
        </div>
        <h2 className="text-lg font-bold">{title}</h2>
        <div className="flex justify-between items-center">
          <div className="font-medium">
            <strong>By: </strong>
            {author}
          </div>
          <ul className="text-sm opacity-80 list-disc">
            <li>{date}</li>
          </ul>
        </div>
        <p className="text-sm">
          <strong>Description: </strong> {description}
        </p>
        <div className="card-actions justify-start">
          <button onClick={() => handleDetails(id)} 
          className="btn bg-purple-600 text-white font-bold rounded-r-full rounded-l-full">More Details</button>
        </div>
      </div>
    </div>
  );
};

export default BlogCards;
