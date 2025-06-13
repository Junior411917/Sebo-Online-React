import axios from "axios";

const API_URL = "http://localhost:8080/cupons";

export const getCupons = () => axios.get(API_URL);
export const getCupomByCodigo = (codigo) => axios.get(`${API_URL}/codigo/${codigo}`);
export const createCupom = (data) => axios.post(API_URL, data);
export const updateCupom = (codigo, data) => axios.put(`${API_URL}/codigo/${codigo}`, data);
export const deleteCupom = (codigo) => axios.delete(`${API_URL}/${codigo}`);
