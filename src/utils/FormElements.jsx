import React from "react";
import './FormElemets.css'

export const Input = ({input, meta, ...props}) => {
    const inputClassName = 'Form-Input' + (meta.touched && meta.error ? ' FormError-Input' : '');
    return (
        <>
            <input {...input}{...props} className={inputClassName}/>
            {meta.touched && meta.error && (
                <div className='FormError-Text'>{meta.error}</div>
            )}
        </>
    )
};
