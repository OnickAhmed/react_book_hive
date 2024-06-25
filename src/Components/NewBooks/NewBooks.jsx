import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import NewBook from "../NewBook/NewBook";

const NewBooks = () => {
  const AllList = useLoaderData();
  const [newBooks, setNewBooks] = useState([]);
  useEffect(() => {
    if (AllList && Array.isArray(AllList)) {
      const filteredBooks = AllList.filter(
        (book) => parseInt(book.yearOfPublishing) > 1999
      );
      setNewBooks(filteredBooks);
    }
  }, [AllList]);
  console.log(newBooks);
  return (
    <div>
      <h1 className="text-center text-3xl my-5">New Books {newBooks.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
        {newBooks.map((book) => (
          <NewBook key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default NewBooks;
