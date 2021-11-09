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
        
        console.log(...products);
        setProducts(newProducts);
        
    };

    const updateProduct = (productId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }

        setProducts(prev => prev.map(item => (item.id === productId ? newValue : item )))
    }

    const removeProduct = id => {
        const removeArray = [...products].filter(product => product.id !== id)

        setProducts(removeArray);
    }

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
            <h1>Here are your added Products!</h1>
            <ItemForm onSubmit={addProduct}/>
            <Item 
            products={products}
            addedProduct={addedProduct}
            removeProduct={removeProduct}
            updateProduct={updateProduct}
            />
        </div>
    )
}

export default ItemList;