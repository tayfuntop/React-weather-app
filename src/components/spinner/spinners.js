import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';

function Spinners() {
  return (
    <Spinner animation="border" role="status" 
    style={{fontSize: "36px", width: "60px", height: "60px", color:"rgb(144, 196, 215)", "position":"absolute", "top":"50px", right: "80px"}}
    >
      <span className="visually-hidden"></span>
    </Spinner>
  );
}

export default Spinners;

