import React from "react"

function Search({setSearchText}) {


    return(
        <div className="search-container">
            <input type="text" placeholder="Search names..." onChange={(event)=>setSearchText(event.target.value)} />
        </div>
    );
}

export default Search;