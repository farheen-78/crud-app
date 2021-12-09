import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import firebase from "./config/firebase";
import "../App.css";
const DetailRecord = () => {
  const { id } = useParams();

  const [user, setUser] = useState({});
  console.log(id);
  useEffect(() => {
    firebase
      .database()
      .ref(`users/${id}`)
      .on("value", (data) => {
        setUser(data.val());
      });
  }, []);
  return (
    <div>
      {/* <div class="d-flex justify-content-end"> */}
      <Link type="button" className="btn btn-warning p-4" to="/">
        Back to home
      </Link>
      {/* </div> */}
      <div className="d-flex justify-content-center p-4 ">
        <ul className="list-group w-50 px-3 ">
          <li className="list-group-item active " aria-current="true">
            User Details
          </li>
          Full Name:
          <li className="list-group-item col fw-bold text-center">
            {user.fname}
          </li>
          Email:
          <li className="list-group-item col fw-bold  text-center">
            {user.email}
          </li>
          Phone#:
          <li className="list-group-item col fw-bold text-center">
            {user.phone}
          </li>
          Website:
          <li className="list-group-item col fw-bold text-center">
            {user.website}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DetailRecord;
