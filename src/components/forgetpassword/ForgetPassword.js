import React from "react";
import { Image, Form ,Button} from "react-bootstrap";
import Banner from "../../assets/Images/Banner.png";
import LogoB from "../../assets/Images/mrm_logo_g.png";
import "./ForgetPassword.css";

const ForgetPassword = () => {
  return (
    <div className="d-flex ">
      <div className="mx-0 px-0 banner-image-container">
        <Image className="banner-image" src={Banner} />
        <div className="banner-logo-container mt-5">
        <Image className="banner-logo" src={LogoB} />
        </div>
      </div>
      <div className="login-input mx-5 px-3">
        <div className="forget-input-form">
          <h4 className="text-start">Forget Password</h4>
          <Form>
            <Form.Group className="mb-3 my-4" controlId="formGroupEmail">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Button className="forget-btn py-2 my-5">Reset Button</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
