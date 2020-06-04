import React from "react";
import './FormElemets.css'

export const Input = ({input, meta, ...props}) => {
    const inputClassName = meta.touched && meta.error ? 'FormError-Input' : null;
    return (
        <>
            <input {...input}{...props} className={inputClassName}/>
            {meta.touched && meta.error && (
                <span className='FormError-Text'>{meta.error}</span>
            )}
        </>
    )
};
