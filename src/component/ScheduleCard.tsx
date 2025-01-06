import React, { useState } from 'react';
import { Bus, Clock, X } from 'lucide-react';
import { Schedule } from '../types/Schedule';

type ScheduleCardProps = {
  schedule: Schedule;
};

export default function ScheduleCard({ schedule }: ScheduleCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePurchase = () => {
    // Handle ticket purchase logic
    console.log('Purchasing ticket for schedule:', schedule.id);
    setIsModalOpen(false);
  };

  return (
    <>
      <div 
        className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow cursor-pointer w-80"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-2 rounded-full">
              <Bus className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold">Route {schedule.routeNumber}</h3>
              <p className="text-sm text-gray-600">{schedule.routeName}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-semibold">{schedule.arrivalTime}</div>
            <div className="text-sm text-gray-500">
              {schedule.onTime ? (
                <span className="text-green-600">On Time</span>
              ) : (
                <span className="text-red-600">Delayed</span>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-2" />
            <span>Duration: {schedule.duration}</span>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Next Stop: {schedule.nextStop}</span>
            <span className="font-medium">{schedule.nextStopTime}</span>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Schedule Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Route</span>
                  <span className="font-medium">{schedule.routeNumber} - {schedule.routeName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Departure</span>
                  <span className="font-medium">{schedule.arrivalTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-medium">{schedule.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status</span>
                  <span className={schedule.onTime ? "text-green-600" : "text-red-600"}>
                    {schedule.onTime ? "On Time" : "Delayed"}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 -mx-6 -mb-6 p-6 rounded-b-lg">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Ticket Price</span>
                <span className="text-xl font-bold">$2.50</span>
              </div>
              <button
                onClick={handlePurchase}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Purchase Ticket
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}