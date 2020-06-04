export const required = (value) => {
    if (value) return undefined;
    return 'Field is required'
};

const maxLengthCreator = (maxLength) => {
    return (value) => {
        if (value && value.length > maxLength) return `Max length is ${maxLength} symbols!`;
        return undefined;
    }
};

export const maxLength150 = maxLengthCreator(150);
export const maxLength128 = maxLengthCreator(128);
export const maxLength30 = maxLengthCreator(30);


export const userNamePattern = (value) => {
    if (/^[\w.@+-]+$/.test(value)) return undefined;
    return 'illegal character';
};

export const passwordPattern = (value) => {
    if (/^(?=.*[A-Z])(?=.*\d).{8,}$/.test(value)) return undefined;
    return 'illegal character';
};
