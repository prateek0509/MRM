import React from 'react'
import { useParams } from "react-router";
import { Image, Form ,Button, Col} from "react-bootstrap";
import Banner from "../../assets/Images/Banner.png";
import LogoB from "../../assets/Images/mrm_logo_g.png";
import './BankDetails.css'
const BankDetails = () => {

  return (
    <div className="d-flex ">
      <div className="mx-0 px-0 banner-image-container">
        <Image className="banner-image" src={Banner} />
        <div className="banner-logo-container mt-5">
        <Image className="banner-logo" src={LogoB} />
        </div>
      </div>
      <div className="login-input mx-5 px-3">
        <div className="login-input-form text-start">
          <Form>
            <Form.Group className="mb-3 my-4" controlId="formGrouptext">
              <Form.Control type="text" placeholder="Bank Name"  />
            </Form.Group>
            <Form.Group className="mb-3 my-4" controlId="formGrouptext">
              <Form.Control type="text" placeholder="Account Name"  />
            </Form.Group>
            <Form.Group className="mb-3 my-4" controlId="formGrouptext">
              <Form.Control type="text" placeholder="Account Number"  />
            </Form.Group>
            <div className='row mt-4'>
            <Form.Group className="mb-3 col-6" controlId="formGroupPassword">
              <Form.Control type="text" placeholder="Routing Number" />
            </Form.Group>
            <Form.Group className="mb-3 col-6" controlId="formGroupPassword">
              <Form.Control type="text" placeholder="IBAN" />
            </Form.Group>     
            </div>
            <Form.Group className="mb-3 mt-2" controlId="formGroupPassword">
              <Form.Control type="text" placeholder="SWIFT" />
            </Form.Group>
            {/* <p className="mb-4 text-end forget-password">Forget Password ?</p> */}
            <Button className="login-btn py-2">SAVE</Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default BankDetails

