import React from 'react';
import './Buttons.css';



function SavedBtn(props) {
    return (
        <div
        className='btn btn-primary save-btn'
        {...props}
        role="button"
        tabIndex="0"
        >
            Save
        </div>
    )
}

export default SavedBtn
