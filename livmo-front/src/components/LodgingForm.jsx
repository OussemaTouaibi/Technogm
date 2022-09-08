import { Grid, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ImageAdder from "./ImageAdder";
import { yupResolver } from "@hookform/resolvers/yup";
import StarIcon from "@mui/icons-material/Star";
import * as yup from "yup";
import {
  MyDivider,
  MyForm,
  SubGrid,
  MyInput,
  MyTextarea,
  MySelect,
  MyStack,
  MyButton,
} from "./CustomStyled";
function LogdingForm() {
  const [description, setDescription] = useState(
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni voluptatem officiis deserunt sapiente quas repellat quo deleniti dicta eligendi explicabo? Aperiam asperiores impedit, commodi error atque ipsa eligendi quidem quam perspiciatis ratione autem maxime quae dolorem a placeat sint ullam illo cum nisi vero, pariatur ducimus beatae! Dolorum, eius!"
  );
  const [website, setWebsite] = useState("http://www.movenpick.com");
  const [name, setName] = useState("Movenpick Hotel");
  const [address, setAddress] = useState("Tunis 23 rue taieb mhiri 1003");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(160);
  const [rating, setRating] = useState(3);

  //yup
  const schema = yup
    .object({
      name: yup.string().required(),
      category: yup.string().required(),
      type: yup.string().required().min(5).max(20),
      website: yup.string().required().url(),
      address: yup.string().required(),
      description: yup.string().required(),
      price: yup.number().positive().integer().required(),
      rating: yup.number().required().min(1).max(5),
    })
    .required();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name,
      category,
      website,
      address,
      type,
      price,
      description,
      rating,
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  const handleRating = (e) => {
    setRating(parseInt(e.target.value));
  };
  const types = ["Hotel", "House", "Residence", "Studio"];
  const categories = ["Non-regular", "Regular", "whatever"];

  return (
    <div>
      <Grid container spacing={4}>
        <SubGrid item sm={3} xs={12}>
          <h2>Logding 1:</h2>
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </SubGrid>
        <SubGrid item sm={9} xs={12}>
          <MyInput
            {...register("name")}
            name="name"
            style={{ fontSize: "14pt", fontWeight: "bolder" }}
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          {<p>{errors.name?.message}</p>}
          <MyDivider />
          <MyForm onSubmit={handleSubmit(onSubmit)} action="">
            <MyStack>
              <label htmlFor="category">Lodging Category:</label>
              <MySelect
                {...register("category")}
                id="category"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  console.log(category);
                }}
              >
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </MySelect>
              {<p>{errors.category?.message}</p>}

              <label htmlFor="price">Price per night:</label>
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

              <label htmlFor="stars">Hotel Stars:</label>
              <div className="stars">
                {Array.from({ length: rating }).map((rate, index) => (
                  <StarIcon color="primary" key={index} />
                ))}
              </div>
            </MyStack>
            <MyStack>
              <label htmlFor="type">Lodgin type :</label>
              <MySelect
                {...register("type")}
                id="type"
                value={type}
                onChange={(e) => {
                  setType(e.target.value);
                  console.log(type);
                }}
              >
                {types.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </MySelect>
              {<p>{errors.type?.message}</p>}
              <label htmlFor="address">Address :</label>
              <MyInput
                {...register("address")}
                id="address"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                type="text"
              />

              <label htmlFor="description">Description :</label>
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

              <MyButton style={{ margin: "8px 0" }} confirm>
                Save edits
              </MyButton>
            </MyStack>
          </MyForm>
        </SubGrid>
        <SubGrid item xs={12}></SubGrid>
      </Grid>
      <ImageAdder text="Hotel Images" />
    </div>
  );
}

export default LogdingForm;
