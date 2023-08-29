import React from 'react'

const EventList = ({date, events}) => {
    const eventsForDate = events.filter(event => event.date ===date)


return (
    <div>
        <h3>Availabilty for {date.toDateString()}:</h3>
        <ul>
            {eventsForDate.map((event,index) =>
            <li key={index}>{event.title}</li>)}
        </ul>
    </div>  
    )
}

export default EventList