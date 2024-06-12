import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBookList } from "../../Utility/LocalStorage";
import Book from "../Book/Book";

const BookList = () => {
  const [readBooks, setReadBooks] = useState([]);
  const AllList = useLoaderData();
  useEffect(() => {
    const storedReadBookIds = getStoredBookList();
    if (AllList.length > 0) {
      const readBookList = [];
      for (const id of storedReadBookIds) {
        const book = AllList.find((book) => book.bookId === id);
        console.log(id, book);
        if (book) readBookList.push(book);
      }
      setReadBooks(readBookList);
    }
  }, []);
  return (
    <div>
      <div>
        <h2 className="font-bold text-3xl text-center my-16">Books</h2>
      </div>
      <div className="text-center my-10">
        <select className="select select-success w-auto max-w-xs">
          <option disabled selected>
            Sort By
          </option>
          <option>Books Read</option>
          <option>Wishlist Books</option>
        </select>
      </div>
      <div>
        <div role="tablist" className="tabs tabs-lifted">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label={`Read Books ${readBooks.length}`}
            checked
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            {
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {readBooks.map((book) => (
                  <Book key={book.bookId} book={book}></Book>
                ))}
              </div>
            }
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Wishlist Book"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            Tab content 2
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookList;
