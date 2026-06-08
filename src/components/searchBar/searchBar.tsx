import "./searchBar.scss";
import SearchIcon from "../../assets/icons/SearchIcon";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className="search-bar">
      <SearchIcon />

      <input
        type="text"
        placeholder="Search.."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}