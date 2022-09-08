import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import styled from "styled-components";
// import { IconButton } from "@mui/material";
import { Rating } from "@mui/material";
import { useState } from "react";
function MyRating({ rate }) {
  const [value, setValue] = useState(rate);
  return (
    <StyledRating
      defaultValue={rate}
      precision={0.5}
      icon={<StarIcon fontSize="20pt" />}
      emptyIcon={<StarBorderIcon fontSize="20pt" />}
      name="simple-controlled"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    />
  );
}

export default MyRating;
const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#e42651",
  },
  "& .MuiRating-iconHover": {
    color: "#e42651",
  },
});
