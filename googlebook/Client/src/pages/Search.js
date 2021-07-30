import React from 'react';
import { useState } from 'react';
import '../App.css';
import axios from 'axios';
import BookList from '../Components/BookList';

const Search = () => {
    const [name, setName] = useState("");
    const [result, setResult] = useState([]);
    const [apiKey, setApikey] = useState(
        'AIzaSyBeEDk41RGYYOz1V1S0oLA33FikbjUZF_A'
    );
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("book searched: ", name);
        setError(false);

        axios
            .get(
                'https://www.googleapis.com/books/v1/volumes?q=' +
                name +
                "&key=" +
                apiKey +
                "&maxResults=40"
            )
            .then((data) => {
                console.log(data);

                data.data.items ? setResult(data.data.items) : setError(true);
            })
            .catch((err) => {
                console.log(err);
                setError(true);
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="search-form">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Google Book Search"
                    required
                    value={name}
                    onChange={(e) =>
                        e.target.value ? setName(e.target.value) : "Enter Book"
                    } />
                <button
                    className="btn btn-outline-secondary"
                    style={{ marginTop: "10px" }}
                >
                    Search
                </button>
            </form>
            <div className="container">
                {error && (
                    <div style={{ color: `red`, textAlign: `center` }}>
                        No Book found, sorry.
                    </div>
                )}
                <BookList result={result} />
            </div>
        </div>
    );
};

export default Search;
