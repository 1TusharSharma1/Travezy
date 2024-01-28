
import MapGL from 'react-map-gl';
import React from "react";

import { Paper, Typography, useMediaQuery } from "@mui/material";
import { LocationOnOutlined } from "@mui/icons-material/LocationOnOutlined";
import Rating from "@mui/material/Rating";
import { createTheme } from "@mui/material";
import { alpha, styled } from "@mui/material/styles"


const theme = createTheme();

const mapContainer = styled("div")(({ theme }) => ({
  height: "85vh",
  width: "100%",
}));


const Map = ()=> {
  const isMobile = useMediaQuery("(min-width:600px)");
  const coordinates = { lat: 28.704060, lng: 77.102493 };
  return (
    <>
    <mapContainer>
    <MapGL
      mapboxAccessToken="pk.eyJ1IjoidGhldHVzaGFyc2hhcm1hIiwiYSI6ImNscnhlbm81ZTB4MHoyam14bmtldGZhb2IifQ.hXsEzi-gJBIx-8-PUTz8Pg"
      initialViewState={{
        longitude: coordinates.lng,
        latitude: coordinates.lat,
        zoom: 14
      }}
      style={{ width: "100%", height: "90vh" }}      mapStyle="mapbox://styles/thetusharsharma/clrxfygnv009301ph879uha27"
      
    />
    </mapContainer>
    </>
  );
}
export default Map;