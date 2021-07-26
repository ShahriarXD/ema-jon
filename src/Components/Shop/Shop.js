import React from 'react';
import './Shop.css'
import fakeData from '../../fakeData';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Shop = () => {
  // const data10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(fakeData);
  // Cart Section
  const handleAddProduct = (producter) => {
    console.log('Add Product', producter);
  }
  return (
    <div>
      {/* THIS IS THE Product */}
      <div className="container">
        {
          products.map(product => {
            return (
              <div className="stylerbaby" key={product.id}>
                <h2>{product.name}</h2>
                <p>Category : {product.category}</p>
                <p>By : {product.seller}</p>
                <p>Rating {product.star}/5 ({product.starCount} user review)</p>
                <p id="price">Price : {product.price}$
                  <br /><button className="button" onClick={() => handleAddProduct(product.price)}><FontAwesomeIcon icon={faCartPlus} /> add item to cart</button>
                </p>
                <p id="stock">Only <span id="stock-left">{product.stock}</span> Items Avaiable Stock.</p>
                <img src={product.img} alt="" />
              </div>
            );
          })
        }
      </div>
      {/* THIS IS THE CART */}
      <div className="cart-container">
        <h1>This is Cart</h1>
      </div>
    </div>
  );
};

export default Shop;