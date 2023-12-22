import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchField from "../../components/SearchField/SearchField";
import { Link } from "react-router-dom";
import App from "../../App";

const SearchPage = ({ onNewSearch }) => {
  const [search, setSearch] = useState("");
  const handleSubmit = async (e) => {
    const formData = { search };
    console.log({ formData });
    debugger;
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?${formData}`
      );
      if (response.status === 200) {
        onNewSearch();
      }
    } catch (error) {
      console.warn("Error submitting search form: ", error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>Search for Books:</h3>

      <SearchField label="" value={search} onChange={setSearch} />
      <div className="d-flex justify-content-end">
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </div>
    </form>
  );
};
export default SearchPage;
