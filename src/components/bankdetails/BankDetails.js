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
      <div className="login-input mx-5 px-3 ">
        <div className="login-input-form text-start" >
          <p style={{fontSize:"30px"}}><b>Bank Account Details</b></p>
          <Form>
            <Form.Group className="mb-2 my-4" controlId="formGrouptext">
              <Form.Control type="text" style={{borderRadius:"10px"}} placeholder="Bank Name"  />
            </Form.Group>
            <Form.Group className="mb-2 my-1" controlId="formGrouptext">
              <Form.Control type="text" style={{borderRadius:"10px"}} placeholder="Account Name"  />
            </Form.Group>
            <Form.Group className="mb-2 my-1" controlId="formGrouptext">
              <Form.Control type="text" style={{borderRadius:"10px"}} placeholder="Account Number"  />
            </Form.Group>
            <div className='row mt-1'>
            <Form.Group className="mb-2 col-6" controlId="formGroupPassword">
              <Form.Control type="text" style={{borderRadius:"10px"}} placeholder="Routing Number" />
            </Form.Group>
            <Form.Group className="mb-2 col-6" controlId="formGroupPassword">
              <Form.Control type="text" style={{borderRadius:"10px"}} placeholder="IBAN" />
            </Form.Group>     
            </div>
            <Form.Group className="mb-2 " controlId="formGroupPassword">
              <Form.Control type="text" style={{borderRadius:"10px"}} placeholder="SWIFT" />
            </Form.Group>
            {/* <p className="mb-4 text-end forget-password">Forget Password ?</p> */}
            <Button className="login-btn mt-4 py-2">Save</Button>
            <Form.Group className="mb-3 mt-4" controlId="formGroupPassword">
            <Form.Check
            inline
            label="Medical Quant USA Inc dba Multi Radiance Medical is hereby authorized to directly deposit my pay to the account listed above. This authorization will remain in effect until I modify or cancel it in writing."
            name="group1"
            style={{color:"rgba(166, 166, 166, 1)",fontSize:"11px"}}
            // type={type}
            // id={`inline-${type}-1`}
          />
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default BankDetails

