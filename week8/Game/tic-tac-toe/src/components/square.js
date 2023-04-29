import React from 'react';

const Square = ({value, onClick}) => (
    <button className="cell" onClick={onClick}>
        {value}
    </button>
);

export default Square;