import { Bus, Clock, MapPin } from "lucide-react"
import { Stop } from "../types/Schedule";


type RouteCardProps = {
        routeNumber: string;
        name: string;
        stops: Stop[];
        frequency: string;
        duration: string;
}


const RouteCard = ({ routeNumber, name, stops, frequency, duration }: RouteCardProps) => {


    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow md:w-80 w-96 lg:w-[330px]">
            <div className="bg-blue-600 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Bus className="h-5 w-5 text-white" />
                    <span className="text-white font-bold">Route {routeNumber}</span>
                </div>
                <span className="text-white text-sm">{frequency}</span>
            </div>

            <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{name}</h3>

                <div className="flex items-center text-gray-600 text-sm mb-3">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{duration}</span>
                </div>

                <div className="space-y-2">
                    <div className="flex items-start">
                        <MapPin className="h-4 w-4 text-gray-400 mt-1 mr-2" />
                        <div className="flex-1">
                            <div className="text-sm font-medium">Stops:</div>
                            <div className="text-sm text-gray-600 space-y-1 mt-1">
                                {stops.map((stop, index) => (
                                    <div key={stop.id} className="flex items-center">
                                        <div className="w-2 h-2 rounded-full bg-blue-600 mr-2" />
                                        <span>{stop.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RouteCard