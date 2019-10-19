import axios from 'axios';

class Resource
{
  constructor(axios, responseBuilder, ctx)
  {
    this._axios = axios;
    this._responseBuilder = responseBuilder
    this._ctx = ctx;
  }

  async get(url, params, options = {})
  {
    return await this.request(Object.assign({
      method: 'GET',
      url   : url,
      params: params
    }, options))
  }

  async post(url, data, options = {})
  {
    return await this.request(Object.assign({
      method: 'POST',
      url   : url,
      data  : data
    }, options))
  }

  async put(url, data, options = {})
  {
    return await this.request(Object.assign({
      method: 'PUT',
      url   : url,
      data  : data
    }, options))
  }

  async delete(url, data, options = {})
  {
    return await this.request(Object.assign({
      method: 'DELETE',
      url   : url,
      data  : data
    }, options))
  }

  async request(options)
  {

    const token = await this._ctx.store.dispatch('auth/getToken')

    const response = await this._axios(Object.assign({
        headers: {
          'Authorization': token
        }},
      options
    ))
      .catch((err) => err.response)

    return this._responseBuilder(response);
  }
}

class Response
{
  constructor(response)
  {
    this._rawResponse  = response;
    this._expectStatus = 200;
    this._buildResponse();
    return this;
  }

  _buildResponse() {
    const { status, headers, data } = this._rawResponse || {}; //network_errorとかの場合responseはundefinedになる
    this.status  = status;
    this.headers = headers;
    this.data    = data;
  }

  get error() {
    return this.status !== this._expectStatus;
  }
}


export default (ctx, inject) => {
  inject('resource', () => {

    const client = axios.create({
      baseURL: process.env.API_URL,
    })
    return new Resource(client, (res) => new Response(res), ctx);

  });
};
