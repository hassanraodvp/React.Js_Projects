import axios from "axios";

const api = axios.create({
    baseURL: "https://restcountries.com/v3.1",
});

// HTTP GET Method 
export const getCountriesData = () => {
    return api.get("/all");
};

// HTTP GET Method For individual Data
export const getCountryIndividualData = (name) => {
    return api.get(`/name/${name}`);
};