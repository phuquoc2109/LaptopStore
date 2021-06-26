import React from 'react';
import './Product.css'

function Product(props) {
    /* const {product, onAdd} = props; */
    return (
        <div className="product">
            <img className="small" src={props.product.image} alt={props.product.name} />
            <h3>{props.product.name}</h3>
            <h4>{props.product.price} VNĐ</h4>
            <div>
                <button onClick={() => props.onAdd(props.product) }>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product;