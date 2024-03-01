import { useState } from "react"
import Calendar from "react-calendar"
import "./DateCalendar.css"

const DateCalendar = () => {

  const [date, setDate] = useState(new Date());

  const selectDate = (date) => {
    setDate(date);
  };





  return (
    <>
      <Calendar prevLabel={"<"} nextLabel={">"} prev2Label={false} next2Label={false} onChange={selectDate} value={date} />
      {
        console.log(date.toString())
      }
    </>
  )
}

export default DateCalendar