import DayContent from "../dayContent/dayContent";
import Dropdown from "../dropdown/dropdown";
import Days from "../content/days";
import "./container.css"

function Container() {

  return (

    <div>
      <div className="container ">
        <Dropdown />
        <div className="navBar">
          <DayContent />
          <Days />
        </div>
      </div>
    </div>

  )
}

export default Container