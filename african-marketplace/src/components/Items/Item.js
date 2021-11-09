import React, { useState } from 'react';
import ItemForm from './ItemForm';

const Item = ({ products, addedProduct, removeProduct, updateProduct }) => {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
    });

    const submitUpdate = value => {
        updateProduct(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <ItemForm edit={edit} onSubmit={submitUpdate} />
    }

    return products.map((product, index) => (
        <div className={product.isAdded ? 'item-row added' : 'item-row'} key={index}>
            <div key={product.id} onClick={() => addedProduct(product.id)}>
                {product.text}
            </div>
            <button onClick={() => setEdit({ id: product.id, value: product.text })}>edit</button>
            <button onClick={() => removeProduct(product.id)}>delete</button>
        </div>
    ))
}

export default Item;