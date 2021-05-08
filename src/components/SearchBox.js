import React from 'react';

export default function SearchBox(props) {
  console.log('SearchBox props: ', props);
  return (
    <form>
      <div className="row form-group d-flex justify-content-between">
        <label htmlFor="searchMovie" className="col-sm-2 col-form-label">
          Search:
        </label>
        <div className="col col-sm-10">
          <input
            type="text"
            className="form-control"
            id="searchMovie"
            value={props.value}
            onChange={(event) => props.setSearchValue(event.target.value)}
            placeholder="Type to search..."
          />
        </div>
      </div>
    </form>
  );
}
