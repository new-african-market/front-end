import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const StyledImg = styled.img`
    width: 20%;
`

const ViewItems = () => {
    const [ items, setItems ] = useState([])
    
    useEffect(() => {
     const getItems = () => {
      axios.get('https://picsum.photos/v2/list')
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
            <h1>These are the items that will be available at the market!</h1>
        {items.map(item=> (
            <div key={item.id}>
                <h3>{item.author}</h3>
                <p>Description: {item.url}</p>
                <StyledImg src={item.download_url} alt="image from api"/>
           </div>
        ))}
    </div>
      )
    }

export default ViewItems;