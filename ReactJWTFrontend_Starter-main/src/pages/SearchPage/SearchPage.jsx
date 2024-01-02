import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchField from "../../components/SearchField/SearchField";
import { Link } from "react-router-dom";
import App from "../../App";
import BookList from "../../components/BookList/BookList";
import BookDetailPage from "../BookDetailPage/BookDetailPage";

const SearchPage = ({ onNewSearch }) => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(search);

    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}`
      );
      console.log(response);
      if (response.status === 200) {
        //save response.data.items[]
        setBooks(response.data.items);
      }
    } catch (error) {
      console.warn("Error submitting search form: ", error);
    }
  };

  const searchResults = books.map((book, index) => {
    {
      console.log("book in map", book);
    }
    return <Link to={`/detail/${book.id}`}>{book.volumeInfo.title}</Link>;
  });
  console.log(searchResults);

  return (
    <form onSubmit={handleSubmit}>
      <h3>Search for Books:</h3>

      <SearchField label="" value={search} onChange={setSearch} />
      <div className="d-flex justify-content-end">
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </div>
      <div>{searchResults}</div>
    </form>
  );
};
export default SearchPage;
