import React, {useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";

export default ()=>{

    const {_id} = useParams();
    const [product,setProduct] = useState({});
    const history = useHistory();

    useEffect(()=>{
        console.log("the id is: "+_id);
        axios.get(`http://localhost:8000/api/products/find/${_id}`)
        .then(res=>{
            setProduct(res.data.results);
            console.log(res.data.results);
        })
    },[])

    const OnClosehandler = (id) => {
        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
        .then(res=>{
            console.log(res);
            history.push("/");
        }
        )
        .catch(err=>console.log(err));
    }

    const editHandler = () => {
        history.push(`/products/edit/${product._id}`);
    }

    return(
        <div className='position-relative mx-auto w-25 m-3 p-3 border border-2 rounded'>
            <h4>{product.title}</h4>
            <h4>{product.price && product.price.$numberDecimal}</h4>
            <p>{product.description}</p>
            <button className='btn btn-primary' onClick={editHandler}>Edit</button>
            <button className='position-absolute top-0 end-0 btn-close m-1' onClick={()=>OnClosehandler(product._id)}></button>
        </div>
    )
}