import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const ViewItems = () => {
    const [ items, setItems ] = useState([])
    const { push } = useHistory();
    
    
    useEffect(() => {
     const getItems = () => {
      axios.get('')
         .then(res => {
             setItems(res.data)
             console.log(res.data)
                      }
             )
             .catch(err => {
                 console.log(err)
             })
     }
     getItems()
      },[])

      return (
        <div>
        {items.map(item=> (
            <div key={item.id}>
                <h3>{item.item_name}</h3>
                <p>Description: {item.item_description}</p>
                <p>Price: ${item.item_price}</p>
           </div>
        ))}
    </div>
      )
    }

export default ViewItems;