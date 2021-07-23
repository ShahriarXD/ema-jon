import React from 'react';
import './Shop.css'
import fakeData from '../../fakeData';
import { useState } from 'react';

const Shop = () => {
  var target = "_blank"
  // const data10 = fakeData.slice(0, 20);
  const [products, setProducts] = useState(fakeData);
  console.log(products);
  return (
    <div>
      <div><h1 className="text">Shop</h1></div>
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
  );
};

export default Shop;