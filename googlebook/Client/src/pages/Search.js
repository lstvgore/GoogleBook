import React from 'react'

function Search() {

const handleSearch = () => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=intitle=Macbeth')

    .then( Response => {
    console.log(Response);
    }) 
    }


    return (
        <div>
            <button onClick={handleSearch} className="btn"></button>
            Search
            {/* https://www.googleapis.com/books/v1/volumes?q=intitle=Macbeth */}
        </div>

    )
}

export default Search
