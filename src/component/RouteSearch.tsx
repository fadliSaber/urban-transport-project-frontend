import { useState } from "react";
import { useStops } from "../hooks/useStops";
import { Search, MapPin } from "lucide-react";
import { Route, Stop } from "../types/Schedule";
import RouteList from "./RouteList";

const RouteSearch = () => {
    const [fromStop, setFromStop] = useState('');
    const [toStop, setToStop] = useState('');
    const [routes, setRoutes] = useState<Route[]>([]);
    const { stops } = useStops();


    async function search(fromStop: string, toStop: string): Promise<Route[]> {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return [
            {
                id: "1",
                routeNumber: "101",
                name: "Route A",
                stops: [
                    {
                        id: "1",
                        name: "Station 1",
                        coordinates: { lat: 40.712776, lng: -74.005974 },
                    },
                    {
                        id: "2",
                        name: "Station 2",
                        coordinates: { lat: 40.713776, lng: -74.004974 },
                    },
                    {
                        id: "3",
                        name: "Station 3",
                        coordinates: { lat: 40.714776, lng: -74.003974 },
                    },
                ],
                frequency: "15 minutes",
                duration: "30 minutes",
            },
            {
                id: "2",
                routeNumber: "102",
                name: "Route B",
                stops: [
                    {
                        id: "4",
                        name: "Station 4",
                        coordinates: { lat: 40.725776, lng: -74.020974 },
                    },
                    {
                        id: "5",
                        name: "Station 5",
                        coordinates: { lat: 40.726776, lng: -74.019974 },
                    },
                    {
                        id: "6",
                        name: "Station 6",
                        coordinates: { lat: 40.727776, lng: -74.018974 },
                    },
                ],
                frequency: "20 minutes",
                duration: "40 minutes",
            },
            {
                id: "3",
                routeNumber: "103",
                name: "Route C",
                stops: [
                    {
                        id: "7",
                        name: "Station 7",
                        coordinates: { lat: 40.735776, lng: -74.028974 },
                    },
                    {
                        id: "8",
                        name: "Station 8",
                        coordinates: { lat: 40.736776, lng: -74.027974 },
                    },
                    {
                        id: "9",
                        name: "Station 9",
                        coordinates: { lat: 40.737776, lng: -74.026974 },
                    },
                ],
                frequency: "10 minutes",
                duration: "20 minutes",
            },
            {
                id: "4",
                routeNumber: "104",
                name: "Route D",
                stops: [
                    {
                        id: "10",
                        name: "Station 10",
                        coordinates: { lat: 40.745776, lng: -74.035974 },
                    },
                    {
                        id: "11",
                        name: "Station 11",
                        coordinates: { lat: 40.746776, lng: -74.034974 },
                    },
                    {
                        id: "12",
                        name: "Station 12",
                        coordinates: { lat: 40.747776, lng: -74.033974 },
                    },
                ],
                frequency: "25 minutes",
                duration: "35 minutes",
            },
        ];
    }
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (fromStop && toStop) {
            const routes: Route[] = await search(fromStop, toStop);
            setRoutes(routes);
        }
    };

    return (
        <div className="pt-16 flex flex-col">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label htmlFor="fromStop" className="block text-sm font-medium text-gray-700 mb-1">
                            From
                        </label>
                        <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <select
                                id="fromStop"
                                value={fromStop}
                                onChange={(e) => setFromStop(e.target.value)}
                                className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                required
                            >
                                <option value="">Select departure</option>
                                {stops.map((stop) => (
                                    <option key={stop.id} value={stop.id}>
                                        {stop.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="toStop" className="block text-sm font-medium text-gray-700 mb-1">
                            To
                        </label>
                        <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <select
                                id="toStop"
                                value={toStop}
                                onChange={(e) => setToStop(e.target.value)}
                                className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                required
                            >
                                <option value="">Select destination</option>
                                {stops.map((stop) => (
                                    <option key={stop.id} value={stop.id}>
                                        {stop.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="flex items-end">
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center justify-center space-x-2"
                        >
                            <Search className="h-4 w-4" />
                            <span>Find Routes</span>
                        </button>
                    </div>
                </div>
            </form>
            <div>
                {routes.length == 0 ? <div className="text-center mx-auto mt-52">
                    <p className="text-7xl font-bold">No result</p>
                </div> : <RouteList routes={routes} />}
            </div>
        </div>
    );
}

export default RouteSearch