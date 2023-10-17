import {useState} from 'react'
import Header from '../header/Header'
import './AdminDashboard.css'
import {
    Modal,
    Button,
    Form,
    Container,
    Card,
    Row,
    Col,
  } from "react-bootstrap";

const AdminDashboard = () => {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [activeTab,setActiveTab] = useState("A")
    const [showPp, setShowPp] = useState(false);
    const handleClosePp = () => setShowPp(false); 
    const handleShowPp = () => setShowPp(true);
    const [show, setShow] = useState(false);

  return (
    <div>
      <Header/>
      <h5
        className="text-start p-3 px-3 mb-0"
        style={{ backgroundColor: "#000000", color: "#fff" }}
      >
        DashBoard
      </h5>
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body >
        <h5>Add Practitioner</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button className='d-flex  ms-auto px-4 active-tab' onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="ps-5 py-3 text-start" style={{backgroundColor:"rgba(227, 227, 227, 1)"}}>
        <button onClick={()=>setActiveTab("A")} className={activeTab==="A"?"active-tab mx-3 px-4":"non-active-tab mx-3 px-4"}>Practitioners</button>
        <button onClick={()=>setActiveTab("B")} className={activeTab==="B"?"active-tab mx-3 px-4":"non-active-tab mx-3 px-4"}>Users</button>
        <button onClick={()=>setActiveTab("C")} className={activeTab==="C"?"active-tab mx-3 px-4":"non-active-tab mx-3 px-4"}>Products</button>
        <button onClick={()=>setActiveTab("D")} className={activeTab==="D"?"active-tab mx-3 px-4":"non-active-tab mx-3 px-4"}>Prescriptions</button>
        <button onClick={()=>setActiveTab("E")} className={activeTab==="E"?"active-tab mx-3 px-4":"non-active-tab mx-3 px-4"}>Questions</button>
        <button onClick={()=>setActiveTab("F")} className={activeTab==="F"?"active-tab mx-3 px-4":"non-active-tab mx-3 px-4"}>Admin Users</button>
      </div>
      {
        activeTab==="A" && (
            <div className='mx-5'>
                <Card className="d-flex justify-content-center my-3" style={{border:"none"}}>
          <Card.Body>
            <table style={{ width: "100%" }}>
              <thead  style={{color:"rgba(7, 75, 137, 1)"}}>
                <th
                  className="product text-start"
                  style={{ width: "20%" }}
                >
                  Practitioner ID
                </th>
                <th
                  className="description mx-2 text-start"
                  style={{ width: "10%" }}
                >
                  Clinic Name
                </th>
                <th className="price mx-2" style={{ width: "15%" }}>
                  Email
                </th>
                <th className="cart mx-2" style={{ width: "10%" }}>
                  Flag Status
                </th>
                <th className="cart mx-2 " style={{ width: "10%" }}>
                  Plan Type
                </th>
                <th className="cart mx-2 " style={{ width: "10%" }}>
                  Commission
                </th>
                <th style={{ width: "20%" }}></th>
              </thead>
              <tbody>
                <tr className="" style={{ borderBottom: "1px solid #fff" }}>
                  <td className="my-2 text-start"><b>Anti laser treatment</b></td>
                  <td className="my-2 text-start"><b>Healthcare</b></td>
                  <td><b>martin@gmail.com</b></td>
                  <td><b>Available</b></td>
                  <td><b>Premium</b></td>
                  <td>
                   <b>20%</b>
                  </td>
                  <td>
                    <button
                      className="details-btn mx-2 px-4 my-2 py-2"
                      onClick={handleShowPp}
                    >
                      View Prescriptions
                    </button>
                  </td>
                </tr>
                <tr className="" style={{ borderBottom: "1px solid #fff" }}>
                  <td className="my-2 text-start"><b>Anti laser treatment</b></td>
                  <td className="my-2 text-start"><b>Healthcare</b></td>
                  <td><b>martin@gmail.com</b></td>
                  <td><b>Available</b></td>
                  <td><b>Premium</b></td>
                  <td>
                   <b>20%</b>
                  </td>
                  <td>
                    <button
                      className="details-btn mx-2 px-4 my-2 py-2"
                      onClick={handleShowPp}
                    >
                      View Prescriptions
                    </button>
                  </td>
                </tr>
                <tr className="" style={{ borderBottom: "1px solid #fff" }}>
                  <td className="my-2 text-start"><b>Anti laser treatment</b></td>
                  <td className="my-2 text-start"><b>Healthcare</b></td>
                  <td><b>martin@gmail.com</b></td>
                  <td><b>Available</b></td>
                  <td><b>Premium</b></td>
                  <td>
                   <b>20%</b>
                  </td>
                  <td>
                    <button
                      className="details-btn mx-2 px-4 my-2 py-2"
                      onClick={handleShowPp}
                    >
                      View Prescriptions
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
            <Button className='d-flex me-5 ms-auto px-4 active-tab' onClick={handleShow}>Add Practitioner</Button>
            </div>

        )
      }
      {
        activeTab==="B" && "B"
      }
      {
        activeTab==="C" && "C"
      }
      {
        activeTab==="D" && "D"
      }
      {
        activeTab==="E" && "E"
      }
      {
        activeTab==="F" && "F"
      }
    </div>
  )
}

export default AdminDashboard