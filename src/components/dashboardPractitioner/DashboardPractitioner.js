import { useState, useEffect } from "react";
import Header from "../header/Header";
import ViewMore from "../../assets/Images/eye-icon.png";
import AskBtn from "../../assets/Images/AskBtn.png";
import ArrowDownRight from "../../assets/Images/ArrowDownRight.png";
import {
  Modal,
  Button,
  Form,
  Container,
  Card,
  Row,
  Col,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import "./DashboardPractitioner.css";
import Footer from "../footer/Footer";
import SearchImg from "../../assets/Images/search.png";
import EmailImg from "../../assets/Images/email.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getPreviousPrescription, getProductData, getUserProfile } from "../../redux/user";
const DashboardPractitioner = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("A");
  const [inviteUser, setInviteUser] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showPp, setShowPp] = useState(false);
  const [modalData,setModalData] = useState("")
  const handleClosePp = () => setShowPp(false);
  const handleShowPp = (item) =>{ 
    setShowPp(true)
    setModalData(item)
  };
  const [showPrescribe, setShowPrescribe] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [userList, setUserList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [previousPrescription, setPreviousPrescription] = useState([]);
  const handleClosePrescribe = () => setShowPrescribe(false);
  const handleShowPrescribe = () => setShowPrescribe(true);
  const handleCloseUser = () => setShowUser(false);
  const handleShowUser = () => setShowUser(true);

  useEffect(() => {
    dispatch(getUserProfile()).then((result) => setUserList(result));
    dispatch(getProductData()).then((result) => setProductList(result));
    dispatch(getPreviousPrescription()).then((result) => setPreviousPrescription(result));
  }, []);
  console.log(modalData, "uul");
  const body = {
    email: inviteUser,
  };
  const handleInviteUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://flat-sun-42336.botics.co/api/v1/petownerinvite/",
        {
          method: "post",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      const data = await response.json();
      if (data.msg) {
        toast.success(data.msg, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
          hideProgressBar: true,
        });
        setTimeout(() => {
          setShowPrescribe(false);
        }, 2000);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <Modal
        size="lg"
        show={showUser}
        onHide={handleCloseUser}
        animation={false}
        centered
      >
        <Modal.Header
          closeButton
          style={{ backgroundColor: "rgba(0, 83, 139, 1)", color: "#fff" }}
        >
          <h5>User</h5>
        </Modal.Header>
        <Modal.Body className=" mt-3 mb-5">
          <div>
            <Card
              className="mx-2 py-4 px-5"
              style={{
                boxShadow: "0px 0px 9px 0px rgba(0, 0, 0, 0.35)",
                backgroundColor: "rgba(237, 237, 237, 1)",
              }}
            >
              <div
                className="d-flex justify-content-around py-1 my-1"
                style={{ borderBottom: "1.06px solid rgba(6, 47, 45, 0.4)" }}
              >
                <p className="mt-1">Anti scanner </p>
                <p className="mt-1">Lorem Ipsum Dolor</p>
                <p className="mt-1">15Days </p>
                <p className="mt-1">$380.00</p>
                <button
                  className="dp-card-btn mx-2 px-3 mb-1"

                  // onClick={handleShowPrescribe}
                >
                  Prescribe
                </button>
              </div>
              <div
                className="d-flex justify-content-around py-1 my-1"
                style={{ borderBottom: "1.06px solid rgba(6, 47, 45, 0.4)" }}
              >
                <p className="mt-1">Anti scanner </p>
                <p className="mt-1">Lorem Ipsum Dolor</p>
                <p className="mt-1">15Days </p>
                <p className="mt-1">$380.00</p>
                <button
                  className="dp-card-btn mx-2 px-3 mb-1"

                  // onClick={handleShowPrescribe}
                >
                  Prescribe
                </button>
              </div>
              <div
                className="d-flex justify-content-around py-1 my-1"
                style={{ borderBottom: "1.06px solid rgba(6, 47, 45, 0.4)" }}
              >
                <p className="mt-1">Anti scanner </p>
                <p className="mt-1">Lorem Ipsum Dolor</p>
                <p className="mt-1">15Days </p>
                <p className="mt-1">$380.00</p>
                <button
                  className="dp-card-btn mx-2 px-3 mb-1"

                  // onClick={handleShowPrescribe}
                >
                  Prescribe
                </button>
              </div>
              <div
                className="d-flex justify-content-around py-1 my-1"
                style={{ borderBottom: "1.06px solid rgba(6, 47, 45, 0.4)" }}
              >
                <p className="mt-1">Anti scanner </p>
                <p className="mt-1">Lorem Ipsum Dolor</p>
                <p className="mt-1">15Days </p>
                <p className="mt-1">$380.00</p>
                <button
                  className="dp-card-btn mx-2 px-3 mb-1"

                  // onClick={handleShowPrescribe}
                >
                  Prescribe
                </button>
              </div>
              <div
                className="d-flex justify-content-around py-1 my-1"
                style={{ borderBottom: "1.06px solid rgba(6, 47, 45, 0.4)" }}
              >
                <p className="mt-1">Anti scanner </p>
                <p className="mt-1">Lorem Ipsum Dolor</p>
                <p className="mt-1">15Days </p>
                <p className="mt-1">$380.00</p>
                <button
                  className="dp-card-btn mx-2 px-3 mb-1"

                  // onClick={handleShowPrescribe}
                >
                  Prescribe
                </button>
              </div>
            </Card>
          </div>
        </Modal.Body>
      </Modal>
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
                      onChange={(e) => setInviteUser(e.target.value)}
                    />
                    <img className="fa-searchI" src={EmailImg} alt="search" />
                  </label>
                </div>
                <ToastContainer />
                <button
                  className="dp-card-btn-invite mx-2 px-3 mb-1"
                  onClick={handleInviteUser}
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

            </thead>
            <tbody>
              <tr className="py-2">
                <td>{modalData.username}</td>
                <td>{modalData.item}</td> 
                <td>{modalData.start_date}</td> 
                <td>{modalData.return_date}</td> 
                <td>{modalData.status}</td> 
                <td>{modalData.price}</td> 
              </tr>
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
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
           {modalData.days_remaining} Days Remaining
          </Button>
        </Modal.Footer>
      </Modal>
      <h5
        className="text-start p-3 px-3 mb-0"
        style={{ backgroundColor: "#000000", color: "#fff" }}
      >
        DashBoard
      </h5>
      <div
        className="ps-5 py-3 text-start"
        style={{ backgroundColor: "rgba(227, 227, 227, 1)" }}
      >
        <button
          onClick={() => setActiveTab("A")}
          className={
            activeTab === "A"
              ? "active-tab mx-3 px-4"
              : "non-active-tab mx-3 px-4"
          }
        >
          Questions
        </button>
        <button
          onClick={() => setActiveTab("B")}
          className={
            activeTab === "B"
              ? "active-tab mx-3 px-4"
              : "non-active-tab mx-3 px-4"
          }
        >
          User
        </button>
        <button
          onClick={() => setActiveTab("C")}
          className={
            activeTab === "C"
              ? "active-tab mx-3 px-4"
              : "non-active-tab mx-3 px-4"
          }
        >
          Products
        </button>
        <button
          onClick={() => setActiveTab("D")}
          className={
            activeTab === "D"
              ? "active-tab mx-3 px-4"
              : "non-active-tab mx-3 px-4"
          }
        >
          Prescriptions
        </button>
      </div>
      {activeTab === "A" && (
        <div className="text-start mx-5 mt-4 mb-5">
          <h5>List of questions</h5>
          <div
            className="pt-3 px-4 mt-3 mb-3  d-flex justify-content-between"
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
            className="pt-3 px-4 my-2 d-flex justify-content-between"
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
      )}
      {activeTab === "B" && (
        <div className="" style={{ width: "100%" }}>
          <p className="text-start mx-5 mt-5 mb-3">
            <b>List of Users</b>
          </p>
          <table className="mx-5" style={{ width: "90%" }}>
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
              {userList.payload.map((item) => {
                return (
                  <tr
                    className=""
                    style={{
                      borderBottom: "1.06px solid rgba(6, 47, 45, 0.4)",
                    }}
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
                      <h5 className="practitioner-title mx-2 my-2">
                        {item.username}
                      </h5>
                    </td>
                    <td className="my-2 text-start">
                      {item.date_added.slice(0, 10)}
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
                        onClick={handleShowUser}
                      >
                        Prescribe
                      </button>
                    </td>
                  </tr>
                );
              })}
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
                    onClick={handleShowUser}
                  >
                    Prescribe
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {activeTab === "C" && (
        <div style={{ width: "100%" }}>
          <p className="text-start mx-5 mt-5 mb-3">
            <b>List of Products</b>
          </p>
          <table className="mx-5" style={{ width: "90%" }}>
            <thead
              className=""
              style={{ borderBottom: "1.06px solid rgba(6, 47, 45, 0.4)" }}
            >
              <th
                className="product table-head text-start"
                style={{ width: "20%" }}
              >
                Product name
              </th>
              <th
                className="description table-head mx-2 text-start"
                style={{ width: "30%" }}
              >
                Description
              </th>
              <th
                className="description table-head "
                style={{ width: "10%" }}
              >
                Rental Term
              </th>
              <th
                className="description table-head"
                style={{ width: "10%" }}
              >
                Price
              </th>
              <th className="price mx-2 table-head" style={{ width: "15%" }}>
                Availability
              </th>
              <th className="cart mx-2 table-head" style={{ width: "15%" }}>
                Action
              </th>
            </thead>
            <tbody>
              {productList.payload.map((item) => {
                return (
                  <tr
                    className=""
                    style={{
                      borderBottom: "1.06px solid rgba(6, 47, 45, 0.4)",
                    }}
                  >
                    <td className="my-2 text-start">{item.item}</td>
                    <td className="my-2 text-start">
                    {item.description}
                    </td>
                    <td>{item.rental_term} Days</td>
                    <td>{item.price}</td>
                    <td>
                      <b>
                        <button className="dp-available-btn px-3 py-1 my-3 mx-2 px-3 py-1">
                        {item.availability}
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
                );
              })}
              <tr
                className=""
                style={{ borderBottom: "1.06px solid rgba(6, 47, 45, 0.4)" }}
              >
                <td className="my-2 text-start">Anti laser treatment</td>
                <td className="my-2 text-start">
                  Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do
                  eiusmod
                </td>
                <td>20 days</td>
                    <td>180.00</td>
                <td>
                  <b>
                    <button className="dp-unavailable-btn py-1 my-3 mx-2 px-3 py-1">
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
        </div>
      )}
      {activeTab === "D" && (
        <div className="text-start mx-5 my-5">
          <h5 className="text-start my-d3">Previous Prescription</h5>
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
                  {
                    previousPrescription.payload.map((item)=>{
                      return(
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
                        {item.username}
                      </h5>
                    </td>
                    <td className="my-2 text-start">{item.item}</td>
                    <td>{item.start_date}</td>
                    <td>{item.return_date}</td>
                    <td>
                      <b>{item.price}</b>
                    </td>
                    <td>
                      <button
                        className="details-btn mx-2 px-3 py-2"
                        onClick={()=>{setShowPp(true);setModalData(item)}}
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                      )
                    })
                  }
                </tbody>
              </table>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
          <h5 className="text-start my-d3">Previous Prescription</h5>
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
      )}
      <Container className="d-flex justify-content-center my-5">
        <span className="ask-btn ps-3 pe-5 mx-3">
          <img className=" ask-btn-img mt-3" src={AskBtn} />
          <span className="mt-3 mx-3">Ask a Question</span>
        </span>
        <span className="resource-btn ps-5 pe-3 py-3 ">
          Resources
          <img className="ms-5" src={ArrowDownRight} />
        </span>
      </Container>
      <Footer />
    </div>
  );
};

export default DashboardPractitioner;
