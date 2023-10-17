import {useState} from "react";
import { Image, Form ,Button} from "react-bootstrap";
import Banner from "../../assets/Images/Banner.png";
import LogoB from "../../assets/Images/mrm_logo_g.png";
import "./Login.css";
import { useDispatch } from "react-redux";
import { signinuser } from "../../redux/authSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [password,setPassword] = useState("")
  const [email,setEmail] = useState("")
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const body={
    "username": email,
    "email": email,
    "password": password
   }

   const isEmailValid = (inputEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(inputEmail);
  };
  const isPasswordValid = (inputPassword) => {
    return inputPassword.trim().length > 8;
  };
  const handlePasswordChange = (event) => {
    // if (event.target.value.length > 0) {
    //   setShowEye(true)
    // } else {
    //   setShowEye(false)
    // }

    const inputPassword = event.target.value;
    setPassword(inputPassword);

    if (errors.password && inputPassword.trim().length > 8) {
      const updatedErrors = { ...errors };
      delete updatedErrors.password;
      setErrors(updatedErrors);
    }
  };
  
  const handleEmailChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);

    if (errors.email && isEmailValid(inputEmail)) {
      const updatedErrors = { ...errors };
      delete updatedErrors.email;
      setErrors(updatedErrors);
    }
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!isEmailValid(email)) {
      validationErrors.email = 'Please enter a valid email address.';
    }


    if (!isPasswordValid(password)) {
      validationErrors.password = 'Please enter a valid password';
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }else{
      setPassword('');
      setEmail("");
      setErrors({});
      dispatch(signinuser(body)) 
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
      <div className="login-input mx-5 px-3">
      <ToastContainer />
        <div className="login-input-form">
          <h4 className="text-start">Log In</h4>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3 my-4" controlId="formGroupEmail">
              <Form.Control  type="text" value={email} placeholder="Username"  onChange={handleEmailChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3 mt-4" controlId="formGroupPassword">
              <Form.Control  type="password" value={password} placeholder="Password" onChange={handlePasswordChange}
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
            </Form.Group>
            <p className="mb-4 text-end forget-password">Forget Password ?</p>
            <Button type='submit' className="login-btn py-2">LOGIN</Button>
          </Form>
        </div>
        
                </div>

                <div>
      </div>
    </div>
  );
};

export default Login;
