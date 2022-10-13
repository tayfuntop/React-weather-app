import DayContent from "../dayContent/dayContent";
import Dropdown from "../dropdown/dropdown";
import Content from "../content/content"
import "./container.css"

function Container() {

  return (

    <div>
      <div className="container ">
      <Dropdown /> 
        <div className="navBar">
          <DayContent />
          <Content />
        </div>
      </div>
    </div>

  )
}

export default Container