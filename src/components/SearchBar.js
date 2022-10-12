import React from "react";

const SearchBar = (props) => {
    return (
      <>
        <div className="section" id="searchBar">
        <form className = "form-inline m-2" onSubmit={props.handleFormSubmit}>
                <input
                className ="form-control"
                value ={props.value}
                name="search"
                onChange={props.handleInputChange}
                type="search"
                placeholder='Search'
                />
            </form>
      </div>
      </>
    )
  }
  
  export default SearchBar;