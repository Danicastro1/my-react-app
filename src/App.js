// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Calendar from '../src/Calendar'
import PatientForm from '../src/components/PatientForm'

// import {useState} from 'react'
// import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css'

// import EventList from '../src/EventList'


function AppLayout() {
  return (
    <div className='App'>
     <Header/>
     <div className='content'>
      <PatientForm/>
      <Calendar/>
     </div>
    </div>
  )
}


function App() {
  return (
    
    <Router>
 
      <Routes>
        <Route path="/" element={<AppLayout/>} />
      </Routes>
      </Router>
    
  )
}



export default App







// const App = () => {

//   const [date, setDate] = useState(new Date()) 

//   return (
//     <div className='app'>
   
//       <h1> Scheduling </h1>
//       <div className='calendar-container'>
//         <Calendar onChange={setDate} value={date} />
//       </div>
//       <p className='text-center'>
//         <span className='bold'>Selected Date:</span>{' '}
//         {date.toString()}
//       </p>
//     </div>
//   )
// }


