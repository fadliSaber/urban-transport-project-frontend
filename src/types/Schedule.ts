export type Schedule = {
    id: string;
    routeNumber: string;
    routeName: string;
    arrivalTime: string;
    duration: string;
    onTime: boolean;
    nextStop: string;
    nextStopTime: string;
};


export type Stop = {
    id: string;
    name: string;
    coordinates?: {
        lat: number;
        lng: number;
    };
};

export type Route = {
    id: string;
    routeNumber: string;
    name: string;
    stops: Stop[];
    frequency: string;
    duration: string;
};