import React, { useState } from 'react';
import ItemForm from './ItemForm';
import Item from './Item';

const ItemList = () => {
    const [products, setProducts] = useState([]);

    const addProduct = product => {
        if(!product.text || /^\s*$/.test(product.text)) {
            return
        }

        const newProducts = [product, ...products]

        setProducts(newProducts);
        console.log(...products);
    };

    const addedProduct = id => {
        let updatedProduct = products.map(product => {
            if (product.id === id) {
                product.isAdded = !product.isAdded
            }
            return product
        })
    }

    return (
        <div>
            <h1>Here are your added Items!</h1>
            <ItemForm onSubmit={addProduct}/>
            <Item 
            products={products}
            addedProduct={addedProduct}
            />
        </div>
    )
}

export default ItemList;