import {useState} from "react";
import AskBtn from "../../assets/Images/AskBtn.png"
import ArrowDownRight from "../../assets/Images/ArrowDownRight.png"
import { Card, Container,Modal ,Button} from "react-bootstrap";
import './HomeScreen.css'
import Header from "../header/Header";
import Footer from "../footer/Footer";
const HomeScreen = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
        <Header/>
        <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>

        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
        <span className="ask-btn px-3mx-3"><img className="ask-btn-img-modal" src={AskBtn}/><span className="mt-2 mx-3">Have a Question about this Transaction</span></span>
          <Button className="py-2" variant="primary" onClick={handleClose} style={{backgroundColor:"rgba(249, 23, 104, 1)",color:"#fff",border:"none"}}>
            2 Days Remaining
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="mt-3">
        <Container>
        <h5 className="text-start">Current Prescription</h5>
        <Card className="curr-prescription-card d-flex justify-content-center my-3">
          <Card.Body>
            <table style={{width:"100%"}}>
              <thead  >
                <th className="product text-start px-4" style={{width:"20%"}}>Practitioner</th>
                <th className="description mx-2 text-start" style={{width:"20%"}}>Item</th>
                <th className="price mx-2" style={{width:"15%"}}>Start Date</th>
                <th className="cart mx-2" style={{width:"15%"}}>Return Date</th>
                <th className="cart mx-2 " style={{width:"10%"}}>Price</th>
                <th style={{width:"20%"}}></th>
              </thead>
              <tbody className="">
                <tr className="">
                <td className='practitioner-info mx-3 my-4 '> <img  className="" style={{borderRadius:"50%",height:"40px",width:"40px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJvILcdNN4_OrE5EBa556RCKHQoxKqVWXV5duOjBrWfYCXDliVMO8bWruUTIOjbqOjzqI&usqp=CAU"/>
      <h5  className="practitioner-title mx-2 my-2" >Marlin Heir</h5>
       </td>
                  <td className='my-2 text-start' >
                    Anti Laser treatment 
                  </td>
                  <td>
                  05/03/2023
                  </td>
                  <td>
                  11/04/2023
                  </td>
                  <td >
                  <b>$ 28</b>

                    
                  </td>
                  <td><button className="prescription-btn px-3 py-2">
                      Accept Prescription
                    </button></td>
                </tr>
              </tbody>
            </table>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
        </Container>
      </div>
      <div>
        <Container>
        <h5 className="text-start">Previous Prescription</h5>
        <Card className="previous-prescription-card d-flex justify-content-center my-3" >
          <Card.Body>
            <table style={{width:"100%"}}>
              <thead >
                <th className="product text-start px-4" style={{width:"20%"}}>Practitioner</th>
                <th className="description mx-2 text-start" style={{width:"20%"}}>Item</th>
                <th className="price mx-2" style={{width:"15%"}}>Start Date</th>
                <th className="cart mx-2" style={{width:"15%"}}>Return Date</th>
                <th className="cart mx-2 " style={{width:"15%"}}>Price</th>
                <th style={{width:"15%"}}></th>
              </thead>
              <tbody>
                <tr className="">
                <td className='practitioner-info mx-3 my-3'> <img  className="" style={{borderRadius:"50%",height:"40px",width:"40px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJvILcdNN4_OrE5EBa556RCKHQoxKqVWXV5duOjBrWfYCXDliVMO8bWruUTIOjbqOjzqI&usqp=CAU"/>
      <h5  className="practitioner-title mx-2 my-2" >Marlin Heir</h5>
       </td>
                  <td className='my-2 text-start' >
                    Anti laser treatment 
                  </td>
                  <td>
                  05/03/2023
                  </td>
                  <td>
                  11/04/2023
                  </td>
                  <td >
                  <b>$ 28</b>

                    
                  </td>
                  <td><button className="details-btn px-3 py-1" onClick={handleShow}>
                      View Details
                    </button></td>
                </tr>
                <tr className="">
                <td className='practitioner-info mx-3 my-3'> <img  className="" style={{borderRadius:"50%",height:"40px",width:"40px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJvILcdNN4_OrE5EBa556RCKHQoxKqVWXV5duOjBrWfYCXDliVMO8bWruUTIOjbqOjzqI&usqp=CAU"/>
      <h5  className="practitioner-title mx-2 my-2" >Marlin Heir</h5>
       </td>
                  <td className='my-2 text-start' >
                  Anti laser treatment 
                  </td>
                  <td>
                  05/03/2023
                  </td>
                  <td>
                  11/04/2023
                  </td>
                  <td >
                  <b>$ 28</b>

                    
                  </td>
                  <td><button className="details-btn px-3 py-1" onClick={handleShow}>
                      View Details
                    </button></td>
                </tr>
              </tbody>
            </table>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
        </Container>
        <Container className="d-flex justify-content-center my-5">
            <span className="ask-btn ps-3 pe-5 mx-3"><img className=" ask-btn-img" src={AskBtn}/><span className="mt-3 mx-3">Ask a Question</span></span>
            <span className="resource-btn ps-5 pe-3 py-3 ">Resources<img className="ms-5" src={ArrowDownRight}/></span>

        </Container>
        <Footer/>
      </div>
    </div>
  );
};

export default HomeScreen;
