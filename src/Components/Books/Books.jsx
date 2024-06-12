import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [dataLength, setDataLength] = useState(6);
  useEffect(() => {
    fetch("BookData.json")
      .then((data) => data.json())
      .then((res) => setBooks(res));
  }, []);
  return (
    <div>
      <h2 className="text-center text-4xl">Books: {books.length}</h2>
      <div className="grid lg:grid-cols-3 my-10">
        {books.slice(0, dataLength).map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
      <div className="text-center">
        <div className={dataLength == books.length ? 'hidden' : ''}>
          <button
            onClick={() => setDataLength(books.length)}
            className="btn btn-outline btn-info"
          >
            Show All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Books;
