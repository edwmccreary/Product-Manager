import React, {useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

export default (props)=>{

    var [productList,setProductList] = useState([]);
    //when changed, refresh triggers useEffect, forcing a re-render of this component
    const [refresh,setRefresh] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products/findAll')
        .then(res=>{
            setProductList(res.data.results)
            console.log(res.data.results);
        })
    },[props.render])

    const OnClosehandler = (id,index) => {
        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
        .then(res=>{
            console.log(res);
            let temp = [...productList];
            temp.splice(index,1);
            console.log(temp);
            setProductList(temp);
        }
        )
        .catch(err=>console.log(err));
    }

    const toCurrency = (num) => {
        let str = num.toString();
        //to do: add commas and dollar sign to string
        return str;
    }

    return(
        <div className='m-3'>
            {
                productList.map((product, i)=>{
                    return(
                        <div key={i} className='position-relative w-auto mb-2 p-3 border border-2 rounded'>
                            <h4><Link to={`/products/${product._id}`}>{product.title}</Link></h4>
                            <h4>$ {product.price.$numberDecimal}</h4>
                            <p>{product.description}</p>
                            <button className='position-absolute top-0 end-0 btn-close m-1' onClick={()=>OnClosehandler(product._id,i)}></button>
                        </div>
                    )
                })
            }
        </div>
    )
}