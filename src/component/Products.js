import React from 'react';
import data from '../data';
import Product from './Product';
import './Products.css'

function Products(props){
    const {products} = data;
    const {onAdd} = props;
    return(
        <div className="products">
            <h2>Products</h2>
            <div className="row">
                {products.map((product) => (
                    <Product key={product.id} product={product}  onAdd={onAdd}  />
                ))}
            </div>
        </div>
    )
}
export default Products;