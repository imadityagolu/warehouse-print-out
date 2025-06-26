import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import qrcode from './img/qr.png';

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container-fluid">
      <h1>Working</h1>

      {/* popup */}
      <div>
      <Button variant="danger" onClick={handleShow}>
        QR code
      </Button>

      <Modal show={show} onHide={handleClose} centered>

        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          <div className='text-center'>
            <img src={qrcode} alt='qrcode' />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
      
    </div>
  );
}

export default App;