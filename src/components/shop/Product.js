import React from 'react';

const Product = () => (
  <div className="container has-text-centered">
    <div className="columns is-vcentered">
      <div className="column is-5">
        <figure className="image is-4by3">
          <img src="http://placehold.it/800x600" alt="Description" />
        </figure>
      </div>
      <div className="column is-6 is-offset-1">
        <h1 className="title is-2">
          Superhero Scaffolding
        </h1>
        <h2 className="subtitle is-4">
          Let this cover page describe a product or service.
        </h2>
        <br />
        <p className="has-text-centered">
          <a className="button is-medium is-info is-outlined">
            Add To Cart
          </a>
        </p>
      </div>
    </div>
  </div>
)

export default Product;
