import React from 'react';
import './Shop.css'
import fakeData from '../../fakeData';
import { useState } from 'react';

const Shop = () => {
  var target = "_blank"
  // const data10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(fakeData);
  return (
    <div>
      {/* THIS IS THE Product */}
      <div className="container">
        {
          products.map(product => {
            return (
              <div className="stylerbaby" key={product.id}>
                <h2>{product.name}</h2>
                <p id="price">Price : {product.price}$
                  <a href={product.url} target={target}><br /><button>Buy Now</button></a>
                </p>
                <p id="stock">Available Stock : {product.stock}</p>
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