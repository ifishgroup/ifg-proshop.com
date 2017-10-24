import React, { Component } from 'react';
import Product from './Product';
import { client } from '../../Client';

class Shop extends Component {
  state = {
    fetched: false,
    products: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    client.getProducts().then((products) => {
      console.log(products)
      this.setState({
        fetched: true,
        products: products,
      })
    });
  }

  render() {
    if (!this.state.fetched) {
      return (
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-vcentered">
              <div className="column is-5">
                <div className='loader' />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      const matchPath = this.props.match.path;

      return (
        <section>
          <br />
          <div className="hero-body">
            <Product />
          </div>
        </section>
      );
    }
  }
}

export default Shop;
