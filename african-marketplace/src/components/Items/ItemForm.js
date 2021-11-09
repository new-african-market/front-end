import React, { useState, useEffect, useRef } from 'react';

const ItemForm = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
        });

        setInput('');
    };


    return (
        <form onSubmit={handleSubmit}>
            
            {props.edit ? ( 
            <>
                <h2>Please complete this form to update your product to the marketplace.</h2>
                <input
                type="text"
                placeholder="Please update your item."
                value={input}
                name='text'
                onChange={handleChange}
                ref={inputRef}
                />
                <button>Add Item!</button>
            </>
            ) : (
            <>
                <h2>Please complete this form to add your product to the marketplace.</h2>
                <input
                type="text"
                placeholder="Please enter you item here."
                value={input}
                name='text'
                onChange={handleChange}
                ref={inputRef}
                />
                <button>Add Item!</button>
            </>
                )}

            
            
        </form>
    );
}

export default ItemForm;

