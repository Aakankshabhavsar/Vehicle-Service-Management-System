import React from "react";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import AdminNavbar from "./Navbar/AdminNavbar";

function AdminMakeMechanic() {
  const MechanicObject = {
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
    mobileNo: "",
    address: "",
    skills: "",
    salary: ""
  };

  const [mechanic, setMechanic] = useState(MechanicObject);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const resp = axios
      .post(`http://localhost:9000/Mechanic-api`, mechanic)
      .then((res) => {


        alert("user registered succesfully");
        navigate("/admin/mechanic");

      })
      .catch((error) => alert("user failed to registered"));

  };

  return (
    <div>
      <div className="reqcont" >
        <AdminNavbar />
      </div>

      <div className="margintop" style={{ margin: "20px 250px" }}>
        <div className="row">
          <div className="card col-md-6 offset-md-2 offset-md-2">
            <div className=" card-header text-center">
              {" "}
              <h5 className="card-title text-dark" style={{ textSize: "50px" }}>
                Registration Form
              </h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-2">
                  <label> First Name: </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                    name="firstName"
                    {...register("requiredFirst", { required: true })}
                    value={mechanic.firstName}
                    onChange={(event) => {
                      setMechanic({
                        ...mechanic,
                        firstName: event.target.value,
                      });
                    }}
                  />
                  {errors.requiredFirst && (
                    <p className="text-danger">First name is required</p>
                  )}
                </div>
                <div className="form-group mb-2">
                  <label> Last Name: </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    className="form-control"
                    {...register("requiredLast", { required: true })}
                    value={mechanic.lastName}
                    onChange={(event) => {
                      setMechanic({
                        ...mechanic,
                        lastName: event.target.value,
                      });
                    }}
                  />
                  {errors.requiredLast && (
                    <p className="text-danger">Last name is required</p>
                  )}
                </div>
                <div className="form-group mb-2">
                  <label> Email Id: </label>
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="form-control"
                    name="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "enter emailid e.g. abc@gmail.com",
                      },
                    })}
                    value={mechanic.email}
                    onChange={(event) => {
                      setMechanic({ ...mechanic, emailId: event.target.value });
                    }}
                  />

                  {errors.email ? (
                    <>
                      {errors.email.type === "required" && (
                        <p style={{ color: "red" }}>{errors.email.message}</p>
                      )}
                      {errors.email.type === "pattern" && (
                        <p style={{ color: "red" }}>{errors.email.message}</p>
                      )}
                    </>
                  ) : null}
                </div>
                <div className="form-group mb-2">
                  <label> Password: </label>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="form-control"
                    {...register("password", {
                      required: "Password is required",
                      pattern: {
                        value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                        message:
                          "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters",
                      },
                    })}
                    value={mechanic.password}
                    onChange={(event) => {
                      setMechanic({
                        ...mechanic,
                        password: event.target.value,
                      });
                    }}
                  />

                  {errors.password ? (
                    <>
                      {errors.password.type === "required" && (
                        <p style={{ color: "red" }}>
                          {errors.password.message}
                        </p>
                      )}
                      {errors.password.type === "pattern" && (
                        <p style={{ color: "red" }}>
                          {errors.password.message}
                        </p>
                      )}
                    </>
                  ) : null}
                </div>
                <div className="form-group mb-2">
                  <label>Confirm Password: </label>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    className="form-control"
                    {...register("confirmPassword", {
                      required: true,
                      validate: {
                        matchesPassword: (value) => {

                          return value === mechanic.password || "Passwords do not match";
                        }
                      }
                    })}


                  />

                  {errors.confirmPassword && <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>}
                </div>

                <div className="form-group mb-2">
                  <label> Mobile No: </label>
                  <input
                    type="number"
                    placeholder="mobile no"
                    name="mobile"
                    className="form-control"
                    {...register("mobileno", {
                      required: "Mobile no is required",
                      pattern: {
                        value: /^\d{10}$/,
                        message: "Enter 10 digit mobile no",
                      },
                    })}
                    value={mechanic.phone}
                    onChange={(event) => {
                      setMechanic({
                        ...mechanic,
                        mobileNo: event.target.value,
                      });
                    }}
                  />

                  {errors.mobileno ? (
                    <>
                      {errors.mobileno.type === "required" && (
                        <p style={{ color: "red" }}>
                          {errors.mobileno.message}
                        </p>
                      )}
                      {errors.mobileno.type === "pattern" && (
                        <p style={{ color: "red" }}>
                          {errors.mobileno.message}
                        </p>
                      )}
                    </>
                  ) : null}
                </div>
                <div className="form-group mb-2">
                  <label> Address: </label>
                  <input
                    type="textarea"
                    placeholder="Address "
                    name="address"
                    className="form-control"
                    {...register("address", {
                      required: "Address is required",
                      maxLength: {
                        value: 255,
                        message: "address can contain max 255 character",
                      },
                    })}
                    value={mechanic.address}
                    onChange={(event) => {
                      setMechanic({ ...mechanic, address: event.target.value });
                    }}
                  />

                  {errors.address ? (
                    <>
                      {errors.address.type === "required" && (
                        <p style={{ color: "red" }}>{errors.address.message}</p>
                      )}
                      {errors.address.type === "maxLength" && (
                        <p style={{ color: "red" }}>{errors.address.message}</p>
                      )}
                    </>
                  ) : null}
                </div>
                <div className="form-group mb-2">
                  <label> skills: </label>
                  <input
                    type="text"
                    placeholder="skills "
                    name="skills"
                    className="form-control"
                    {...register("skills", {
                      required: "skills is required",
                      maxLength: {
                        value: 255,
                        message: "skills can contain max 255 character",
                      },
                    })}
                    value={mechanic.skills}
                    onChange={(event) => {
                      setMechanic({ ...mechanic, skills: event.target.value });
                    }}
                  />

                  {errors.skills ? (
                    <>
                      {errors.skills.type === "required" && (
                        <p style={{ color: "red" }}>{errors.skills.message}</p>
                      )}
                      {errors.skills.type === "maxLength" && (
                        <p style={{ color: "red" }}>{errors.skills.message}</p>
                      )}
                    </>
                  ) : null}
                </div>

                <div className="mb-3">
                  <button
                    className="btn btn-primary"
                    //   onClick={this.saveOrUpdateMechanic}
                    type="submit"
                  >
                    Register
                  </button>
                  <button
                    className="btn btn-primary "
                    //     onClick={this.cancel.bind(this)}
                    onClick={() => {
                      navigate("/admin/mechanic");
                    }}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminMakeMechanic;
