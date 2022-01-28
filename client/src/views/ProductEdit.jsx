import React, {useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";

export default ()=>{
    const [product, setProduct] = useState({
        title: "",
        price: 0.0,
        description: ""
    });

    const history = useHistory();
    const {_id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/find/${_id}`)
        .then(res=>{
            setProduct(res.data.results);
            console.log(res.data.results);
        })
    },[])

    const OnSubmitHandler = (e) => {
        e.preventDefault();

        axios.patch(`http://localhost:8000/api/products/update/${_id}`,product)
        .then(res=>{
            console.log(res);
            history.push("/");
        })
        .catch(err=>console.log(err))
    }

    const OnChangeHandler = (e) => {
        const {name, value} = e.target;
        setProduct(product => ({
            ...product,
            [name]: value
        }));
    };

    return(
        <div className='d-inline-flex'>
            <div className='w-auto mt-3 mb-auto p-3 border border-2 rounded'>
                <h3>Edit Product: {product.title}</h3>
                <form onSubmit={OnSubmitHandler}>
                    <div className='mb-3'>
                        <label htmlFor="title" className='form-label'>Title</label>
                        <input type="text" name="title" className='form-control' onChange={OnChangeHandler} value={product.title}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="price" className='form-label'>Price</label>
                        <input type="number" min={0.00} max={10000.00} step={0.01} name="price" className='form-control' onChange={OnChangeHandler} value={product && product.price.$numberDecimal}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="description" className='form-label'>Description</label>
                        <input type="text" name="description" className='form-control' onChange={OnChangeHandler} value={product.description}/>
                    </div>
                    <br />
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
                
            </div>
        </div>
    )
}