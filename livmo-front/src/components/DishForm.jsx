import { Grid, MenuItem, Rating } from "@mui/material";
import {
  MyDivider,
  MyForm,
  SubGrid,
  MyInput,
  MyTextarea,
  MySelect,
  MyStack,
  MyTextField,
  MyButton,
} from "./CustomStyled";
import React, { useState, useEffect } from "react";
import ImageAdder from "./ImageAdder";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import * as yup from "yup";
import { TimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { useContext } from "react";
import DataContext from "../contexts/DataContext";

function DishForm() {
  const [rules, setRules] = useState(
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni voluptatem officiis deserunt sapiente quas repellat quo deleniti dicta eligendi explicabo? Aperiam asperiores impedit, commodi error atque ipsa eligendi quidem quam perspiciatis ratione autem maxime quae dolorem a placeat sint ullam illo cum nisi vero, pariatur ducimus beatae! Dolorum, eius!"
  );
  const [description, setDescription] = useState(
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni voluptatem officiis deserunt sapiente quas repellat quo deleniti dicta eligendi explicabo? Aperiam asperiores impedit, commodi error atque ipsa eligendi quidem quam perspiciatis ratione autem maxime quae dolorem a placeat sint ullam illo cum nisi vero, pariatur ducimus beatae! Dolorum, eius!"
  );
  const [website, setWebsite] = useState("http://www.livmo.com");
  const [address, setAddress] = useState("Tunis 23 rue taieb mhiri 1003");
  const [resto, setResto] = useState("Chaneb");
  const [recipe, setRecipe] = useState("All Salmon");
  const [price, setPrice] = useState(13);
  const [slogan, setSlogan] = useState("we are the best ");
  const [rating, setRating] = useState(0);
  const [time, setTime] = useState(new Date());
  const [startTime, setStartTime] = useState();

  const { data, setData } = useContext(DataContext);
  // const handleTimeChange = (newValue) => {
  //   setTime(newValue);
  // };
  //multiple selection for days off
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [selectedOffDays, setSelectedOffDays] = useState([]);
  const [offDays, setOffDays] = useState([]);

  //for time range selection
  const [endTime, setEndTime] = useState();
  const handleStartTimeChange = (newValue) => {
    setStartTime(newValue);
  };
  const handleEndTimeChange = (newValue) => {
    setEndTime(newValue);
  };

  //for rating
  const handleRating = (e) => {
    setRating(parseInt(e.target.value));
    console.log(rating + typeof rating);
  };
  //yup
  const schema = yup
    .object({
      recipe: yup.string().required(),
      resto: yup.string().required().min(5).max(20),
      website: yup.string().required().url(),
      address: yup.string().required(),
      slogan: yup.string(),
      description: yup.string().required(),
      rules: yup.string().required(),
      price: yup.number().positive().integer().required().min(2).max(20),
      rating: yup.number().required(),
      time: yup.date().required(),
      offDays: yup.array().of(yup.string()).required().min(1),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      recipe,
      website,
      address,
      resto,
      price,
      slogan,
      description,
      rules,
      rating,
      time,
      offDays,
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    setData(data);
    console.log(data);
  };
  useEffect(() => console.log(data), [data]);

  //   const [value, setValue] = useState(Date)(new Date("2014-08-18T21:11:54"));

  //   const handleChange = (newValue: Date) => {
  //     setValue(newValue);
  //   };
  useEffect(() => {
    setOffDays(selectedOffDays.map((item) => item.value));
  }, [selectedOffDays]);

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Grid container spacing={4}>
          <SubGrid item sm={3} xs={12}>
            <h2>Dish 1:</h2>
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </SubGrid>
          <SubGrid item sm={9} xs={12}>
            <MyInput
              {...register("recipe")}
              error={errors.recipe}
              style={{ fontSize: "14pt", fontWeight: "bolder" }}
              type="text"
              onChange={(e) => {
                setRecipe(e.target.value);
              }}
            />
            {<p>{errors.recipe?.message}</p>}
            <MyDivider />
            <MyForm onSubmit={handleSubmit(onSubmit)} action="">
              <MyStack>
                <label htmlFor="resto">Restaurant Name :</label>
                <MyInput
                  error={errors.resto}
                  {...register("resto")}
                  id="resto"
                  onChange={(e) => {
                    setResto(e.target.value);
                  }}
                  type="text"
                />
                {<p>{errors.resto?.message}</p>}
                <label htmlFor="price">Price :</label>
                <MyInput
                  {...register("price")}
                  id="price"
                  error={errors.price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                  type="Number"
                />
                {<p>{errors.price?.message}</p>}
                <label htmlFor="address">Address :</label>
                <MyInput
                  {...register("address")}
                  id="address"
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  type="text"
                />
                <React.Fragment>
                  <label htmlFor="Open Hours">Open Hours :</label>
                  <TimeRangePicker
                    startTime={startTime}
                    endTime={endTime}
                    handleEndTimeChange={handleEndTimeChange}
                    handleStartTimeChange={handleStartTimeChange}
                  />

                  <label htmlFor="Off Days">Off Days :</label>
                  {/* <DesktopDatePicker
                    error={errors.time}
                    {...register("time")}
                    value={time}
                    onChange={handleTimeChange}
                    renderInput={(params) => <MyTextField {...params} />}
                  /> */}
                  {/* <Controller
                    name="offDays"
                    control={control}
                    render={({ field }) => (
                      <MySelect
                        {...field}
                        id="offDays"
                        multiple
                        value={offDays}
                        onChange={(e) => {
                          setOffDays(e.target.value);
                          console.log(offDays);
                        }}
                      >
                        {days.map((day) => (
                          <MenuItem key={day} value={day}>
                            {day}
                          </MenuItem>
                        ))}
                      </MySelect>
                    )}
                  /> */}
                  <MySelect
                    {...register("offDays")}
                    id="offDays"
                    multiple
                    value={offDays}
                    onChange={(e) => {
                      setOffDays(e.target.value);
                      console.log(offDays);
                    }}
                  >
                    {days.map((day) => (
                      <MenuItem key={day} value={day}>
                        {day}
                      </MenuItem>
                    ))}
                  </MySelect>

                  {/* <Controller
                    name="offDays"
                    control={control}
                    render={({ field: { ref, ...field } }) => (
                      <MultiSelect
                        {...field}
                        options={options}
                        value={selectedOffDays}
                        onChange={setSelectedOffDays}
                        labelledBy="offDays"
                      />
                    )}
                  /> */}

                  {<p>{errors.offDays?.message}</p>}
                </React.Fragment>
                <label htmlFor="stars">Restaurant Rate:</label>
                <span id="stars">
                  <input
                    name="rating"
                    type="number"
                    hidden
                    value={rating}
                    {...register("rating")}
                    readOnly
                  />
                  <Rating
                    onChange={(e) => {
                      handleRating(e);
                      console.log("run");
                    }}
                    value={rating}
                    icon={<StarIcon fontSize="20pt" />}
                    emptyIcon={<StarBorderIcon fontSize="20pt" />}
                  />
                </span>
                {<p>{errors.rating?.message}</p>}
              </MyStack>
              <MyStack>
                <label htmlFor="website">Website :</label>
                <MyInput
                  {...register("website")}
                  error={errors.website}
                  id="website"
                  onChange={(e) => {
                    setWebsite(e.target.value);
                  }}
                  type="text"
                />
                {<p>{errors.website?.message}</p>}
                <label htmlFor="slogan">Slogan :</label>
                <MyInput
                  {...register("slogan")}
                  error={errors.slogan}
                  id="slogan"
                  onChange={(e) => {
                    setSlogan(e.target.value);
                  }}
                  type="text"
                />
                {<p>{errors.slogan?.message}</p>}
                <label htmlFor="description">Dish Description :</label>
                <MyTextarea
                  error={errors.description}
                  {...register("description")}
                  id="description"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  rows={7}
                />
                {<p>{errors.description?.message}</p>}
                <label htmlFor="rules">Restaurant Rules :</label>
                <MyTextarea
                  error={errors.rules}
                  {...register("rules")}
                  id="rules"
                  onChange={(e) => {
                    setRules(e.target.value);
                  }}
                  rows={7}
                />
                {<p>{errors.rules?.message}</p>}
              </MyStack>
            </MyForm>
          </SubGrid>
          <SubGrid item xs={12}></SubGrid>
        </Grid>
        <ImageAdder text="Dish Images" />
        <span>
          <MyButton onClick={() => reset()}>Cancel</MyButton>
          <MyButton onClick={handleSubmit(onSubmit)} confirm>
            Confirm
          </MyButton>
        </span>
      </LocalizationProvider>
    </div>
  );
}

export default DishForm;

const TimeRangePicker = ({
  startTime,
  endTime,
  handleEndTimeChange,
  handleStartTimeChange,
}) => {
  return (
    <div>
      <TimePicker
        label="from"
        value={startTime}
        onChange={handleStartTimeChange}
        renderInput={(params) => <MyTextField {...params} />}
      />
      <TimePicker
        label="to"
        value={endTime}
        onChange={handleEndTimeChange}
        renderInput={(params) => <MyTextField {...params} />}
      />
    </div>
  );
};
