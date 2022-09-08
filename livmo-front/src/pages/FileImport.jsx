import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { createRef } from "react";
import Dashboard from "./Dashboard";
function FileImport() {
  //   const [name, setName] = useState("");
  //   const [rne, setRne] = useState("");
  //   const [id, setId] = useState(0);
  const [hosts, setHosts] = useState([]);
  const [licence, setLicence] = useState(null);
  const handleLicence = (e) => {
    setLicence(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(document.querySelector("form"));
    formData.append("licence", licence);
    axios
      .post("http://localhost:4000/hosts", formData)
      .then(() => console.log("it works"))
      .catch((err) => {
        console.log(err);
      });
  };
  const getHosts = async () => {
    axios
      .get("/hosts")
      .then((res) => setHosts(res.data))
      .then((res) => console.log(hosts))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getHosts();
  }, []);

  return (
    <div style={{ padding: "48px" }}>
      <form method="post" encType="multipart/form-data">
        <input onChange={handleLicence} type="file" name="licence" />
        {/* <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          name="name"
        />
        <input
          type="text"
          onChange={(e) => {
            setRne(e.target.value);
          }}
          name="rne"
        />
        <input
          type="text"
          onChange={(e) => {
            setId(e.target.value);
          }}
          name="id"
        /> */}
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </form>
      <Dashboard hosts={hosts} />
    </div>
  );
}

export default FileImport;
