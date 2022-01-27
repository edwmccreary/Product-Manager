import React, {useEffect, useState } from 'react';
import axios from 'axios';

export default ()=>{
    const [product, setProduct] = useState({
        title: "",
        price: 0.0,
        description: ""
    });

    const OnSubmitHandler = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/products/create",product)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))

        e.target.reset();
    }

    const OnChangeHandler = (e) => {
        const {name, value} = e.target;
        setProduct(product => ({
            ...product,
            [name]: value
        }));
    };

    return(
        <div className='w-25 mx-auto mt-3 p-3 border border-2 rounded'>
            <h3>Add a new Product</h3>
            <form onSubmit={OnSubmitHandler}>
                <div className='mb-3'>
                    <label htmlFor="title" className='form-label'>Title</label>
                    <input type="text" name="title" className='form-control' onChange={OnChangeHandler}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="price" className='form-label'>Price</label>
                    <input type="number" min={0.00} max={10000.00} step={0.01} name="price" className='form-control' onChange={OnChangeHandler}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="description" className='form-label'>Description</label>
                    <input type="text" name="description" className='form-control' onChange={OnChangeHandler}/>
                </div>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
}