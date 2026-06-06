import axios from "axios";

const api = axios.create({
  baseURL:
    "https://129bc152-6319-4e38-b755-534a4ee46195.mock.pstmn.io",
});

export default api;