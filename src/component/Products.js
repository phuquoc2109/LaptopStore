import React, { useState } from 'react';
import data from '../data';
import Product from './Product';
import './Products.css'

function Products(props) {

    const { products } = data;
    const { onAdd } = props;
    const [valueSearch, setValueSearch] = useState('');

    const [sort, setSort] = useState('');


    return (
        <div className="products">
            <h2>Products</h2>
            <div className="products-search">
                <label className="products-search-label" htmlFor="">Search</label>
                <input
                    className="products-search-input"
                    type="text"
                    placeholder="Product name..."
                    onChange={(event) => setValueSearch(event.target.value)}
                />
                <select className="products-sort" onChange={e => setSort(e.target.value)}>
                    <option >Sort</option>
                    <option value="asc">Price Ascending</option>
                    <option value="desc">Price Descending</option>
                </select>
            </div>
            <div className="row">
                {products.slice().sort((a, b) => (
                    sort === "desc" ?
                        ((a.price < b.price) ? 1 : - 1) :
                        sort === "asc" ?
                        ((a.price > b.price) ? 1 : - 1) :
                        0
                )).filter((product) => {
                    if (valueSearch == "") {
                        return product;
                    } else if (product.name.toLowerCase().includes(valueSearch.toLowerCase())) {
                        return product;
                    }
                }).map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd} />
                ))}
            </div>
        </div>
    )
}
export default Products;