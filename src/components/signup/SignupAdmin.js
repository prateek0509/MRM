import React from 'react'
import { useParams } from "react-router";
import { Image, Form ,Button} from "react-bootstrap";
import Banner from "../../assets/Images/BannerB.png";
import LogoB from "../../assets/Images/mrm_logo_g.png";
import './Signup.css'

const SignupAdmin = () => {
    let { email } = useParams();
    console.log(email)
  return (
    <div className="d-flex ">
      <div className="mx-0 px-0 banner-image-container">
        <Image className="banner-image" src={Banner} />
        <div className="banner-logo-container mt-5">
        <Image className="banner-logo" src={LogoB} />
        </div>
      </div>
      <div className="signup-input mx-5 px-3">
        <div className="signup-input-form text-start">
            <p><b>Welcome to MRM</b></p>
            <p><b>{email}</b></p>
            <p>Your Admin has invited you to the platform</p>
          <h4 className="text-start">Sign Up</h4>
          <Form>
            <Form.Group className="mb-3 my-4" controlId="formGroupEmail">
              <Form.Control type="email" placeholder="Email" value={email} disabled/>
            </Form.Group>
            <Form.Group className="mb-3 mt-4" controlId="formGroupPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3 mt-4" controlId="formGroupPassword">
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
            {/* <p className="mb-4 text-end forget-password">Forget Password ?</p> */}
            <Button className="signup-btn py-2">SIGN UP</Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default SignupAdmin