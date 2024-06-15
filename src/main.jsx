import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import BooksRead from "./Components/BooksRead/BooksRead";
import WishList from "./Components/WishList/WishList";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import BookDetails from "./Components/BookDetails/BookDetails";
import BookList from "./Components/BookList/BookList";
import PagesToRead from "./Components/PagesToRead/PagesToRead";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/bookList",
        element: <BookList></BookList>,
        loader: () => fetch("BookData.json"),
      },
      {
        path: "/book/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("BookData.json"),
      },
      {
        path: "/pagesToRead",
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch("BookData.json"),
      },
    ],
  },
  {
    path: "/read",
    element: <BooksRead></BooksRead>,
  },
  {
    path: "/wishlist",
    element: <WishList></WishList>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
