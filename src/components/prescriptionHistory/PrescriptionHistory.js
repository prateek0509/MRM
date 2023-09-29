import {useState} from 'react'
import { Modal, Button,Form ,Container,Card,Dropdown} from "react-bootstrap";
import Header from '../header/Header';
import Footer from '../footer/Footer';

const PrescriptionHistory = () => {

  return (
    <div>
        <Header/>
        <h5
        className="text-start p-3 px-3"
        style={{ backgroundColor: "#000000", color: "#fff" }}
      >
        Prescription History
      </h5>
        <div>
        <div className='d-flex ms-5 my-5'>
                  <input className='p-2 px-5' type='text' placeholder='Search by Users Email' />
                  <input className='mx-3 p-2 px-3' type='date' />
                  <input className='mx-3 p-2 px-3' type='date' />
            </div>
        <p className="text-start mx-5 mt-5 mb-3">
          <b>Current Prescription</b>  
        </p>
        <Card className="mx-5 py-4 px-5" style={{boxShadow:"0px 0px 9px 0px rgba(0, 0, 0, 0.35)"}}>
        <table style={{ width: "100%" }}>
                <thead className="" style={{borderBottom:"1px solid rgba(6, 47, 45, 0.4)"}}>
                  <th
                    className="product table-head text-start "
                    style={{ width: "15%" }}
                  >
                    User
                  </th>
                  <th
                    className="product table-head text-start "
                    style={{ width: "17%" }}
                  >
                    Prescribed Item
                  </th>
                  <th
                    className="description table-head mx-2 text-start"
                    style={{ width: "12%" }}
                  >
                   Start Date
                  </th>
                  <th
                    className="description table-head mx-2 text-start"
                    style={{ width: "12%" }}
                  >
                   End Date 
                  </th>
                  <th className="price table-head ps-5 ms-5 text-start" style={{ width: "18%" }}>
                    Order Status
                  </th>
                  <th className="cart table-head mx-2" style={{ width: "10%" }}>
                    Total Fee
                  </th>
                  <th className="cart table-head mx-2" style={{ width: "18%" }}>
                    Actions
                  </th>
                
                </thead>
                <tbody >
                  <tr className="" style={{borderBottom:"1px solid rgba(6, 47, 45, 0.4)"}}>
                    <td className="practitioner-info my-3" >
                    prateek@gmail.com
                    </td>
                    <td className='text-start'>Anti laser scanner</td>
                    <td className="my-2 text-start">26/08/2023</td>
                    <td className="my-2 text-start">26/08/2023</td>

                    <td>
                      <b>
                      <button
                        className="dp-available-btn px-3 py-1 mx-2 px-3 py-1"
                      >
                        Prescribed
                      </button>
                      </b>
                    </td>
                    <td>
                      $ 630.00
                    </td>
                    <td>
                      <button
                        className="details-btn mx-2 px-2 py-1"
                        style={{borderRadius:"15px",color:"#fff"}}
                      >
Cancel Prescription                      </button>
                    </td>
                  </tr>
                  <tr className="" style={{borderBottom:"1px solid rgba(6, 47, 45, 0.4)"}}>
                    <td className="practitioner-info my-3" >
                    prateek@gmail.com
                    </td>
                    <td className='text-start'>Anti laser scanner</td>
                    <td className="my-2 text-start">26/08/2023</td>
                    <td className="my-2 text-start">26/08/2023</td>

                    <td>
                      <b>
                      <button
                        className="dp-available-btn px-3 py-1 mx-2 px-3 py-1"
                      >
                        Ordered
                      </button>
                      </b>
                    </td>
                    <td>
                    $ 630.00
                    </td>
                    <td>
                      <button
                        className="details-btn mx-2 px-2 py-1"
                        style={{borderRadius:"15px",color:"#fff"}}
                      >
Contact User                     </button>
                    </td>
                  </tr>
                  <tr className="" style={{borderBottom:"1px solid rgba(6, 47, 45, 0.4)"}}>
                    <td className="practitioner-info my-3" >
                    prateek@gmail.com
                    </td>
                    <td className='text-start'>Anti laser scanner</td>
                    <td className="my-2 text-start">26/08/2023</td>
                    <td className="my-2 text-start">26/08/2023</td>

                    <td>
                      <b>
                      <button
                        className="dp-available-btn px-3 py-1 mx-2 px-3 py-1"
                      >
                        Accepted
                      </button>
                      </b>
                    </td>
                    <td>
                    $ 630.00
                    </td>
                  </tr>
                  <tr className="" style={{borderBottom:"1px solid rgba(6, 47, 45, 0.4)"}}>
                    <td className="practitioner-info  my-3">
                    prateek@gmail.com
                    </td>
                    <td className='text-start'>Anti laser scanner</td>
                    <td className="my-2 text-start">26/08/2023</td>
                    <td className="my-2 text-start">26/08/2023</td>

                    <td>
                      <b><button
                        className="dp-unavailable-btn py-1 mx-2 px-3 py-1"
                      >
                       Extended
                      </button></b>
                    </td>
                    <td>
                    $ 630.00
                    </td>
                    <td>
                    <Dropdown>
      <Dropdown.Toggle className='px-4' variant="outline-dark" id="dropdown-basic">
       Select Action
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Divider />
      </Dropdown.Menu>
    </Dropdown>
                    </td>
                  </tr>
                  <tr className="" style={{borderBottom:"1px solid rgba(6, 47, 45, 0.4)"}}>
                    <td className="practitioner-info  my-3">
                    prateek@gmail.com
                    </td>
                    <td className='text-start'>Anti laser scanner</td>
                    <td className="my-2 text-start">26/08/2023</td>
                    <td className="my-2 text-start">26/08/2023</td>

                    <td>
                      <b><button
                        className="dp-unavailable-btn py-1 mx-2 px-3 py-1"
                      >
                       Pending
                      </button></b>
                    </td>
                    <td>
                    $ 630.00
                    </td>
                    <td> <Dropdown>
      <Dropdown.Toggle className='px-4' variant="outline-dark" id="dropdown-basic">
       Select Action
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown></td>
                  </tr>
                </tbody>
              </table>
        </Card>
      </div>
        <div className='mb-5'>
            <div className='d-flex ms-5 my-5'>
                  <input className='p-2 px-5' type='text' placeholder='Search by Users Email' />
                  <input className='mx-3 p-2 px-3' type='date' />
            </div>
        <p className="text-start mx-5 mt-5 mb-3">
          <b>Previous Prescription</b>  
        </p>
        <Card className="mx-5 py-4 px-5" style={{boxShadow:"0px 0px 9px 0px rgba(0, 0, 0, 0.35)"}}>
        <table style={{ width: "100%" }}>
                <thead className="" style={{borderBottom:"1px solid rgba(6, 47, 45, 0.4)"}}>
                  <th
                    className="product table-head text-start "
                    style={{ width: "20%" }}
                  >
                    User Email
                  </th>
                  <th
                    className="product table-head text-start "
                    style={{ width: "25%" }}
                  >
                    Prescribed Item
                  </th>
                  <th
                    className="description table-head mx-2 text-start"
                    style={{ width: "18%" }}
                  >
                   Start Date
                  </th>
                  <th
                    className="description table-head mx-2 text-start"
                    style={{ width: "18%" }}
                  >
                   End Date 
                  </th>
                  <th className="cart table-head mx-2" style={{ width: "19%" }}>
                    Total Fee
                  </th>
                
                </thead>
                <tbody >
                  <tr className="" style={{borderBottom:"1px solid rgba(6, 47, 45, 0.4)"}}>
                    <td className="practitioner-info my-3" >
                    prateek@gmail.com
                    </td>
                    <td className='text-start'>Anti laser scanner</td>
                    <td className="my-2 text-start">26/08/2023</td>
                    <td className="my-2 text-start">26/08/2023</td>
                    <td>
                      $ 630.00
                    </td>
                  </tr>
                  <tr className="" style={{borderBottom:"1px solid rgba(6, 47, 45, 0.4)"}}>
                    <td className="practitioner-info my-3" >
                    prateek@gmail.com
                    </td>
                    <td className='text-start'>Anti laser scanner</td>
                    <td className="my-2 text-start">26/08/2023</td>
                    <td className="my-2 text-start">26/08/2023</td>
                    <td>
                    $ 630.00
                    </td>
                  </tr>
                  <tr className="" style={{borderBottom:"1px solid rgba(6, 47, 45, 0.4)"}}>
                    <td className="practitioner-info my-3" >
                    prateek@gmail.com
                    </td>
                    <td className='text-start'>Anti laser scanner</td>
                    <td className="my-2 text-start">26/08/2023</td>
                    <td className="my-2 text-start">26/08/2023</td>
                    <td>
                    $ 630.00
                    </td>
                  </tr>
                  <tr className="" style={{borderBottom:"1px solid rgba(6, 47, 45, 0.4)"}}>
                    <td className="practitioner-info  my-3">
                    prateek@gmail.com
                    </td>
                    <td className='text-start'>Anti laser scanner</td>
                    <td className="my-2 text-start">26/08/2023</td>
                    <td className="my-2 text-start">26/08/2023</td>
                    <td>
                    $ 630.00
                    </td>
                  </tr>
                  <tr className="" style={{borderBottom:"1px solid rgba(6, 47, 45, 0.4)"}}>
                    <td className="practitioner-info  my-3">
                    prateek@gmail.com
                    </td>
                    <td className='text-start'>Anti laser scanner</td>
                    <td className="my-2 text-start">26/08/2023</td>
                    <td className="my-2 text-start">26/08/2023</td>
                    <td>
                    $ 630.00
                    </td>
                  </tr>
                </tbody>
              </table>
        </Card>
      </div>
      <Footer/>
    </div>
  )
}

export default PrescriptionHistory