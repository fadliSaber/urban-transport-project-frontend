import React from 'react'
import ScheduleCard from './ScheduleCard'
import { Schedule } from '../types/Schedule';


const schedules: Schedule[] = [
    {
        id: "1",
        routeNumber: "101",
        routeName: "Downtown Express",
        arrivalTime: "08:00 AM",
        duration: "30 min",
        onTime: true,
        nextStop: "Main St & 1st Ave",
        nextStopTime: "08:10 AM",
    },
    {
        id: "2",
        routeNumber: "102",
        routeName: "Uptown Shuttle",
        arrivalTime: "08:15 AM",
        duration: "20 min",
        onTime: false,
        nextStop: "Central Park West",
        nextStopTime: "08:20 AM",
    },
    {
        id: "3",
        routeNumber: "103",
        routeName: "Suburban Link",
        arrivalTime: "08:30 AM",
        duration: "45 min",
        onTime: true,
        nextStop: "Elm St & Oak Blvd",
        nextStopTime: "08:50 AM",
    },
    {
        id: "4",
        routeNumber: "104",
        routeName: "Airport Express",
        arrivalTime: "09:00 AM",
        duration: "60 min",
        onTime: true,
        nextStop: "Airport Terminal",
        nextStopTime: "09:20 AM",
    },
    {
        id: "5",
        routeNumber: "105",
        routeName: "Beachside Route",
        arrivalTime: "09:30 AM",
        duration: "30 min",
        onTime: false,
        nextStop: "Seaside Ave & Beach Rd",
        nextStopTime: "09:40 AM",
    },
];

type ScheduleListProps = {
    schedules: Schedule[]
}

const ScheduleList = ({ schedules }: ScheduleListProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {schedules.map((schedule) => (
                <ScheduleCard key={schedule.id} schedule={schedule} />
            ))}
        </div>
    )
}

export default ScheduleList