import React from 'react';
import './Product.css'

function Product(props) {
    const {product, onAdd} = props; 
    return (
        <div className="product">
            <img className="small" src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <h4>{product.price.toLocaleString()} VNĐ</h4>
            <div>
                <button  className="button-product" onClick={() => onAdd(product) }>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product;