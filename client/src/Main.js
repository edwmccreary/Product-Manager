import React, {useEffect, useState } from 'react';
import axios from 'axios';

export default ()=>{
    const [message, setMessage] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products/findAll')
        .then(res=>{
            setMessage(res.data.results)
            console.log(res.data.results);
        })
    },[])

    return (
        <div>
            {
                message.map((product, i)=>{
                    return(
                        <div key={i}>
                            <p>{product.title}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}