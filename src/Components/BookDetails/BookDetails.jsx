import toast, { Toaster } from "react-hot-toast";
import { useLoaderData, useParams } from "react-router-dom";
import {
  saveReadBookList,
  saveWishlistBookList,
} from "../../Utility/LocalStorage";
import { localStorageIdCheck } from "../../Utility/HelperFunctions";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const book = books.find((book) => book.bookId === id);
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    rating,
    category,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
  } = book;

  const handleListedBooks = (id, listType) => {
    if (listType == "read") {
      if (!localStorageIdCheck(id.toString(), "readBookList", "check")) {
        toast.success("Added to Read list");
        saveReadBookList(id);
        if (localStorageIdCheck(id.toString(), "wishlistBookList", "check")) {
          localStorageIdCheck(id.toString(), "wishlistBookList", "delete");
        }
      } else {
        toast.error("You already added this book to Read list");
      }
    } else if (listType == "wish") {
      if (!localStorageIdCheck(id.toString(), "readBookList", "check")) {
        if (!localStorageIdCheck(id.toString(), "wishlistBookList", "check")) {
          toast.success("Added to Wishlist");
          saveWishlistBookList(id);
        } else {
          toast.error("You already added this book to Wish list");
        }
      } else {
        toast.error("You already added this book to Read list");
      }
    }
  };

  return (
    <div className="card lg:card-side bg-base-100 h-[500px] shadow-xl">
      <figure className="h-auto overflow-hidden my-5">
        <img
          className="h-full object-contain rounded-xl"
          src={image}
          alt={author}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{bookName}</h2>
        <p>By: {author}</p>
        <hr />
        <p>{category}</p>
        <hr />
        <p>
          <span className="font-bold">Review: </span> {review}
        </p>
        <p>
          <span className="font-bold mr-3">Tags: </span>
          {tags.map((tag) => (
            <div
              key={bookId}
              className="badge badge-accent badge-outline mr-3 p-3"
            >
              # {tag}
            </div>
          ))}
        </p>
        <hr />
        <p>
          Number of Pages: <span className="font-bold">{totalPages}</span>
        </p>
        <p>
          Publisher: <span className="font-bold">{publisher}</span>
        </p>
        <p>
          Year of Publishing:{" "}
          <span className="font-bold">{yearOfPublishing}</span>
        </p>
        <p>
          Rating: <span className="font-bold">{rating}</span>
        </p>
        <div className="card-actions justify-start">
          <button
            onClick={() => handleListedBooks(bookId, "read")}
            className="btn btn-outline btn-success"
          >
            Read
          </button>
          <button
            onClick={() => handleListedBooks(bookId, "wish")}
            className="btn btn-outline btn-info"
          >
            Wishlist
          </button>
          <Toaster />
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
