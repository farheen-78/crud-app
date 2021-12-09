// import React, { useEffect, useState } from "react";
// import firebase from "./config/firebase";
// import { useParams, useHistory } from "react-router-dom";

// const EditUser = (props) => {
//   //let id = props.match.params;
//   //console.log("id", id);
//   // console.log("ss", ss);
//   let { id } = useParams();
//   // console.log(id);
//   let history = useHistory();

//   const [user, setUser] = useState({
//     id: "",
//     fname: "",
//     email: "",
//     phone: "",
//     website: "",
//   });

//   useEffect(() => {
//     // let ar = [];
//     // firebase
//     //   .database()
//     //   .ref(`users/`)
//     //   .on("child_added", (data) => {
//     firebase
//       .database()
//       .ref(`users/${id}`)
//       .on("child_added", (data) => {
//         setUser(data.val());
//       });
//   }, []);

//   // let ff = arr.filter((y) => {
//   //   alert("hhh", y);
//   // });
//   // console.log("ffff", ff);
//   return <div>{user.id}</div>;
// };

// export default EditUser;
//=======================================================
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import AddIcon from "@mui/icons-material/Add";
import { useParams, useHistory } from "react-router-dom";
import firebase from "./config/firebase";

const EditUser = () => {
  let history = useHistory();
  let { id } = useParams();
  const [user, setUser] = useState({});
  // const [user, setUser] = useState({
  //   id: "",
  //   fname: "",
  //   email: "",
  //   phone: "",
  //   website: "",
  // });
  useEffect(() => {
    firebase
      .database()
      .ref(`users/${id}`)
      .on("value", (data) => {
        setUser(data.val());
        //const aa = data.val();
        //console.log("aa", aa);
      });
  }, []);

  const submitUser = (e) => {
    e.preventDefault();

    firebase
      .database()
      .ref(`users/${id}`)
      .set(user)

      .then(() => {
        alert("User data saved ");
        setUser({ fname: "", email: "", phone: "", website: "" });
        history.push("/");
      })
      .catch((err) => console.log(err));
  };
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
          <h1> Edit A User </h1>

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
              Edit
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

export default EditUser;
