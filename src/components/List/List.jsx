import { useState } from "react";
import React from "react";
import {
  CircularProgress,
  Typography,
  InputLabel,
  option,
  FormControl,
  Select,
  Grid,
  NativeSelect,
  Card,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
// STYLING WITH MATERIAL-UI

const FormControlStyled = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(1),
  minWidth: 120,
  marginBottom: "30px",
  
}));

const SelectEmpty = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const Loading = styled("div")(({ theme }) => ({
  height: "600px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const Container = styled("div")(({ theme }) => ({
  padding: "25px",
}));

const MarginBottom = styled("div")(({ theme }) => ({
  marginBottom: "30px",
}));


// END OF STYLING WITH MATERIAL-UI



const List = () => {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("All");

  const places = [  // dummy data
  {name: "Cool Place",
  location: "1234 Cool St",
  type: "Restaurant",
  rating: 4.5,
  price: "$$"},
  {
    name: "Best Momos"
  },
  {
    name: "Good Bowling Alley"
  },
  {name: "Cool Place",
  location: "1234 Cool St",
  type: "Restaurant",
  rating: 4.5,
  price: "$$"},
  {
    name: "Best Momos"
  },
  {
    name: "Good Bowling Alley"
  },
  ];

  return (
    <Container>
      <Typography variant="h4">
        Restaurants, Hotels & Attractions around you!
      </Typography>
      <FormControlStyled>
        <InputLabel>Type</InputLabel>
        <NativeSelect value={type} onChange={(e) => setType(e.target.value)}>
          <option value="restaurants">Restaurants</option>
          <option value="hotels">Hotels</option>
          <option value="attractions">Attractions</option>
        </NativeSelect>
      </FormControlStyled>
      <FormControlStyled>
        <InputLabel>Ratings</InputLabel>
        <NativeSelect
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value={0}>All</option>
          <option value={3}>Above 3.0</option>
          <option value={4}>Above 4.0</option>
          <option value={4.5}>Above 4.5</option>
        </NativeSelect>
      </FormControlStyled>
      <Grid container spacing={3} sx={{ height: '70vh', overflow: 'auto', width: '100%' }}>
  {places?.map((place, i) => (
    <Grid item key={i} xs={12}>
      <PlaceDetails place={place} />
    </Grid>
  ))}
</Grid>
    </Container>
  );
};

export default List;
