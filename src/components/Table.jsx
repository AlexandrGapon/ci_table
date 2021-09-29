import React from 'react'
import { mockData } from '../utils/mockData'
import TableRow from './TableRow'
import cl from '../styles/Table.module.css'


const Table = () => {
    const data = mockData

    return (
        <table className={cl.table}>
            <tbody>
                <tr>
                    <th>Дата</th>
                    <th>Откуда</th>
                    <th>Куда</th>
                    <th>Кол-во пассажиров</th>
                    <th>Цель поездки</th>
                </tr>
                {
                    data.map(trip =>
                        <TableRow
                            date={trip.date}
                            departure_city={trip.departure_city}
                            arrival_city={trip.arrival_city}
                            passengers_count={trip.passengers_count}
                            purpose={trip.purpose}
                            key={trip.trip_id}
                        />
                    )
                }
            </tbody>
        </table>
    )
}

export default Table