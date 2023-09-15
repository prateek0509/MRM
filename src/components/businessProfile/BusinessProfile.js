import React from "react";
import { Image, Form ,Button} from "react-bootstrap";
import BannerB from "../../assets/Images/BannerB.png";
import "./BusinessProfile.css";
import LogoB from "../../assets/Images/mrm_logo_g.png";


const BusinessProfile = () => {
  return (
    <div className="d-flex ">
 <div className="mx-0 px-0 banner-image-container">
        <Image className="banner-image" src={BannerB} />
        <div className="banner-logo-container mt-5">
        <Image className="banner-logo" src={LogoB} />
        </div>
        </div>
      <div className="business-input mx-5 px-3">
        <div className="business-input-form">
          <h4 className="text-start">Create Business Profile</h4>
          <Form>
            <div className="d-flex mb-3 my-4">
                <div className="business-input-container">
            <Form.Group className="mb-3" controlId="">
              <Form.Control type="text" placeholder="Clinic Name" />
            </Form.Group>
            <Form.Group className=" mt-4" controlId="">
              <Form.Control type="text" placeholder="Primary Contact Name" />
            </Form.Group>
                </div>
                <div className='business-upload-container ms-3 '>
                    <div className="ms-4 upload-profile-img">
                        <p className="py-4" style={{color:"#fff"}}>Upload <br></br> Photo</p>
                    </div>
                </div>
            </div>
            <Form.Group className="mb-3 my-4" controlId="">
              <Form.Control type="text" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3 mt-4" controlId="">
              <Form.Control type="text" placeholder="Contact Number" />
            </Form.Group>
            <Form.Group className="mb-3 mt-4" controlId="">
              <Form.Control type="text" placeholder="Bill to street" />
            </Form.Group>
            <div className="d-flex mb-3 mt-4">
            <Form.Group className="" controlId="">
              <Form.Control type="text" placeholder="Bill to city" />
            </Form.Group>
            <Form.Group className="ms-4" controlId="">
              <Form.Control type="text" placeholder="Bill to zip code" />
            </Form.Group>
            </div>
            <Form.Group className="mb-3 my-4" controlId="">
              <Form.Control type="text" placeholder="Bill to state" />
            </Form.Group>
            <Button className="business-profile-btn py-2">Create Business Profile</Button>
            <div className="d-flex my-4">
            <Button className="business-profile-acc-btn py-2 me-2">Edit</Button>
            <Button className="business-profile-edit-btn py-2 ms-2">Add a bank account</Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default BusinessProfile;
