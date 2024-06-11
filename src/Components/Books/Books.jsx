import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("BookData.json")
      .then((data) => data.json())
      .then((res) => setBooks(res));
  }, []);
  return (
    <div>
      <h2 className="text-center text-4xl">Books: {books.length}</h2>
      <div className="grid lg:grid-cols-3 my-10">
        {books.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
