// import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
// import EventList from '../src/EventList'
// import Calendar from '../src/Calendar'


const App = () => {

  const [date, setDate] = useState(new Date()) 

  return (
    <div className='app'>
      <h1> Scheduling </h1>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toString()}
      </p>
    </div>
  )
}


  export default App