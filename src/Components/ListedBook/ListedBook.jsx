import PropTypes from "prop-types";
import { HiPaperClip } from "react-icons/hi2";
import { IoLocationOutline, IoPeopleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
const ListedBook = ({ book }) => {
  const {
    bookId,
    bookName,
    image,
    author,
    category,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;
  return (
    <div className="w-[60%] mx-auto">
      <div className="card lg:card-side bg-base-100 shadow-xl my-5">
        <figure className="h-auto overflow-hidden">
          <img className="h-60 rounded-xl" src={image} alt={bookName} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <p>By : {author}</p>
          <div className="flex">
            <p className="font-bold">
              Tag :
              {tags.map((tag) => (
                <div
                  key={bookId}
                  className="badge badge-secondary ml-3 font-normal"
                >
                  #{tag}
                </div>
              ))}
            </p>
            <p className="flex items-center">
              <IoLocationOutline />{" "}
              <span className="mx-2">
                {" "}
                Year of Publishing {yearOfPublishing}
              </span>
            </p>
          </div>
          <div className="flex">
            <p className="flex items-center">
              <IoPeopleSharp />
              <span className="mx-2">Publisher : {publisher}</span>
            </p>
            <p className="flex items-center">
              <HiPaperClip />
              <span className="mx-2">Pages : {totalPages}</span>
            </p>
          </div>
          <hr />
          <div className="card-actions justify-start my-3">
            <p className="p-4 bg-yellow-500 rounded-3xl text-center text-black">
              Category : {category}
            </p>
            <p className="p-4 bg-blue-500 rounded-3xl text-center text-black">
              Rating : {rating}
            </p>
            <Link to={`/book/${bookId}`}>
              <p className="p-4 bg-green-500 rounded-3xl text-center text-black">
                View Details
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

ListedBook.propTypes = {
  book: PropTypes.object,
};

export default ListedBook;
