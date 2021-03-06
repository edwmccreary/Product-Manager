import React, {useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';

export default ()=>{
    const [product, setProduct] = useState({
        title: "",
        price: 0.0,
        description: ""
    });

    //when changed, refresh triggers useEffect in the productList component via the render prop
    const [refresh,setRefresh] = useState(false);

    const OnSubmitHandler = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/products/create",product)
        .then(res=>{
            console.log(res);
            e.target.reset();
        })
        .catch(err=>console.log(err))

        //e.target.reset();
        setRefresh(!refresh);
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
                    <br />
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
                
            </div>
            <ProductList render={refresh} />
        </div>
    )
}