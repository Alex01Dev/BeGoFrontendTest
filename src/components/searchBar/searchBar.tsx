import "./SearchBar.scss";
import SearchIcon from "../../assets/icons/SearchIcon";

export default function SearchBar() {
  return (
    <div className="search-bar">
      <SearchIcon />

      <input
        type="text"
        placeholder=""
      />
    </div>
  );
}