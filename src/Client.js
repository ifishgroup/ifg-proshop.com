import fetch from 'isomorphic-fetch';

class Client {
  getProducts() {
    const url = (
      'http://localhost:8080/api/v1/products'
    );
    return fetch(url, {
      method: 'get',
      mode: 'cors',
      'Access-Control-Allow-Origin':'*',
      headers: {
        'accept': 'application/json',
      },
    }).then(this.checkStatus)
      .then(this.parseJson)
  }

  checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      const error = new Error(`HTTP Error ${response.statusText}`);
      error.status = response.statusText;
      error.response = response;
      console.log(error);
      throw error;
    }
  }

  parseJson(response) {
    return response.json();
  }
}

export const client = new Client();
