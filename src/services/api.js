import axios from "axios";

export const api = axios.create({
  baseURL: "https://beyou-api.herokuapp.com/",
});