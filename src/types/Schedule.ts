
export type Schedule = {
    id: string;
    routeId: string;
    departureTime: Date;
    arrivalTime: Date;
}


export type Stop = {
    id: string;
    name: string;
    lat: number,
    lng: number
};


export type Route = {
    id: string;
    routeNumber: string;
    routeName: string;
    stopIds: string[];
    frequency: number;
    duration: number;
}