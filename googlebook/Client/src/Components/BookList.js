import React from 'react';
import SavedBtn from './SavedBtn';
import API from '../utils/API';

const BookList = ({ result }) => {
    const handleClick = (Event) => {
        console.log('clicked save');

        const indexValue = Event.currentTarget.getAtrritbute("data-value");
        const formObject = result[indexValue].volumeinfo;

        console.log(formObject);

        API.saveBook({
            title: formObject.title,
            authors: formObject.authors,
            description: formObject.description,
            image: formObject.imageLinks.thumbnail,
            link: formObject.previewLink,
        })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    };

    return (
       <table
       className="table table-light table-hover"
       style={{ marginTop: "20px" }}
       >
           <tbody>
               {result.map((name, index) => (
                   <tr className="table-active" key={index}>
                       <td>
                           <a target="blank" href={name.volumeinfo.previewLink}>
                               <img 
                               key={index}
                               src={
                                   name.volumeinfo.imageLinks === undefined
                                   ? ""
                                   : `${name.volumeinfo.imageLinks.thumbnail}`
                               }
                               alt={name.title}/>
                           </a>
                           <SavedBtn onClick={handleClick} data-value={index}/>
                       </td>
                       <td>
                           <strong>Book title:</strong> {name.volumeinfo.title}
                           <p>
                               <strong>Description:</strong> {name.volumeinfo.description}
                           </p>
                       </td>
                       <td>
                           <strong>Authors:</strong> {name.volumeinfo.authors}
                       </td>
                   </tr>
               ))}
           </tbody>
       </table>
    );
};

export default BookList
