
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';

import qrcode from './img/qr.png';
import prod from './img/prod.jpg'

import { FaEye } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";
import { IoIosArrowUp } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { FaPowerOff } from "react-icons/fa";
import { FaPrint } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GrSubtractCircle } from "react-icons/gr";
import { FiPlusCircle } from "react-icons/fi";
import { IoMdSettings } from "react-icons/io";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container-fluid vh-100" style={{backgroundColor:'#F7F7F7'}}>

      {/* header */}
      <div className='pt-2' style={{display:'flex', justifyContent:'space-between'}}>

      <div>
      <span className='fs-5'><b>
          Print QR Code
      </b></span>
      <br/>
      <span className='text-muted'>
        Manage your QR code
      </span>
      </div>

      <div className='pt-2' style={{display:'flex', gap:'10px'}}>

        <button style={{border:'1px solid #ABAEB1', borderRadius:'5px', padding:'5px', fontSize:'20px', backgroundColor:'white', display:'flex', alignItems:'center', margin:'8px 0px', color:'#ABAEB1'}}>
          <LuRefreshCcw />
        </button>

        <button  style={{border:'1px solid #ABAEB1', borderRadius:'5px', padding:'5px', fontSize:'20px', backgroundColor:'white', display:'flex', alignItems:'center', margin:'8px 0px', color:'#ABAEB1'}}>
          <IoIosArrowUp/>
        </button>

      </div>

      </div>

      {/* container */}
      <div className='container-fluid p-4 mt-3' style={{backgroundColor:'white', borderRadius:'10px'}}>

        <form>

        {/* warehouse */}
        <div style={{display:'flex', gap:'20px', justifyContent:'space-between'}} className='col-6'>

        <div className='' style={{width:'50%'}}>
          <span className='fs-5'>
            Warehouse 
            <span style={{color:'red'}}> *</span>
          </span>

          <br/>

          <select className='mt-2' style={{width:'100%', borderRadius:'5px', padding:'3px'}}>

            <option>Select</option>

          </select>

        </div>

        {/* store */}
        <div className='' style={{width:'50%'}}>

          <span className='fs-5'>
            Store 
            <span style={{color:'red'}}> *</span>
          </span>

          <br/>

          <select className='mt-2' style={{width:'100%', borderRadius:'5px', padding:'3px'}}>

            <option>Select</option>

          </select>

        </div>

        </div>

        {/* product */}
        <div className='mt-4'>
        <div className='col-6'>
          <span className='fs-5'>
            Product 
            <span style={{color:'red'}}> *</span>
          </span>

          <br/>

          <div className='mt-2' style={{width:'100%', borderRadius:'5px', padding:'3px 10px', border:'1px solid gray'}}>
            <IoMdSearch style={{fontSize:'25px'}} />
            <input type="text" placeholder='Search product by code' style={{border:'none', width:'90%', outline:'none'}} />
          </div>

        </div>
        
        </div>

        {/* product listing */}
        <div className='container-fluid mt-4 p-3' style={{backgroundColor:'#F9FAFC', borderRadius:'5px'}}>
          <table className="table">
            <thead>
            <tr>
              <th style={{backgroundColor:'#E6EAED'}}>Product</th>
              <th style={{backgroundColor:'#E6EAED'}}>SKU</th>
              <th style={{backgroundColor:'#E6EAED'}}>Code</th>
              <th style={{backgroundColor:'#E6EAED'}}>Reference Number</th>
              <th style={{backgroundColor:'#E6EAED'}}>Qty</th>
              <th style={{backgroundColor:'#E6EAED'}}></th>
            </tr>
            </thead>

            <tbody>
            <tr>
              <td>
                <div style={{display:'flex', gap:'5px', alignItems:'center'}}>
                <div style={{width:'34px', alignItems:'center', backgroundColor:'#E6EAED', padding:'2px', borderRadius:'5px'}}>
                  <img src={prod} alt="product image" style={{width:'30px', borderRadius:'5px'}} />
                </div> 
                  Nike Jordan
                </div>
              </td>
              <td>
                <div style={{display:'flex', alignItems:'center', padding:'4px 2px', color:'#9AA0A7'}}>
                  PT002
                </div>
              </td>
              <td>
                <div style={{display:'flex', alignItems:'center', padding:'4px 2px', color:'#9AA0A7'}}>
                  HG3FK
                </div>
              </td>
              <td>
                <div style={{display:'flex', alignItems:'center', padding:'4px 2px', color:'#9AA0A7'}}>
                  32RRR554
                </div>
              </td>
              <td>
                <div style={{border:'1px solid #F9FAFC', backgroundColor:'#F9FAFC', borderRadius:'5px', padding:'2px 0px', display:'flex', alignItems:'center', gap:'5px', justifyContent:'center', width:'120px'}}>

                <button style={{border:'none', backgroundColor:'#F9FAFC', display:'flex'}}><GrSubtractCircle /></button>
                
                <span> 4 </span>
                
                <button style={{border:'none', backgroundColor:'#F9FAFC', display:'flex'}}><FiPlusCircle /></button>

                </div>
              </td>
              <td>
                <button style={{border:'1px solid #F9FAFC', borderRadius:'5px', display:'flex', padding:'4px', alignItems:'center', justifyContent:'center', marginTop:'2px', backgroundColor:'white'}}>
                  <RiDeleteBin5Line />
                </button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>

        {/* paper size */}
        <div style={{display:'flex', gap:'20px'}}>

        <div className='mt-4 col-6'>
          <span className='fs-5'>
            Paper Size 
            <span style={{color:'red'}}> *</span>
          </span>

          <br/>

          <select className='mt-2' style={{width:'100%', border:'1px solid gray', borderRadius:'5px', padding:'3px'}}>

            <option disabled>Select</option>
            <option>A4</option>
            <option>A3</option>
            <option>A2</option>
            <option>A1</option>

          </select>

        </div>

        <div className='mt-5 col-6'>
          <label className="form-check-label" for="checkNativeSwitch">
              Reference Number
          </label>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" value="" id="checkNativeSwitch" switch />
          </div>
        </div>

        </div>

        <hr/>

        {/* buttons */}
        <div className='' style={{display:'flex', justifyContent:'flex-end', gap:'10px'}}>

          {/* generate qr */}
          <div>
      <Button variant="warning" className='btn btn-sm' onClick={handleShow} style={{color:'white'}}>
        <FaEye /> Generate QR code
      </Button>

      <Modal show={show} onHide={handleClose} centered>

        <Modal.Header closeButton>
          <Modal.Title>QR Code</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>

          <div style={{display:'flex', justifyContent:'flex-end'}}>
          <Button variant="danger">
            <FaPrint />&nbsp;&nbsp; Print QR Code
          </Button>
          </div>

          <div style={{display:'flex', gap:'8px', marginBottom:'10px'}}>

          {/* qr code card */}
          <div>
            <span className='fs-4'>
              Name
            </span>

            <div className='p-2 text-center mt-2' style={{border:'1px solid gray', borderRadius:'5px', width:'200px'}}>

              <img src={qrcode} alt='qrcode' style={{width:'100px'}} />
              
              <p>Ref No :32RRR554</p>

            </div>

          </div>

          </div>

        </Modal.Body>
      </Modal>
          </div>

          {/* reset */}
          <div className='btn btn-sm' style={{backgroundColor:'#0A2C4A', color:'white'}}>
            <FaPowerOff />
            <input type="reset" style={{border:'none',backgroundColor:'#0A2C4A', color:'white'}}/>
          </div>

          {/* print */}
          <div className='btn btn-sm' style={{backgroundColor:'#FE0100', color:'white'}}>
            <FaPrint /> 
            <input type="button" value="Print QR Code" onclick="printPage()" style={{border:'none',backgroundColor:'#FE0100', color:'white'}}/>
          </div>

        </div>

        </form>

        {/* setting icon */}
        <div className='setting'>
            <IoMdSettings />
        </div>

      </div>
      
    </div>
  );
}

export default App;