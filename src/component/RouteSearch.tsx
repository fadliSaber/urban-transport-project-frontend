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
        // Construct the URL with query parameters
        const url = new URL('http://localhost:8080/route/search');
        url.searchParams.append('fromStop', fromStop);
        url.searchParams.append('toStop', toStop);

        try {
            const response = await fetch(url.toString(), {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const data: Route[] = await response.json();
                console.log('Routes:', data);
                return data;
            } else {
                console.error('Error: Failed to fetch routes');
                return [];
            }
        } catch (error) {
            console.error('Error fetching routes:', error);
            return [];
        }
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
                                    <option key={stop.id} value={stop.name}>
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
                                    <option key={stop.id} value={stop.name}>
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