import axios from "axios";

export const api = axios.create({
  baseURL: "https://nounsaude-api.herokuapp.com/",
  // baseURL: "http://localhost:5000/"
});

