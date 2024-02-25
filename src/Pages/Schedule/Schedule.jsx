import { IoMdCheckboxOutline } from "react-icons/io";
import InnerLayout from "../../Layout/InnerLayout";
import "./Schedule.css"
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
const Schedule = () => {
  return (
    <InnerLayout title={"Schedule"}>

      <section className='schedule_breadcrumb'>
        <div className="container">
          <Breadcrumb page1={"Home"} page2={"Schedule"} />
        </div>
      </section>

      <section className="schedule">
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <div>
                <h1 className="schedule_title">Lets discuss about your Amazing idea</h1>
                <div className="py-3">
                  <span className="schedule_para_option"><IoMdCheckboxOutline />&nbsp;We'll sign an NDA if requested.</span>
                  <span className="schedule_para_option"><IoMdCheckboxOutline />&nbsp;Access to dedicated product specialists.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </InnerLayout>
  )
}

export default Schedule