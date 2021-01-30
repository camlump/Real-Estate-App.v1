import React from 'react'

import SearchIcon from '@material-ui/icons/Search';
import "../StyleSheet/SearchBar.css"

const SearchBar = () => {
    return (
        <div className="searchBar__container">
            <div className="searchbar_field">
                <div className="search__textPhrase">
                <h3>Find your Ideal Home</h3>
                </div>
                <div className="searchInput">
                    <input type="text" placeholder="Search"/>
                    <SearchIcon/>
                </div>
                <div className="filter">
                    Filter by Province: {" "}
                     <select>
                        <option value="">Buckhead</option>
                        <option value="">Brookhaven</option>
                        <option value="">Roswell</option>
                        <option value="">Alpharetta</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default SearchBar


