import App from "../../App";
import SearchPage from "../SearchPage/SearchPage";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

const BookDetailPage = ({}) => {
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
      console.log(response);
      if (response.status === 200) {
        setSearch(response.data.items);
      }
    } catch (error) {
      console.warn("Error submitting form", error);
    }
  };

  return <div></div>;
};

export default BookDetailPage;
