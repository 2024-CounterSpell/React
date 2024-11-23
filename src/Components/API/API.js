import axios from "axios";

async function API(endpoint, method, body) {
  let headers = {};

  const url = `localhost:3030${endpoint}`;

  if (body instanceof FormData) {
    headers["Content-Type"] = "multipart/form-data";
  }
  return axios({
    method,
    url,
    data: body,
    headers,
  });
}

export default API;
