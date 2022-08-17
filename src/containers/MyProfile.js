import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from '../components/Navigation'
function MyProfile() {
  const accessToken = window.localStorage.getItem("accessToken");
  const [isLoading, setIsLoading] = useState(true);
  // get userById from authToken
  function parseJwt(token) {
   
    // const [isLoading, setIsLoading] = useState(true);
    var base64Url = token.split(".")[1];
    var base64 = decodeURIComponent(
      atob(base64Url)
        .split("")
        .map((c) => {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(base64);
  }
  let a = parseJwt(accessToken);
  let userId = a._id;
  
  const [users, setUsers] = useState({});
  const getUsers = async () => {
    try {
      const data= await axios.get(`http://localhost:5000/api/user/find/${userId}`);

      setUsers(data);
      console.log(data)
       setIsLoading(false);

    } catch(error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
          <Navigation />
      <div className="container p-3 m-3 mx-auto d-flex justify-content-center">
        <table className="table">
          <thead>
            <tr>
              <th>UserId</th>
              {/* <th>Name</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>Address</th>
              <th>Pincode</th> */}
              {/* <th>Action</th> */}
            </tr>
          </thead>

          <tbody>
            {users.map &&
              users.map((u, index) => {
                return (
                  <tr key={index}>
                    <td className="text-start">{u.name}</td>
                    {/* <td className="text-start">{u.name}</td>
                    <td className="text-start">{u.email}</td>
                    <td className="text-start">{u.mobile}</td>
                    <td className="text-start">{u.address}</td>
                    <td className="text-start">{u.pincode}</td> */}
                   
                      {/* <td>
                        <div>
                            <Link to="/updateprofile">
                          <button className="btn btn-info btn-sm">
                            <span
                              className="iconify"
                              data-icon="bxs:edit"
                              color="blue"
                            ></span>
                          </button>
                                    </Link>
                        </div>
                      </td> */}
                    
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyProfile;
