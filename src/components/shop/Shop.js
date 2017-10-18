import React, { Component } from 'react';
import Product from './Product';

class Shop extends Component {
  render() {
    return (
      <section>
        <br />
        <div className="hero-body">
          <Product />
        </div>
      </section>
    )
  }
}

export default Shop;
