import App from "../../App";
import SearchPage from "../SearchPage/SearchPage";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

const BookDetailPage = () => {
  const { bookId } = useParams();
  const [books, setBooks] = useState([]);
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
        setBooks(response.data.volumeInfo);
      }
    } catch (error) {
      console.warn("Error submitting form", error);
    }
  };
  console.log("books", books);
  let thumb = books.ImageLinks.thumbnail;
  return (
    <div>
      <img thumb alt="image" width="200" height="200" />
      <button className="btn btn-primary" type="button">
        Favorite
      </button>
      <h4>{books.title}</h4>
      <h2>{books.authors[0]}</h2>
      <p>{books.description}</p>
    </div>
  );
};

export default BookDetailPage;
