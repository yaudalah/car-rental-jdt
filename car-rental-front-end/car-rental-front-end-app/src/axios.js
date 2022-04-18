import axios from "axios";

export const getAllVehicles = (id) => axios({
  method: 'GET',
  baseURL: "localhost:8080/api/v1/vehicle",
  url: `/get-all-vehicles`
});