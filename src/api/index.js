import axios from "axios";

// const axios = require('axios');
const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";
const options = {
  method: "GET",
  params: {
    bl_latitude: "11.847676",
    tr_latitude: "12.838442",
    bl_longitude: "109.095887",
    tr_longitude: "109.149359",
  },
  headers: {
    "X-RapidAPI-Key": "bffba1ca03msh28abde2e623cedcp1904b5jsndd95ab539a16",
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  },
};

const getPlacesData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, options);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export default getPlacesData;
