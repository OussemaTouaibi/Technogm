import { Grid, MenuItem } from "@mui/material";
import React, { useState, useRef } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
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
import * as yup from "yup";
import axios from "axios";
import { useContext } from "react";
import DataContext from "../contexts/DataContext";
import { upload } from "@testing-library/user-event/dist/upload";

function TransportForm() {
  const [rules, setRules] = useState(
    "No smoking or food is allowed inside the vehicule. No smoking or food is allowed inside the vehicule. No smoking or food is allowed inside the vehicule. No smoking or food is allowed inside the vehicule. No smoking or food is allowed inside the vehicule. No smoking or food is allowed inside the vehicule. No smoking or food is allowed inside the vehicule. No smoking or food is allowed inside the vehicule. No smoking or food is allowed inside the vehicule."
  );
  const [seats, setSeats] = useState(5);
  const [governorate, setGovernorate] = useState("");
  const [regularity, setRegularity] = useState("");
  const [price, setPrice] = useState(160);
  const [name, setName] = useState("Seat Ibiza");
  const { images, setImages } = useContext(DataContext);

  //yup
  const schema = yup
    .object({
      name: yup.string().required(),
      regularity: yup.string().required(),
      governorate: yup.string().required(),
      seats: yup.number().positive().min(1).max(9).required(),
      rules: yup.string().required(),
      price: yup.number().positive().integer().required(),
    })
    .required();

  const {
    control,
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      regularity,
      name,
      seats,
      governorate,
      price,
      rules,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    Object.keys(data).map((key) => {
      formData.append(key, data[key]);
    });
    formData.append("images", uploadedFiles);
    axios
      .post("http://localhost:4000/transport", formData)
      .catch((err) => console.log(err));
  };
  const regularities = ["Non-regular", "Regular", "whatever"];
  const govsList = [
    "Ariana",
    "Beja",
    "Ben Arous",
    "Bizerte",
    "Gabes",
    "Gafsa",
    "Jendouba",
    "Kairouan",
    "Kasserine",
    "Kebili",
    "Kef",
    "Mahdia",
    "Manouba",
    "Medenine",
    "Monastir",
    "Nabeul",
    "Sfax",
    "Sidi Bouzid",
    "Siliana",
    "Sousse",
    "Tataouine",
    "Tozeur",
    "Tunis",
    "Zaghouan",
  ];
  const [uploadedFiles, setUploadedFiles] = useState();
  const uploader = useRef();
  const handleClick = () => {
    uploader.current.click();
  };
  const handleChange = (e) => {
    setUploadedFiles(e.target.files);
    console.log(uploadedFiles);
  };
  return (
    <div>
      <Grid container spacing={4}>
        <SubGrid item sm={3} xs={12}>
          <h2>Transport 1:</h2>
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
          <MyForm
            onSubmit={handleSubmit(onSubmit)}
            encType="multipart/form-data"
            action=""
          >
            <MyStack>
              <label htmlFor="regularity">Regularity :</label>
              <MySelect
                {...register("regularity")}
                id="regularity"
                value={regularity}
                onChange={(e) => {
                  setRegularity(e.target.value);
                  console.log(regularity);
                }}
              >
                {regularities.map((reg) => (
                  <MenuItem key={reg} value={reg}>
                    {reg}
                  </MenuItem>
                ))}
              </MySelect>
              {<p>{errors.regularity?.message}</p>}
              <label htmlFor="governorate">Governorate :</label>
              <MySelect
                {...register("governorate")}
                id="governorate"
                value={governorate}
                onChange={(e) => {
                  setGovernorate(e.target.value);
                  console.log(governorate);
                }}
              >
                {govsList.map((gov) => (
                  <MenuItem key={gov} value={gov}>
                    {gov}
                  </MenuItem>
                ))}
              </MySelect>

              {<p>{errors.governorate?.message}</p>}
              <label htmlFor="price">Price per Day:</label>
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
              <label htmlFor="seats">seats :</label>
              <MyInput
                {...register("seats")}
                id="seats"
                onChange={(e) => {
                  setSeats(e.target.value);
                }}
                type="number"
              />
              {<p>{errors.seats?.message}</p>}
            </MyStack>
            <MyStack>
              <label htmlFor="rules">Vehicule Rules :</label>
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
              <AddImage onClick={handleClick}>
                <input
                  onChange={handleChange}
                  multiple
                  type="file"
                  name="images"
                  hidden
                  ref={uploader}
                  accept=".jpg"
                />
                <AddIcon sx={{ fontSize: 80 }} />
                <h3>Add image</h3>
              </AddImage>
            </MyStack>
          </MyForm>
        </SubGrid>
        <SubGrid item xs={12}></SubGrid>
      </Grid>

      <div>
        <MyButton
          onClick={() => {
            reset(
              {
                regularity: "",
                name: "",
                seats: "",
                governorate: "",
                price: 0,
                rules: "",
                images: [],
              },
              {
                keepErrors: true,
                keepDirty: true,
                keepIsSubmitted: false,
                keepTouched: false,
                keepIsValid: false,
                keepSubmitCount: false,
              }
            );
          }}
          style={{ margin: "8px 0" }}
        >
          Cancel
        </MyButton>
        <MyButton
          onClick={handleSubmit(onSubmit)}
          style={{ margin: "8px 0" }}
          confirm
        >
          Confirm
        </MyButton>
      </div>
    </div>
  );
}

export default TransportForm;
const AddImage = styled.div`
  /* border: 4px #e42651 dashed; */
  width: 100%;
  cursor: pointer;
  border-radius: 16px;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 12px;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='16' ry='16' stroke='%23E42651FF' stroke-width='4' stroke-dasharray='30%2c30' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
`;
