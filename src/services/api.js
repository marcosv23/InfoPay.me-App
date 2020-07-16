const Axios = require('axios').default;

export default class API {
  constructor() {
    this.route = 'http://tramontano.ddns.net:3127';
  }

  static getApiAddress(route) {
    switch (route) {
      case 10:
        break;
      default:
        this.route = 'https://api.bnggo.net';
        break;
    }
  }

  static async post(endpoint, content) {
    const url = (this.route || 'http://tramontano.ddns.net:3127') + endpoint;
    console.log(url);
    const response = await Axios({
      method: 'POST',
      url: url,
      data: content,
      headers: {
        'Access-Token': 'Qk5HR286RzAx',
      },
    });
    return response.data;
  }

  static async get(endpoint) {
    const url = (this.route || 'http://tramontano.ddns.net:3127') + endpoint;
    console.log(url);
    const response = await Axios({
      method: 'GET',
      url: url,
      headers: {
        'Access-Token': 'Qk5HR286RzAx',
      },
    });
    return response.data;
  }
}
