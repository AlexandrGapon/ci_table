import React from 'react'

const TableRow = ({date, departure_city, arrival_city, passengers_count, purpose}) => {
    return (
        <tr>
            <td>{date}</td>
            <td>{departure_city}</td>
            <td>{arrival_city}</td>
            <td>{passengers_count}</td>
            <td>{purpose}</td>
        </tr>
    )
}

export default TableRow