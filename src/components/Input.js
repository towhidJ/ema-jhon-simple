import React from 'react';

const Input = ({type,placeholder},ref) => {
    return (
        <input ref={ref} type={type} placeholder={placeholder} className="form-control"/>
    );
};
const forwedRef = React.forwardRef(Input)
export default forwedRef;
