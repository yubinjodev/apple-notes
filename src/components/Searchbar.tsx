export default function Searchbar() {
  return (
    <div className="searchbar-root container">
      <div className="row">
        <div className="col text-end">
          <span id="search-icon">
            {/* <i className="bi bi-search fs-4"></i> */}
          </span>
        </div>
        
        <div className="col p-0">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-icon"
          />
        </div>
      </div>
    </div>
  );
}
