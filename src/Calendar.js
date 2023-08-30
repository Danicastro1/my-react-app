
import './App.css';
import {useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import {Button, Col, FormGroup} from 'reactstrap'






const CalendarComponent = () => {

  const [date, setDate] = useState(new Date()) 


  return (
    <div className='app'>
   
      <h1> Scheduling </h1>
      <div className='calendar-container' md='2'>
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toString()}
      </p>
   
      <FormGroup row>
            <Col md={{ size: 10, offset: 2 }}>
            <Button type='submit' color='primary'>
                Send Feedback
            </Button>
        </Col>
    </FormGroup>

    </div>
  )
}

export default CalendarComponent