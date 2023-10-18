import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Image, Form, Button } from "react-bootstrap";
import Banner from "../../assets/Images/Banner.png";
import LogoB from "../../assets/Images/mrm_logo_g.png";
import "./Signup.css";
import { useDispatch } from "react-redux";
import { signUpUser } from "../../redux/authSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate,Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const dispatch = useDispatch();
  let { email } = useParams();
  console.log(email,password,confirm_password);
  const [errors, setErrors] = useState("");
  // const navigate = useNavigate();

  const handlePasswordChange = (event) => {
    // if (event.target.value.length > 0) {
    //   setShowEyePass(true);
    // } else {
    //   setShowEyePass(false);
    // }
    const inputPassword = event.target.value;

    setPassword(inputPassword);
    // Clear the error for password field if it becomes non-empty

    if (errors.password && inputPassword.trim().length > 8) {
      const updatedErrors = { ...errors };

      delete updatedErrors.password;

      setErrors(updatedErrors);
    }
  };
  const handleConfirmPasswordChange = (event) => {
    // if (event.target.value.length > 0) {
    //   setShowEye(true);
    // } else {
    //   setShowEye(false);
    // }
    const inputPassword = event.target.value;

    setConfirm_password(inputPassword);

    // Clear the error for password field if it becomes non-empty

    if (errors.confirm_password && inputPassword.trim().length > 8) {
      const updatedErrors = { ...errors };

      delete updatedErrors.confirm_password;

      setErrors(updatedErrors);
    }
    if (errors.confirm_password_matches && inputPassword===password) {
      const updatedErrors = { ...errors };

      delete updatedErrors.confirm_password_matches;

      setErrors(updatedErrors);
    }
  };
  const isPasswordValid = (inputPassword) => {
    // Implement your own password validation logic

    return inputPassword.trim().length > 8;
  };
  const isConfirmPasswordValid = (inputPassword) => {
    // Implement your own password validation logic

    return inputPassword.trim().length > 8  
  };
  const isPasswordMatches =(inputPassword)=>{
    return inputPassword ===password
  }
  const body={
    "email": email,
    "password": password,
    "confirm_password": confirm_password
   }
  const handleSignUp = (e) => {
    e.preventDefault();
    const validationErrors = {};
   
    if (!isPasswordValid(password)) {
      validationErrors.password = "Please enter a valid password";
    }
    if (!isConfirmPasswordValid(confirm_password)) {
      validationErrors.confirm_password = "Please enter a valid password";
    }
    if(!isPasswordMatches(confirm_password)){
      validationErrors.confirm_password_matches = "Password and Confirm does not match";
    }
    // dispatch(signUpUser(body)) 
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // return;
    }else{
      setPassword("");
      setConfirm_password("");
      dispatch(signUpUser(body)) 
      setErrors({});
      console.log("test")   
      setTimeout(() => {
        navigate('/')
      }, 3000);
    }
  };

  return (
    <div className="d-flex ">
      <div className="mx-0 px-0 banner-image-container">
        <Image className="banner-image" src={Banner} />
        <div className="banner-logo-container mt-5">
          <Image className="banner-logo" src={LogoB} />
        </div>
      </div>
      <div className="signup-input mx-5 px-3">
      <ToastContainer />
        <div className="signup-input-form text-start">
          <p>
            <b>Welcome to Rx Laser (Prescription Rental Platform)</b>
          </p>
          <p>
            <b>{email}</b>
          </p>
          <p>
            Your veterinarian has invited you to the platform, Set up your
            account to access your prescription.
          </p>
          <h4 className="text-start">Sign Up</h4>
          <Form onSubmit={handleSignUp}>
            <Form.Group className="mb-3 my-4" controlId="formGroupEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                disabled
              />
            </Form.Group>
            <Form.Group className="mb-3 mt-4" controlId="formGroupPassword">
              <Form.Control type="password" value={password} placeholder="Password" onChange={handlePasswordChange}  isInvalid={!!errors.password}/>
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3 mt-4" controlId="formGroupPassword">
              <Form.Control type="password" value={confirm_password} placeholder="Confirm Password" onChange={handleConfirmPasswordChange}  isInvalid={!!errors.confirm_password || !!errors.confirm_password_matches}/>
              <Form.Control.Feedback type="invalid">
                {errors.confirm_password_matches ||errors.confirm_password}
              </Form.Control.Feedback>
            </Form.Group>
            {/* <p className="mb-4 text-end forget-password">Forget Password ?</p> */}
            <Button type="submit" className="signup-btn py-2">
              SIGN UP
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
