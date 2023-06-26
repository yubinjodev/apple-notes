export default function Searchbar() {
  return (
    <div className="searchbar-root container">
      <div className="row">
        <div className="col">
        <i className="bi bi-search"></i>
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
    </div>
  );
}
