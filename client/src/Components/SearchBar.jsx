import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import "../StyleSheet/SearchBar.css"


const SearchBar = () => {
    const history = useHistory();
    const [search, setSearchQuery] = useState("");

    // const redirectToFilterSearchResults = (location)=>{
    //     history.push(`search/results-location/${location}`)
    //     }
    
    const searchBarQuery = () =>{
        history.push(`/house/search/${search}`)
    };
    return (
        <div className="searchBar__container">
            <div className="searchbar_field">
                <div className="search__textPhrase">
                <h3>Find your Ideal Home</h3>
                </div>
                <div className="searchInput">
                    <input type="text" placeholder="Search by state..." onChange={(e)=>{setSearchQuery(e.target.value)}}/>
                    <SearchIcon onClick={searchBarQuery}/>
                </div>
            </div>
        </div>
    )
}

export default SearchBar