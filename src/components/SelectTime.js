import React from 'react'

const SelectTime = ({selectedTime, onTimeChange}) => {
    const times = [
        'Times Available...',
        '9:00am',
        '10:00am',
        '11:00am',
        '12:00pm',
        '1:00pm',
        '2:00pm',
        '3:00pm',
    ]
    return (
        <select value = {selectedTime} onChange={onTimeChange}>
            {times.map((time, index) => (
                <option key={index} value={time}>
                {time}
                </option>
            ))}
        </select>
    )
}

export default SelectTime