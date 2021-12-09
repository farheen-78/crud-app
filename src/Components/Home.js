import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import firebase from "./config/firebase";
import { GrView } from "react-icons/gr";
import { FiEdit3 } from "react-icons/fi";
import axios from "axios";
import { LocalLaundryServiceSharp } from "@mui/icons-material";
const Home = () => {
  const [users, setusers] = useState([]);
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = () => {
    let arr = [];
    firebase
      .database()
      .ref("users")
      .on("child_added", (data) => {
        arr.push(data.val());
        // console.log(data.val());
        setusers(arr);
      });
  };
  const deleteItem = (id) => {
    firebase.database().ref(`users/${id}`).remove();
    loadUser();
  };

  return (
    <div className="tab py-4">
      <table className="table border-light shadow">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Full Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, ind) => (
            <tr>
              <th scope="row">{ind + 1}</th>
              <td>{item.fname}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>
                <Link
                  className="btn btn-primary mr-3"
                  to={`/detailRecord/${item.id}`}
                >
                  <GrView />
                </Link>
                <Link
                  className="btn btn-outline-danger"
                  to={`/edit/${item.id}`}
                >
                  <FiEdit3 />
                </Link>
                <Link
                  className="btn btn-info"
                  to="#"
                  onClick={() => deleteItem(item.id)}
                >
                  Del
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
