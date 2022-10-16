import Toast from 'react-bootstrap/Toast';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useWeather } from "../../context/weatherApi"

function Toasts() {

  const { toastShow, setToastShow } = useWeather();

  return (
    <Toast style={{"position":"absolute", "top":"10px"}} onClose={() => setToastShow(false)} show={toastShow} delay={3000} autohide>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Message</strong>
      </Toast.Header>
      <Toast.Body>Page failed to load, please try again!</Toast.Body>
    </Toast>
  );
}

export default Toasts;