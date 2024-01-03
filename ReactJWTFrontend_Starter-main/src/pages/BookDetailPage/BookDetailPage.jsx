import App from "../../App";
import SearchPage from "../SearchPage/SearchPage";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import FavoritesPage from "../FavoritesPage/FavoritesPage";

const BookDetailPage = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState([]);
  const [search, setSearch] = useState("");
  console.log(bookId);
  useEffect(() => {
    fetchBook();
  }, []);
  const fetchBook = async (e) => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/books/v1/volumes/" + bookId
      );
      console.log("responser", response);
      if (response.status === 200) {
        setBook(response.data.volumeInfo);
      }
    } catch (error) {
      console.warn("Error submitting form", error);
    }
  };
  console.log("book", book);
  let test = book.title;
  if (test != undefined) {
    let thumb = book.imageLinks.thumbnail;
  }
  return (
    <div>
      <img src="{thumb}" alt="image" width="200" height="200" />
      <button className="btn btn-primary" type="button">
        Favorite
      </button>
      <h4>{book.title}</h4>
      <h2>{book.authors}</h2>
      <p>{book.description}</p>
    </div>
  );
};

export default BookDetailPage;
