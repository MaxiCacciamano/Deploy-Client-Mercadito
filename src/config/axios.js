import axios from "axios";

const clienteAxios = axios.create({
  baseURL:"https://deploy-api-mercadito-production.up.railway.app",
});

export default clienteAxios;
