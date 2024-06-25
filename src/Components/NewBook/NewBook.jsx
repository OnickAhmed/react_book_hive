import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const NewBook = ({ book }) => {
  const { bookId, bookName, author, yearOfPublishing } = book;

  return (
    <Link to={`/book/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <div className="flex my-5">
            <p>Author: <span className="mx-3">{author}</span> <span>|</span></p>
            <p>Year: <span className="ml-3">{yearOfPublishing}</span></p>
          </div>
          <div className="card-actions justify-start">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

NewBook.propTypes = {
  book: PropTypes.object,
};

export default NewBook;
