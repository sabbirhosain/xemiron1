import { IoMdCheckboxOutline } from "react-icons/io";
import InnerLayout from "../../Layout/InnerLayout";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import { IoEarthOutline } from "react-icons/io5";
import { LuClock3 } from "react-icons/lu";
import DateCalendar from "./Calendar/DateCalendar";
import "./Schedule.css"
import "./Schedule.responsive.css"

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
                <div className="py-lg-3">
                  <span className="schedule_para_option"><IoMdCheckboxOutline />&nbsp;We'll sign an NDA if requested.</span>
                  <span className="schedule_para_option"><IoMdCheckboxOutline />&nbsp;Access to dedicated product specialists.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-between">
            <div className="col-lg-7">
              <div className="pt-4">
                <h1 className="select_date_title">Select Date</h1>
                <div className="d-flex align-items-center justify-content-between py-3 py-lg-5">
                  <span className="time_zome"><IoEarthOutline className="me-2" />Time Zone</span>
                  <div>
                    <select className="select_zone form-select">
                      <option>(+06:00) Dhaka</option>
                      <option value={"one"}>One</option>
                      <option value={"one"}>One</option>
                      <option value={"one"}>One</option>
                      <option value={"one"}>One</option>
                      <option value={"one"}>One</option>
                      <option value={"one"}>One</option>
                      <option value={"one"}>One</option>
                    </select>
                  </div>
                </div>

                <div className="calendar_box">
                  <DateCalendar />
                </div>

              </div>
            </div>
            <div className="col-lg-5">
              <div className="schedule_time_box">
                <h4 className="select_time_title">Select Time</h4>
                <h5 className="select_mins"><LuClock3 className="me-2" /> 30mins</h5>
                <div className="d-none d-md-block">
                  <button type="submit" className="time_select_btn">7:00AM</button>
                  <button type="submit" className="time_select_btn">7:00AM</button>
                  <button type="submit" className="time_select_btn">7:00AM</button>
                  <button type="submit" className="time_select_btn">7:00AM</button>
                  <button type="submit" className="time_select_btn">7:00AM</button>
                  <button type="submit" className="time_select_btn">7:00AM</button>
                  <button type="submit" className="time_select_btn">7:00AM</button>
                  <button type="submit" className="time_select_btn">7:00AM</button>
                  <button type="submit" className="time_select_btn">7:00AM</button>
                </div>

                <div className="row d-md-none">
                  <div className="col-6">
                    <button type="submit" className="time_select_btn">7:00AM</button>
                    <button type="submit" className="time_select_btn">7:00AM</button>
                    <button type="submit" className="time_select_btn">7:00AM</button>
                    <button type="submit" className="time_select_btn">7:00AM</button>
                    <button type="submit" className="time_select_btn">7:00AM</button>
                  </div>
                  <div className="col-6">
                    <button type="submit" className="time_select_btn">7:00AM</button>
                    <button type="submit" className="time_select_btn">7:00AM</button>
                    <button type="submit" className="time_select_btn">7:00AM</button>
                    <button type="submit" className="time_select_btn">7:00AM</button>
                    <button type="submit" className="time_select_btn">7:00AM</button>
                  </div>
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