const BASE_URL = "http://localhost:8080";
// const BASE_URL = "http://44.201.179.67:8080";

export default class Http {
  static _urlBuilder(
    baseUrl: string,
    endpoint: string,
    filters?: { [key: string]: string | number }
  ) {
    let url = baseUrl + endpoint + "?";
    for (const key in filters) {
      url = url.concat(`${key}=${filters[key]}&`);
    }

    return url;
  }
  static async get<T>(
    endpoint: string,
    headers: { authorization: string },
    filters?: { [key: string]: string | number },
    baseUrl = BASE_URL
  ): Promise<Array<T>> {
    const response = await fetch(this._urlBuilder(baseUrl, endpoint, filters), {
      method: "GET",
      headers: { authorization: headers.authorization },
    });
    const json = await response.json();
    return json;
  }
  static async delete(
    endpoint: string,
    id: number,
    headers: { authorization: string },
    baseUrl = BASE_URL
  ): Promise<Response> {
    const response = await fetch(baseUrl + endpoint + "/" + id, {
      headers: { authorization: headers.authorization },
      method: "DELETE",
    });
    const json = await response.json();
    return json;
  }

  static async put<T>(
    endpoint: string,
    id: number,
    body: T,
    headers: { authorization: string },
    baseUrl = BASE_URL
  ): Promise<Response> {
    const response = await fetch(`${baseUrl}${endpoint}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: headers.authorization,
      },
      body: JSON.stringify(body),
    });
    const json = await response.json();
    return json;
  }

  static async patch<T>(
    endpoint: string,
    id: number,
    status: string,
    headers: { authorization: string },
    baseUrl = BASE_URL
  ): Promise<Response> {
    const response = await fetch(`${baseUrl}${endpoint}/${id}?status=${status}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: headers.authorization,
      }
    });
    const json = await response.json();
    return json;
  }

  static async post<T>(
    endpoint: string,
    body: T,
    headers: { authorization: string },
    baseUrl = BASE_URL
  ): Promise<Response> {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: headers.authorization,
      },
      body: JSON.stringify(body),
    });
    const json = await response.json();
    return json;
  }
}
