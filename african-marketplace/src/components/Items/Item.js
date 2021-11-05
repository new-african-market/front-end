import React, { useState } from 'react';
import ItemForm from './ItemForm';

const Item = ({ products, addedProduct }) => {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
    })

    return products.map((product, index) => (
        <div className={product.isAdded ? 'item-row added' : 'item-row'} key={index}>
            <div key={product.id} onClick={() => addedProduct(product.id)}>
                {product.text}
            </div>
            <button>edit</button>
            <button>delete</button>
        </div>
    ))
}

export default Item;