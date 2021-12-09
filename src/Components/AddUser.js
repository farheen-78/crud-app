import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import AddIcon from "@mui/icons-material/Add";
import { useHistory } from "react-router-dom";
import firebase from "./config/firebase";

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    id: "",
    fname: "",
    email: "",
    phone: "",
    website: "",
  });

  // const [allRecord, setallRecord] = useState([]);

  const submitUser = (e) => {
    e.preventDefault();
    let key = firebase.database().ref("users").push().key;
    let obj = {
      id: key,
      fname: user.fname,
      email: user.email,
      phone: user.phone,
      website: user.website,
    };
    firebase
      .database()
      .ref(`users/${key}`)
      .set(obj)

      .then(() => {
        alert("User data saved ");
        setUser({ fname: "", email: "", phone: "", website: "" });
        history.push("/");
      })
      .catch((err) => console.log(err));

    //*****************************

    //console.log(obj);
  };
  // const newRecord = { ...user, id: new Date().getTime.toString() };
  // setallRecord([...allRecord, newRecord]);

  // console.log("user", user);
  //    console.log("all record", allRecord);
  //setUser({ fname: "", email: "", phone: "", website: "" });

  const addUser = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  return (
    <>
      {/* <form action="" method="POST"> */}
      <div className="con mt-4">
        <Card className="card1">
          <h1> Add A User </h1>

          <input
            className="form-control form-control"
            type="text"
            name="fname"
            value={user.fname}
            onChange={(e) => addUser(e)}
            autoComplete="off"
            placeholder="Full Name"
            aria-label=".form-control-lg example"
          />
          <input
            className="form-control "
            type="text"
            name="email"
            value={user.email}
            onChange={(e) => addUser(e)}
            autoComplete="off"
            placeholder="E-mail"
            aria-label="default input example"
          />
          <input
            className="form-control mt-3 form-control-sm"
            type="text"
            name="phone"
            value={user.phone}
            onChange={(e) => addUser(e)}
            autoComplete="off"
            placeholder="Phone No"
            aria-label=".form-control-sm example"
          />
          <input
            className="form-control mt-3 form-control-sm"
            type="text"
            name="website"
            value={user.website}
            onChange={(e) => addUser(e)}
            autoComplete="off"
            placeholder="Enter your Website"
            aria-label=".form-control-sm example"
          />
          <div
            className="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
            mt-4
          >
            <button
              type="submit"
              onClick={submitUser}
              className="btn btn-info mt-3"
            >
              Submit
            </button>

            {/* <button type="button" className="btn btn-light mt-3">
              <AddIcon />
            </button> */}
          </div>
        </Card>
      </div>
      {/* </form> */}
    </>
  );
};

export default AddUser;
