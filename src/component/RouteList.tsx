import { Route } from '../types/Schedule';
import RouteCard from './RouteCard';

type RouteListProps = {
    routes: Route[]
}



const RouteList = ({ routes }: RouteListProps) => {
    return (
        <div className="max-w-7xl mx-auto ">
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                {routes.map((route) => (
                    <RouteCard key={route.id} {...route} />
                ))}
            </div>
        </div>
    )
}

export default RouteList