import { useState, useEffect } from 'react';
import DeleteBtn from '../Components/DeleteBtn';
import API from '../utils/API';



const Saved = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadBooks();
    }, []);

    function loadBooks() {
        API.geetBooks()
            .then((res) => setBooks(res.data))
            .catch((err) => console.log(err));
    }

    const handleClick = (Event) => {
        console.log('clicked delete');
    }

    const indexValue = Event.currentTarget.getAttribute("data-value");
    const formObject = books[indexValue];
    console.log(formObject);

    API.deleteBook(formObject._id)
        .then((res) => loadBooks())
        .catch((err) => console.log(err));


return (
    <table 
    className="table table-light table-hover"
        style={{ margin: "auto", width: "90%" }}
        >
        <tbody>
            {books.lenght ? (
                books.map((book, index) => (
                    <tr className="table-active" key={index}>
                        <td>
                            <a target="blank" href={book.link}>
                                <im key={index} src={book.image} alt={book.title} />
                            </a>
                            <DeleteBtn onClick={handleClick} data-value={index}/>
                        </td>
                        <td>
                            <strong>Book Title:</strong> {book.title}                    
                             <p>
                                <strong>Description:</strong> {book.description}
                            </p>
                        </td>
                        <td>
                            <strong>Authors</strong> {book.authors}
                        </td>
                    </tr>
                ))
            ) : (
                    <tr className="no-books">
                        <td style={{ textAlign: "center", padding: "65px" }}>
                            <strong>You have 0 books saved</strong>
                        </td>
                    </tr>
                )}
        </tbody>
    </table>
);
            };
        

export default Saved;