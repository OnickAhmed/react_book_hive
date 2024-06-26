import PropTypes from "prop-types";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const Book = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    yearOfPublishing,
  } = book;

  return (
    <Link to={`/book/${bookId}`}>
      <div className="card w-[400px] bg-base-100 shadow-xl book-card p-5 m-5">
        <figure className="h-auto overflow-hidden">
          <img className="h-48 rounded-xl" src={image} alt={bookName} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <p>
            {tags.map((tag) => (
              <div key={bookId} className="badge badge-secondary mr-3">
                #{tag}
              </div>
            ))}
          </p>
          <p className="">By: {author}</p>
          <div className="card-actions justify-between my-3">
            <div className="badge badge-outline p-5">{category}</div>
            <div className="badge badge-outline p-5">
              {rating} <span className="mx-1"></span> <FaRegStar />
            </div>
          </div>
          <div>
            {yearOfPublishing > 1999 && (
              <p className="badge badge-outline p-4">New</p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

Book.propTypes = {
  book: PropTypes.object,
};

export default Book;
