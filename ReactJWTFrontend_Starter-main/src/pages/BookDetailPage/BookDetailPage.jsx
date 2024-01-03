import App from "../../App";
import SearchPage from "../SearchPage/SearchPage";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

const BookDetailPage = ({ title, author, description, thumbnail }) => {
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
        let book = response.data.volumeInfo;
        console.log("book", book);
      }
    } catch (error) {
      console.warn("Error submitting form", error);
    }
  };

  return <h1>{book.title}</h1>;
};

export default BookDetailPage;
