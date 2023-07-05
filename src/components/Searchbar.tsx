export default function Searchbar() {
  return (
    <div className="searchbar-root">
      <input
        type="text"
        className="form-control"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-icon"
      />
    </div>
  );
}
