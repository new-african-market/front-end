import React, { useState } from 'react';

const ItemForm = (props) => {
    const [input, setInput] = useState('');

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
            <h2>Please complete this form to add your item to the marketplace.</h2>
            <div>
            <input
                type="text"
                placeholder="Please enter you item here."
                value={input}
                name='text'
                onChange={handleChange}
            />
            </div>
            {/* <div>
            <input
                type="text"
                placeholder="Please enter your item price here."
            />
            </div> */}
            <button>Add Item!</button>
        </form>
    );
}

export default ItemForm;

