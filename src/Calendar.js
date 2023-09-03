
import './App.css';
import {useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import {Button, Col, FormGroup} from 'reactstrap'
import SelectTime from './components/SelectTime'





const CalendarComponent = () => {

  
  const [date, setDate] = useState(new Date()) 

  const [selectedTime, setSelectedTime] = useState('Times Available...')

  const isWeekend = (date) => {
    const day = date.getDay()
    return day === 0 || day === 6
  }

  // event handler for not allowing weekend appts
    const weekendSelectHandler = (date) => {
      if (!isWeekend(date)) {
        setDate(date)
      }
    }

  // event handler for date
    const dateClickedHandler = (selectedDate) => {setDate(selectedDate)}

  // event handler for time
    const timeChangeHandler = (event) => {
      setSelectedTime(event.target.value)


  }

  return (
    <div className='app'>
   
      <h1> Scheduling </h1>
      <h3>Select a date and time that works best for you.</h3>
      <div className='calendar-container' md='8' style={{display: "flex", alignItems: "center", justifyContent: "center"}} >
        <Calendar 
          onChange={setDate} 
          value={date} 
          onClickDay={dateClickedHandler} 
          tileDisabled={({date}) => isWeekend(date)}
          />
      </div>
      <div>
        <SelectTime selectedTime={selectedTime} onTimeChange={timeChangeHandler}/>
      </div>
      <p className='text-center'>
        <span className='bold'>Requested appointment date:</span>{' '}
        {date.toString(selectedTime)}
      </p>
   
      <FormGroup row>
          <Col md={{ size: 10, offset: 2 }}>
            <Button type='submit' color='primary'>
                Submit Request
            </Button>
          </Col>
        </FormGroup>

    </div>
  )
}

export default CalendarComponent