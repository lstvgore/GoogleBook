import React from 'react';
// import './Button.css'


function DeleteBtn(props) {
    return (
        <div
        className="btn btn-danger delete-btn"
        {...props}
        role='button'
        tabIndex='0'
        >
            Delete  
        </div>
    );
}

export default DeleteBtn
