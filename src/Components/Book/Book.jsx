import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Book = ({ book }) => {
  const { bookId, bookName, author, image, rating, category, tags } = book;

  return (
    <Link to={`/book/${bookId}`}>
      <div className="card w-[450px] bg-base-100 shadow-xl book-card">
        <figure>
          <img className="rounded-xl" src={image} alt={bookName} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {bookName}
            {tags.map((tag) => (
              <div key={bookId} className="badge badge-secondary">
                {tag}
              </div>
            ))}
          </h2>
          <p className="">By: {author}</p>
          <div className="card-actions justify-between my-3">
            <div className="badge badge-outline p-5">{category}</div>
            <div className="badge badge-outline p-5">{rating}</div>
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
