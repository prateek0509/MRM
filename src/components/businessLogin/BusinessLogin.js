import React from "react";
import { Image, Form ,Button} from "react-bootstrap";
import BannerB from "../../assets/Images/BannerB.png";
import LogoB from "../../assets/Images/mrm_logo_g.png";
import "./BusinessLogin.css";

const BusinessLogin = () => {
  return (
    <div className="d-flex ">
      <div className="mx-0 px-0 banner-image-container">
        <Image className="banner-image" src={BannerB} />
        <div className="banner-logo-container mt-5">
        <Image className="banner-logo" src={LogoB} />
        </div>
      </div>
      <div className="login-input mx-5 px-3">
        <div className="login-input-form">
            <p className="text-start">Welcome!</p>
            <h5 className="text-start" style={{color:"rgba(0, 83, 139, 1)"}}><b>Marina Anderson</b></h5>
          <h4 className="text-start">Log In</h4>
          <Form>
            <Form.Group className="mb-3 my-4" controlId="formGroupEmail">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3 mt-4" controlId="formGroupPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <p className="mb-4 text-end forget-password">Forget Password ?</p>
            <Button className="login-btn py-2">Login</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default BusinessLogin;
