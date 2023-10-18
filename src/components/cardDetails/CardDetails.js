import React from "react";
import Header from "../header/Header";
import "./CardDetails.css";
import { Form, Row ,Col } from "react-bootstrap";

const CardDetails = () => {
  return (
    <div>
      <Header />
      <h5 className="card-header text-start px-5 py-3">Card Details</h5>
      <div className="m-5 body-container-card p-3">
        <table style={{ width: "100%" }}>
          <thead>
            <th className="product text-start px-4" style={{ width: "20%" }}>
              Practitioner
            </th>
            <th
              className="description mx-2 text-start"
              style={{ width: "20%" }}
            >
              Item
            </th>
            <th className="price mx-2" style={{ width: "15%" }}>
              Start Date
            </th>
            <th className="cart mx-2" style={{ width: "15%" }}>
              Return Date
            </th>
            <th className="cart mx-2 " style={{ width: "15%" }}>
              Price
            </th>
            <th style={{ width: "15%" }}></th>
          </thead>
          <tbody>
            <tr className="" style={{ borderBottom: "1px solid #fff" }}>
              <td className="practitioner-info mx-3 my-3">
                {" "}
                <img
                  className=""
                  style={{
                    borderRadius: "50%",
                    height: "40px",
                    width: "40px",
                  }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJvILcdNN4_OrE5EBa556RCKHQoxKqVWXV5duOjBrWfYCXDliVMO8bWruUTIOjbqOjzqI&usqp=CAU"
                />
                <h5 className="practitioner-title mx-2 my-2">Marlin Heir</h5>
              </td>
              <td className="my-2 text-start">Anti laser treatment</td>
              <td>05/03/2023</td>
              <td>11/04/2023</td>
              <td>
                <b>$ 28</b>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div className="text-start ms-3 mt-3">
          <p className="card-heading">Shipping Options:</p>
          <div>
            <div className="mb-3">
              <Form>
                <Form.Check
                  inline
                  className="me-5"
                  label="Overnight $200.00"
                  name="group1"
                  type="radio"
                  id="checkone"
                />
                <Form.Check
                  inline
                  className="mx-5"
                  label="2 day $160.00"
                  name="group1"
                  type="radio"
                  id="checktwo"
                />
                <Form.Check
                  inline
                  className="ms-5"
                  label="Ground $100.00"
                  name="group1"
                  type="radio"
                  id="checkthree"
                />
              </Form>
            </div>
            <p className="card-details-info">Equipment Price: $00.00</p>
            <p className="card-details-info">Shipping Price: $00.00</p>
            <p className="card-details-info">Sales Tax: $00.00</p>
            <p className="card-details-info">Total: $00.00</p>
          </div>
        </div>
        <div className="text-start ms-3 mt-5">
          <p className="card-heading">Billing Information</p>
          <Form style={{width:"70%"}}>
            <Row className="my-2">
              <Col>
              <Form.Label>First Name</Form.Label>
                <Form.Control  />
              </Col>
              <Col>
              <Form.Label>Last Name</Form.Label>
                <Form.Control />
              </Col>
            </Row>
            <Row className="my-2">
              <Col>
              <Form.Label>Address Line 1</Form.Label>
                <Form.Control  />
              </Col>
              <Col>
              <Form.Label>Address Line 2</Form.Label>
                <Form.Control />
              </Col>
            </Row>
            <Row className="my-2">
              <Col>
              <Form.Label>City</Form.Label>
                <Form.Control  />
              </Col>
              <Col>
              <Form.Label>Postal Code</Form.Label>
                <Form.Control />
              </Col>
            </Row>
            <Row className="my-2">
              <Col>
              <Form.Label>State</Form.Label>
                <Form.Control  />
              </Col>
              <Col>
              <Form.Label>Country</Form.Label>
                <Form.Control />
              </Col>
            </Row>
            <Form.Check className="my-3" label="Shipping address same to billing address" />
          </Form>
        </div>
        <div className="text-start ms-3 mt-3">
          <p className="card-heading">Credit Card Information</p>
          <Form style={{width:"70%"}}>
            <Row className="my-2">
              <Col xl={6}>
              <Form.Label>Card Number</Form.Label>
                <Form.Control  />
              </Col>
            </Row>
            <Row className="my-2">
              <Col xl={3}>
              <Form.Label>Expiration Date</Form.Label>
                <Form.Control placeholder="Month" />
              </Col>
              <Col xl={3}>
              <Form.Label></Form.Label>
                <Form.Control className="mt-2" placeholder="Year" />
              </Col>
              <Col xl={6}>
              <Form.Label>Cvv</Form.Label>
                <Form.Control />
              </Col>
            </Row>
          </Form>
        </div>
        <div className="text-start ms-3 mt-3">
          <p className="card-heading">Shipping Address</p>
          <Form style={{width:"70%"}}>
            <Row className="my-2">
              <Col>
              <Form.Label>First Name</Form.Label>
                <Form.Control  />
              </Col>
              <Col>
              <Form.Label>Last Name</Form.Label>
                <Form.Control />
              </Col>
            </Row>
            <Row className="my-2">
              <Col>
              <Form.Label>Address Line 1</Form.Label>
                <Form.Control  />
              </Col>
              <Col>
              <Form.Label>Address Line 2</Form.Label>
                <Form.Control />
              </Col>
            </Row>
            <Row className="my-2">
              <Col>
              <Form.Label>City</Form.Label>
                <Form.Control  />
              </Col>
              <Col>
              <Form.Label>Postal Code</Form.Label>
                <Form.Control />
              </Col>
            </Row>
            <Row className="my-2">
              <Col>
              <Form.Label>State</Form.Label>
                <Form.Control  />
              </Col>
              <Col>
              <Form.Label>Country</Form.Label>
                <Form.Control />
              </Col>
            </Row>
          </Form>
            <Form.Check style={{fontSize:"15px"}} className="my-3 me-5" label="I approve Terms and Conditions and Privacy Policy" />
            <Form.Check style={{fontSize:"12px"}} className="my-3 me-5" label="The Prescription detailed above consists of a rental of equipment for the term stipulated, If the equipment is not received by MRM within 3 working days of the return Date.
I acknowledge that I will be charged an Extension Fee equal to the price of the original prescription.For full details of this rental Program, click here." />
            <button className="py-1 px-4" style={{border:"none",backgroundColor:"rgba(0, 83, 139, 1)",color:"#fff",borderRadius:"20px"}}>
                Pay
            </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
