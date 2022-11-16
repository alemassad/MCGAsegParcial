import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { obtenerProductsAccion } from "../redux/produDucks";
import styles from './products.css'


const Products = () => {
    const dispatch = useDispatch()

    const products = useSelector(store => store.products.array)
    
    return (
        
        <div>
            <div>
              Products list 
              <button onClick={()=>dispatch(obtenerProductsAccion())}>Get Products</button>
            </div>   
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Description</th>
                        <th>Price USD</th>
                        <th>Stock</th>
                        <th>Category</th>                        
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => {
                        return (

                        <tr key={product._id}>
                            <td> {product.name}</td>
                            <td>{product.description}</td>
                            <td>$ {product.price}</td>
                            <td>{product.stock}</td>
                            <td>{product.category}</td>
                            
                        </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default Products