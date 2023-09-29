import { useState } from "react";
import Header from "../header/Header";
import ViewMore from "../../assets/Images/eye-icon.png";
import {
  Modal,
  Button,
  Form,
  Container,
  Card,
  Row,
  Col,
} from "react-bootstrap";
import "./DashboardPractitioner.css";
import Footer from "../footer/Footer";
import SearchImg from "../../assets/Images/search.png";
import EmailImg from "../../assets/Images/email.png";
const DashboardPractitioner = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showPp, setShowPp] = useState(false);

  const handleClosePp = () => setShowPp(false);
  const handleShowPp = () => setShowPp(true);
  const [showPrescribe, setShowPrescribe] = useState(false);

  const handleClosePrescribe = () => setShowPrescribe(false);
  const handleShowPrescribe = () => setShowPrescribe(true);
  return (
    <div>
      <Header />
      <Modal
        size="lg"
        show={showPrescribe}
        onHide={handleClosePrescribe}
        animation={false}
        centered
      >
        <Modal.Header
          closeButton
          style={{ backgroundColor: "rgba(0, 83, 139, 1)", color: "#fff" }}
        >
          <h5>Prescribe</h5>
        </Modal.Header>
        <Modal.Body className=" mt-3 mb-5">
          <div className="col-search">
            <label className="input-container ">
              <Form.Control
                type="text"
                className="search-form"
                placeholder="Search..."
              />
              <img className="fa-search" src={SearchImg} alt="search" />
            </label>
          </div>
          <div>
            <p className="text-start mx-2 mt-5 mb-3">
              <b>Previously searched users</b>
            </p>
            <Card
              className="mx-2 py-4 px-5"
              style={{
                boxShadow: "0px 0px 9px 0px rgba(0, 0, 0, 0.35)",
                backgroundColor: "rgba(237, 237, 237, 1)",
              }}
            >
              <div
                className="d-flex justify-content-between py-1 my-1"
                style={{ borderBottom: "1.06px solid rgba(6, 47, 45, 0.4)" }}
              >
                <p className="mt-1">johnseg@gmail.com</p>
                <button
                  className="dp-card-btn mx-2 px-3 mb-1"

                  // onClick={handleShowPrescribe}
                >
                  Prescribe
                </button>
              </div>
              <div
                className="d-flex justify-content-between py-1 my-1"
                style={{ borderBottom: "1.06px solid rgba(6, 47, 45, 0.4)" }}
              >
                <p className="mt-1">johnseg@gmail.com</p>
                <button
                  className="dp-card-btn mx-2 px-3 mb-1"

                  // onClick={handleShowPrescribe}
                >
                  Prescribe
                </button>
              </div>
              <div
                className="d-flex justify-content-between py-1 my-1"
                style={{ borderBottom: "1.06px solid rgba(6, 47, 45, 0.4)" }}
              >
                <p className="mt-1">johnseg@gmail.com</p>
                <button
                  className="dp-card-btn mx-2 px-3 mb-1"

                  // onClick={handleShowPrescribe}
                >
                  Prescribe
                </button>
              </div>
              <div
                className="d-flex justify-content-between py-1 my-1"
                style={{ borderBottom: "1.06px solid rgba(6, 47, 45, 0.4)" }}
              >
                <p className="mt-1">johnseg@gmail.com</p>
                <button
                  className="dp-card-btn mx-2 px-3 mb-1"

                  // onClick={handleShowPrescribe}
                >
                  Prescribe
                </button>
              </div>
              <div className="d-flex justify-content-between py-2 my-1">
                <div className="col-searchI">
                  <label className="input-containerI px-2">
                    <Form.Control
                      type="text"
                      className="search-formI"
                      placeholder="Email of new user"
                    />
                    <img className="fa-searchI" src={EmailImg} alt="search" />
                  </label>
                </div>
                <button
                  className="dp-card-btn-invite mx-2 px-3 mb-1"

                  // onClick={handleShowPrescribe}
                >
                  Invite new user
                </button>
              </div>
            </Card>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        animation={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-3 my-5">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et?
          </p>
          <p className="text-end me-3">
            <b>Martin Heir</b>
          </p>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="pt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et?
              </Form.Label>
              <Form.Control
                className="mt-4"
                as="textarea"
                rows={5}
                placeholder="Answer Here..."
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
      <Modal size="lg" show={showPp} onHide={handleClosePp} centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <table style={{ width: "100%" }}>
            <thead style={{ width: "100%" }}>
              <th
                className="product"
                style={{ width: "15%", color: "rgba(7, 75, 137, 1)" }}
              >
                Practitioner
              </th>
              <th
                className="description"
                style={{ width: "20%", color: "rgba(7, 75, 137, 1)" }}
              >
                Prescribed Item
              </th>
              <th
                className="price"
                style={{ width: "13%", color: "rgba(7, 75, 137, 1)" }}
              >
                Start Date
              </th>
              <th
                className="cart"
                style={{ width: "10%", color: "rgba(7, 75, 137, 1)" }}
              >
                End Date
              </th>
              <th
                className="cart"
                style={{ width: "13%", color: "rgba(7, 75, 137, 1)" }}
              >
                Fee Status
              </th>
              <th
                className="cart"
                style={{ width: "12%", color: "rgba(7, 75, 137, 1)" }}
              >
                Total Fee
              </th>
              <th
                className="cart"
                style={{ width: "27%", color: "rgba(7, 75, 137, 1)" }}
              >
                Address
              </th>
            </thead>
            <tbody>
              <tr className="py-2">
                <td>Martin Heir</td>
                <td>Anti laser scanner</td>
                <td>09/08/2023</td>
                <td>09/08/2023</td>
                <td>Approved</td>
                <td>$630.00</td>
                <td>9 Avenue , 340762</td>
              </tr>
            </tbody>
          </table>
          <table className="my-4">
            <thead style={{ width: "100%" }}>
              <th
                className="product"
                style={{ width: "15%", color: "rgba(7, 75, 137, 1)" }}
              >
                Billing Information
              </th>
            </thead>
            <tbody>
              <tr className="py-2">
                <td>
                  <b>Credit card: </b>XXXXXXX8473
                </td>
              </tr>
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          {/* <span className="ask-btn px-3 mx-3">
            <img className="ask-btn-img-modal" src={AskBtn} />
            <span className="mt-2 mx-3">
              Have a Question about this Transaction
            </span>
          </span> */}
          <Button
            className="py-2"
            variant="primary"
            onClick={handleClose}
            style={{
              backgroundColor: "rgba(249, 23, 104, 1)",
              color: "#fff",
              border: "none",
            }}
          >
            2 Days Remaining
          </Button>
        </Modal.Footer>
      </Modal>
      <h5
        className="text-start p-3 px-3"
        style={{ backgroundColor: "#000000", color: "#fff" }}
      >
        DashBoard
      </h5>
      <div className="text-start mx-5 mt-4 mb-5">
        <h5>List of questions</h5>
        <div
          className="pt-3 px-4 my-3 d-flex justify-content-between"
          style={{
            backgroundColor: "rgba(237, 237, 237, 1)",
            borderRadius: "10px",
          }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et?
          </p>
          <div className="d-flex">
            <p className="mx-3">
              <b>Martin Heir</b>
            </p>
            <div
              className=" px-3"
              onClick={handleShow}
              style={{
                backgroundColor: "rgba(166, 166, 166, 1)",
                height: "30px",
                color: "#fff",
                cursor: "pointer",
                borderRadius: "18px",
              }}
            >
              <img
                className="me-1"
                src={ViewMore}
                alt="view"
                style={{ height: "12px" }}
              />{" "}
              View
            </div>
          </div>
        </div>
        <div
          className="pt-3 px-4 my-3 d-flex justify-content-between"
          style={{
            backgroundColor: "rgba(237, 237, 237, 1)",
            borderRadius: "10px",
          }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et?
          </p>
          <div className="d-flex">
            <p className="mx-3">
              <b>Martin Heir</b>
            </p>
            <div
              className="  px-3"
              onClick={handleShow}
              style={{
                backgroundColor: "rgba(166, 166, 166, 1)",
                height: "30px",
                color: "#fff",
                cursor: "pointer",
                borderRadius: "18px",
              }}
            >
              <img
                className="me-1"
                src={ViewMore}
                alt="view"
                style={{ height: "12px" }}
              />{" "}
              View
            </div>
          </div>
        </div>
        <div
          className="pt-3 px-4 my-3 d-flex justify-content-between"
          style={{
            backgroundColor: "rgba(237, 237, 237, 1)",
            borderRadius: "10px",
          }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et?
          </p>
          <div className="d-flex">
            <p className="mx-3">
              <b>Martin Heir</b>
            </p>
            <div
              className=" px-3"
              onClick={handleShow}
              style={{
                backgroundColor: "rgba(166, 166, 166, 1)",
                height: "30px",
                color: "#fff",
                cursor: "pointer",
                borderRadius: "18px",
              }}
            >
              <img
                className="me-1"
                src={ViewMore}
                alt="view"
                style={{ height: "12px" }}
              />{" "}
              View
            </div>
          </div>
        </div>
        <div
          className="pt-3 px-4 my-3 d-flex justify-content-between"
          style={{
            backgroundColor: "rgba(237, 237, 237, 1)",
            borderRadius: "10px",
          }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et?
          </p>
          <div className="d-flex">
            <p className="mx-3">
              <b>Martin Heir</b>
            </p>
            <div
              className=" px-3"
              onClick={handleShow}
              style={{
                backgroundColor: "rgba(166, 166, 166, 1)",
                height: "30px",
                color: "#fff",
                cursor: "pointer",
                borderRadius: "18px",
              }}
            >
              <img
                className="me-1"
                src={ViewMore}
                alt="view"
                style={{ height: "12px" }}
              />{" "}
              View
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-start mx-5 mt-5 mb-3">
          <b>List of Users</b>
        </p>
        <Card
          className="mx-5 py-4 px-5"
          style={{ boxShadow: "0px 0px 9px 0px rgba(0, 0, 0, 0.35)" }}
        >
          <table style={{ width: "100%" }}>
            <thead
              className=""
              style={{ borderBottom: "1.06px solid rgba(6, 47, 45, 0.4)" }}
            >
              <th
                className="product table-head text-start px-4 ms-5 ps-5"
                style={{ width: "25%" }}
              >
                Username
              </th>
              <th
                className="description table-head mx-2 text-start"
                style={{ width: "25%" }}
              >
                Date added
              </th>
              <th className="price table-head mx-2" style={{ width: "25%" }}>
                Availability
              </th>
              <th className="cart table-head mx-2" style={{ width: "25%" }}>
                Action
              </th>
            </thead>
            <tbody>
              <tr
                className=""
                style={{ borderBottom: "1.06px solid rgba(6, 47, 45, 0.4)" }}
              >
                <td className="practitioner-info ms-5 my-3">
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
                <td className="my-2 text-start">26/08/2023</td>

                <td>
                  <b>
                    <button className="dp-available-btn px-3 py-1 mx-2 px-3 py-1">
                      Available
                    </button>
                  </b>
                </td>
                <td>
                  <button
                    className="dp-btn mx-2 px-3 py-1"
                    onClick={handleShowPrescribe}
                  >
                    Prescribe
                  </button>
                </td>
              </tr>
              <tr
                className=""
                style={{ borderBottom: "1.06px solid rgba(6, 47, 45, 0.4)" }}
              >
                <td className="practitioner-info ms-5 my-3">
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
                <td className="my-2 text-start">26/08/2023</td>

                <td>
                  <b>
                    <button className="dp-available-btn px-3 py-1 mx-2 px-3 py-1">
                      Available
                    </button>
                  </b>
                </td>
                <td>
                  <button
                    className="dp-btn mx-2 px-3 py-1"
                    onClick={handleShowPrescribe}
                  >
                    Prescribe
                  </button>
                </td>
              </tr>
              <tr
                className=""
                style={{ borderBottom: "1.06px solid rgba(6, 47, 45, 0.4)" }}
              >
                <td className="practitioner-info ms-5 my-3">
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
                <td className="my-2 text-start">26/08/2023</td>

                <td>
                  <b>
                    <button className="dp-available-btn px-3 py-1 mx-2 px-3 py-1">
                      Available
                    </button>
                  </b>
                </td>
                <td>
                  <button
                    className="dp-btn mx-2 px-3 py-1"
                    onClick={handleShowPrescribe}
                  >
                    Prescribe
                  </button>
                </td>
              </tr>
              <tr
                className=""
                style={{ borderBottom: "1.06px solid rgba(6, 47, 45, 0.4)" }}
              >
                <td className="practitioner-info  ms-5 my-3">
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
                <td className="my-2 text-start">26/08/2023</td>

                <td>
                  <b>
                    <button className="dp-unavailable-btn py-1 mx-2 px-3 py-1">
                      Not Available
                    </button>
                  </b>
                </td>
                <td>
                  <button
                    className="dp-btn mx-2 px-3 py-1"
                    onClick={handleShowPrescribe}
                  >
                    Prescribe
                  </button>
                </td>
              </tr>
              <tr
                className=""
                style={{ borderBottom: "1.06px solid rgba(6, 47, 45, 0.4)" }}
              >
                <td className="practitioner-info  ms-5 my-3">
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
                <td className="my-2 text-start">26/08/2023</td>

                <td>
                  <b>
                    <button className="dp-unavailable-btn py-1 mx-2 px-3 py-1">
                      Not Available
                    </button>
                  </b>
                </td>
                <td>
                  <button
                    className="dp-btn mx-2 px-3 py-1"
                    onClick={handleShowPrescribe}
                  >
                    Prescribe
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>
      <div>
        <p className="text-start mx-5 mt-5 mb-3">
          <b>List of Products</b>
        </p>
        <Card
          className="mx-5 py-4 px-5"
          style={{ boxShadow: "0px 0px 9px 0px rgba(0, 0, 0, 0.35)" }}
        >
          <table style={{ width: "100%" }}>
            <thead
              className=""
              style={{ borderBottom: "1.06px solid rgba(6, 47, 45, 0.4)" }}
            >
              <th
                className="product table-head text-start"
                style={{ width: "25%" }}
              >
                Product name
              </th>
              <th
                className="description table-head mx-2 text-start"
                style={{ width: "25%" }}
              >
                Description
              </th>
              <th className="price mx-2 table-head" style={{ width: "25%" }}>
                Availability
              </th>
              <th className="cart mx-2 table-head" style={{ width: "25%" }}>
                Action
              </th>
            </thead>
            <tbody>
              <tr
                className=""
                style={{ borderBottom: "1.06px solid rgba(6, 47, 45, 0.4)" }}
              >
                <td className="my-2 text-start">Anti laser treatment</td>
                <td className="my-2 text-start">
                  Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do
                  eiusmod
                </td>
                <td>
                  <b>
                    <button className="dp-available-btn px-3 py-1 mx-2 px-3 py-1">
                      Available
                    </button>
                  </b>
                </td>
                <td>
                  <button
                    className="dp-btn mx-2 px-3 py-1"
                    onClick={handleShowPrescribe}
                  >
                    Prescribe
                  </button>
                </td>
              </tr>
              <tr
                className=""
                style={{ borderBottom: "1.06px solid rgba(6, 47, 45, 0.4)" }}
              >
                <td className="my-2 text-start">Anti laser treatment</td>
                <td className="my-2 text-start">
                  Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do
                  eiusmod
                </td>

                <td>
                  <b>
                    <button className="dp-available-btn px-3 py-1 mx-2 px-3 py-1">
                      Available
                    </button>
                  </b>
                </td>
                <td>
                  <button
                    className="dp-btn mx-2 px-3 py-1"
                    onClick={handleShowPrescribe}
                  >
                    Prescribe
                  </button>
                </td>
              </tr>
              <tr
                className=""
                style={{ borderBottom: "1.06px solid rgba(6, 47, 45, 0.4)" }}
              >
                <td className="my-2 text-start">Anti laser treatment</td>
                <td className="my-2 text-start">
                  Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do
                  eiusmod
                </td>

                <td>
                  <b>
                    <button className="dp-available-btn px-3 py-1 mx-2 px-3 py-1">
                      Available
                    </button>
                  </b>
                </td>
                <td>
                  <button
                    className="dp-btn mx-2 px-3 py-1"
                    onClick={handleShowPrescribe}
                  >
                    Prescribe
                  </button>
                </td>
              </tr>
              <tr
                className=""
                style={{ borderBottom: "1.06px solid rgba(6, 47, 45, 0.4)" }}
              >
                <td className="my-2 text-start">Anti laser treatment</td>
                <td className="my-2 text-start">
                  Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do
                  eiusmod
                </td>
                <td>
                  <b>
                    <button className="dp-unavailable-btn py-1 mx-2 px-3 py-1">
                      Not Available
                    </button>
                  </b>
                </td>
                <td>
                  <button
                    className="dp-btn mx-2 px-3 py-1"
                    onClick={handleShowPrescribe}
                  >
                    Prescribe
                  </button>
                </td>
              </tr>
              <tr
                className=""
                style={{ borderBottom: "1.06px solid rgba(6, 47, 45, 0.4)" }}
              >
                <td className="my-2 text-start">Anti laser treatment</td>
                <td className="my-2 text-start">
                  Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do
                  eiusmod
                </td>
                <td>
                  <b>
                    <button className="dp-unavailable-btn py-1 mx-2 px-3 py-1">
                      Not Available
                    </button>
                  </b>
                </td>
                <td>
                  <button
                    className="dp-btn mx-2 px-3 py-1"
                    onClick={handleShowPrescribe}
                  >
                    Prescribe
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>
      <div className="text-start mx-5 my-5">
        <h5 className="text-start">Previous Prescription</h5>
        <Card className="previous-prescription-card d-flex justify-content-center my-3">
          <Card.Body>
            <table style={{ width: "100%" }}>
              <thead>
                <th
                  className="product text-start px-4"
                  style={{ width: "20%" }}
                >
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
                    <h5 className="practitioner-title mx-2 my-2">
                      Marlin Heir
                    </h5>
                  </td>
                  <td className="my-2 text-start">Anti laser treatment</td>
                  <td>05/03/2023</td>
                  <td>11/04/2023</td>
                  <td>
                    <b>$ 28</b>
                  </td>
                  <td>
                    <button
                      className="details-btn mx-2 px-3 py-2"
                      onClick={handleShowPp}
                    >
                      View Details
                    </button>
                  </td>
                </tr>
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
                    <h5 className="practitioner-title mx-2 my-2">
                      Marlin Heir
                    </h5>
                  </td>
                  <td className="my-2 text-start">Anti laser treatment</td>
                  <td>05/03/2023</td>
                  <td>11/04/2023</td>
                  <td>
                    <b>$ 28</b>
                  </td>
                  <td>
                    <button
                      className="details-btn mx-2 px-3 py-2"
                      onClick={handleShowPp}
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardPractitioner;
