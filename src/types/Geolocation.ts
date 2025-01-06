export type Location = {
    lat: number;
    lng: number;
};

export type Stop = {
    id: string;
    name: string;
    location: Location;
    distance: string;
};

export type ActiveBus = {
    id: string;
    routeNumber: string;
    currentStop: string;
};

export type BusLocation = {
    busId: string;
    location: Location;
    nextStop: Stop;
    estimatedArrival: string;
};