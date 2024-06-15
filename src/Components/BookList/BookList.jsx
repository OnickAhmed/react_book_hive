import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  getReadBookList,
  getWishlistBookList,
} from "../../Utility/LocalStorage";
import ListedBook from "../ListedBook/ListedBook";

const BookList = () => {
  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);
  const [displayReadBooks, setDisplayReadBooks] = useState([]);
  const [displayWishlistBooks, setDisplayWishlistBooks] = useState([]);
  const AllList = useLoaderData();
  useEffect(() => {
    const storedReadBookIds = getReadBookList();
    const storedWishlistBookIds = getWishlistBookList();
    if (AllList.length > 0) {
      const readBookList = [];
      const wishlistBookList = [];
      for (const id of storedReadBookIds) {
        const book = AllList.find((book) => book.bookId === id);
        if (book) readBookList.push(book);
      }
      for (const id of storedWishlistBookIds) {
        const book = AllList.find((book) => book.bookId === id);
        if (book) wishlistBookList.push(book);
      }
      setReadBooks(readBookList);
      setDisplayReadBooks(readBookList);
      setWishlistBooks(wishlistBookList);
      setDisplayWishlistBooks(wishlistBookList);
    }
  }, [AllList]);

  const handleBookFilter = (filter) => {
    if (filter === "All") {
      setDisplayReadBooks(readBooks);
      setDisplayWishlistBooks(wishlistBooks);
    } else if (filter === "Rating") {
      const readRating = [...readBooks].sort((a, b) => b.rating - a.rating);
      const wishRating = [...wishlistBooks].sort((a, b) => b.rating - a.rating);
      setDisplayReadBooks(readRating);
      setDisplayWishlistBooks(wishRating);
    } else if (filter === "Pages") {
        const readRating = [...readBooks].sort((a, b) => b.totalPages - a.totalPages);
        const wishRating = [...wishlistBooks].sort((a, b) => b.totalPages - a.totalPages);
        setDisplayReadBooks(readRating);
        setDisplayWishlistBooks(wishRating);
    } else if (filter === "Year") {
        const readRating = [...readBooks].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        const wishRating = [...wishlistBooks].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        setDisplayReadBooks(readRating);
        setDisplayWishlistBooks(wishRating);
    }
  };

  return (
    <div>
      <div>
        <h2 className="font-bold text-3xl text-center my-16">Books</h2>
      </div>
      <div className="text-center my-10">
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="btn m-1">
            Hover
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={() => handleBookFilter("All")}>
              <a>All</a>
            </li>
            <li onClick={() => handleBookFilter("Rating")}>
              <a>Rating</a>
            </li>
            <li onClick={() => handleBookFilter("Pages")}>
              <a>Pages</a>
            </li>
            <li onClick={() => handleBookFilter("Year")}>
              <a>Year</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div role="tablist" className="tabs tabs-lifted">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label={`Read-${readBooks.length}`}
            checked
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            {
              <div className="">
                {displayReadBooks.map((book) => (
                  <ListedBook key={book.bookId} book={book}></ListedBook>
                ))}
              </div>
            }
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label={`Wishlist-${readBooks.length}`}
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            {
              <div className="">
                {displayWishlistBooks.map((book) => (
                  <ListedBook key={book.bookId} book={book}></ListedBook>
                ))}
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookList;
