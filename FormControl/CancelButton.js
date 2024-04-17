import React from 'react';

const CancelButton = ({ onClick, label }) => {
    return (
        <p onClick={onClick} className='py-1 w-20 flex items-center justify-center border cursor-pointer border-secondary rounded text-sm hover:text-white hover:bg-skin-button-muted hover:bg-opacity-60 transition-all duration-300'>{label ? label : 'CANCEL'}</p>
    );
}

export default CancelButton;
