import axios from 'axios';
import React, { useState } from 'react';

export default function useAxiosCart(){
//define state
const [product, setProduct] = useState("");
const [user, setUser] = useState("");
   
    //initialize formData
    const formData = new FormData();

    //append data to formData
    formData.append('user', user);
    formData.append('product', product);
    formData.append('quantity', 1);

    //send data to server
    axios.post('http://localhost:8000/api/cart', formData)
    .then((response) => {
        
    })
    .catch((error) => {
        console.log(error.response.data.error)
    
    })
}
