import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';

function Spinners() {
  return (
    <Spinner animation="border" role="status" 
    style={{fontSize: "36px", width: "60px", height: "60px", marginLeft: "80px", color:"rgb(144, 196, 215)"}}
    >
      <span className="visually-hidden"></span>
    </Spinner>
  );
}

export default Spinners;

