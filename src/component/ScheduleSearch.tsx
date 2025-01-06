import { useState } from "react";
import { useStops } from "../hooks/useStops";
import { Search } from "lucide-react"
import { Schedule } from "../types/Schedule";
import ScheduleList from "./ScheduleList";



const ScheduleSearch = () => {
    const [selectedStop, setSelectedStop] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [schedules, setSchedules] = useState<Schedule[]>([]);
    const { stops } = useStops();


    async function search(place: String, time: string): Promise<Schedule[]> {
        // hit the endpoint of the api to search per stop/time
        await new Promise(resolve => setTimeout(resolve, 1000));
        return [
            {
                id: "1",
                routeNumber: "101",
                routeName: "Route A",
                arrivalTime: "12:30",
                duration: "30 minutes",
                onTime: true,
                nextStop: "Station B",
                nextStopTime: "12:40",
            },
            {
                id: "2",
                routeNumber: "102",
                routeName: "Route B",
                arrivalTime: "13:00",
                duration: "20 minutes",
                onTime: false,
                nextStop: "Station C",
                nextStopTime: "13:10",
            }
        ];
    }
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedStop && selectedTime) {
            const schedules: Schedule[] = await search(selectedStop, selectedTime);
            setSchedules(schedules);
        }
    };

    return (
        <div className="pt-16 flex flex-col">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label htmlFor="stop" className="block text-sm font-medium text-gray-700 mb-1">
                            Select Stop
                        </label>
                        <select
                            id="stop"
                            value={selectedStop}
                            onChange={(e) => setSelectedStop(e.target.value)}
                            className="w-full rounded-md border-gray-300 shadow-sm"
                            required
                        >
                            <option value="">Select a stop</option>
                            {stops.map((stop) => (
                                <option key={stop.id} value={stop.id}>
                                    {stop.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div >
                        <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                            Select Time
                        </label>
                        <input
                            type="time"
                            id="time"
                            value={selectedTime}
                            onChange={(e) => setSelectedTime(e.target.value)}
                            className="w-full rounded-md border-gray-300 shadow-sm "
                            required
                        />
                    </div>

                    <div className="flex items-center">
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center justify-center space-x-2"
                        >
                            <Search className="h-4 w-4" />
                            <span>Find Buses</span>
                        </button>
                    </div>
                </div>
            </form>
            <div>
                {schedules.length == 0 ? <div className="text-center mx-auto mt-52">
                    <p className="text-7xl font-bold">No result</p>
                </div> : <ScheduleList schedules={schedules} />}
            </div>
        </div>
    );
}

export default ScheduleSearch