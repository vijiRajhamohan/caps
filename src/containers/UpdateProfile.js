import React from "react";
import { Formik, Field, Form } from "formik";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import swal from 'sweetalert'

function UpdateProfile() {
  const INTIAL = {
    name: "",
    email: "",
    password: "",
    mobile: "",
    address: "",
    pincode: "",
  };

  const navigate = useNavigate();
  const [user, setUser] = React.useState({
    INTIAL,
  });

  const handleChange = ({ target: { name, value } }) => {
    setUser({user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/user/:id";
      const res = await axios.put(url, user);
      console.log(res);
      alert("Update Successfully");
      navigate("/home");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div>
        <div
          class="container-fluid d-flex "
          style={{ backgroundColor: "#BF2758" }}
        >
          <img src="./image/f.png" alt="img" width="100" height="50" />
          <span>
            <p class="text-white fs-1">PETTI SHOP</p>
          </span>
        </div>

        <div className="row  m-2 d-flex justify-content-center  h-100">
          <div className=" col-md-3 col-lg-2 col-xl-5 ">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              alt=""
              className="img-fluid"
              style={{
                borderTopLeftRadius: ".25rem",
                borderBottomLeftRadius: " .25rem",
              }}
            />
          </div>

          <div className=" col-md-9 col-lg-10 col-xl-6 offset-xl-1">
            <div className="card-body p-md-5 text-black">
              <h3 className="mb-5 text-uppercase">My Profile</h3>
              <Formik
                initialValues={user}
                // validate={validate}
                onSubmit={handleSubmit}
              >
                {({ errors, touched, handleBlur }) => {
                  return (
                    <Form id="register-form" onSubmit={handleSubmit}>
                      

                      <div className="row form-group">
                   
                       
                       <div className="  mb-4">
                          <label htmlFor="mobile_number">
                            Mobile Number <span className="text-danger">*</span>
                          </label>

                          <Field
                            name="mobile"
                            type="text"
                            onChange={handleChange}
                            value={user.mobile}
                            onBlur={handleBlur}
                            id="mobile"
                            required
                            className="form-control "
                            placeholder="Enter the mobile number"
                          />
                          {touched.mobile_number && (
                            <span className="text-danger">
                              {errors.mobile_number}
                            </span>
                          )}
                          {/* <ErrorMessage className="text-danger" name="mobile" /> */}
                        </div>
                      </div>

                      <div className="form-outline mb-4">
                        <label htmlFor="address">
                          Address<span className="text-danger">*</span>
                        </label>

                        <Field
                          name="address"
                          type="text"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={user.address}
                          id="address"
                          required
                          className="form-control "
                          placeholder="Enter the address"
                        />
                        {touched.address && (
                          <span className="text-danger">{errors.address}</span>
                        )}
                        {/* <ErrorMessage className="text-danger" name="address" /> */}
                      </div>
                      <div className="row">
                        <div className=" mb-4">
                          <label htmlFor="pincode">
                            Pincode
                            <span className="text-danger">*</span>
                          </label>

                          <Field
                            name="pincode"
                            type="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={user.pincode}
                            id="pincode"
                            required
                            className="form-control "
                            placeholder="Enter the pincode"
                          />
                          {touched.pincode && (
                            <span className="text-danger">
                              {errors.pincode}
                            </span>
                          )}
                          {/* <ErrorMessage className="text-danger" name="pincode" /> */}
                        </div>
                      </div>

                      <div className="d-flex justify-content-end pt-3">
                       
                       
                        <button
                          type="submit"
                          id="submit"
                          className=" btn btn-primary  btn-lg ms-2"
                        >
                          Update
                        </button>
                  
                      </div>
                    </Form>
                  );
                }}
              </Formik>
              );
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateProfile;
