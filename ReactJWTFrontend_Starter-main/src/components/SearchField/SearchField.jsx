import SearchPage from "../../pages/SearchPage/SearchPage";
import axios from "axios";

const SearchField = ({ label, value, onChange }) => {
  return (
    <div className="mb-2">
      <label className="form-label">
        {label}
        <input
          className="form-control"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </div>
  );
};

export default SearchField;
