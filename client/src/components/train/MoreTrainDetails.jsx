import { ArrowBigRight } from "lucide-react";
import React from "react";
import StatusCard from "./StatusCard";

const MoreTrainDetails = ({ train }) => {
  const dayName = {
    mon: "Monday",
    tue: "Tuesday",
    wed: "Wednesday",
    thu: "Thursday",
    fri: "Friday",
    sat: "Saturday",
    sun: "Sunday",
  };

  const duration = train.train.duration / 60;

  return (
    <div className='bg-slate-900 rounded-2xl border border-slate-800 p-8"'>
      <div className="flex  p-4 md:p-6 rounded-2xl gap-5 md:gap-10 flex-wrap items-center">
        {train.train.runDays.map((days) => (
          <div className="text-xs md:text-sm bg-slate-800 px-4 py-2 rounded-2xl hover:shadow-2xl hover:scale-105 transition ease-in-out">
            {dayName[days]}
          </div>
        ))}
      </div>

      <div className="p-6 flex flex-wrap gap-5 justify-center">
        <StatusCard title="Distance" value={train.train.distance} />
        <StatusCard title="Duration (hrs)" value={duration.toFixed(2)} />
        <StatusCard title="Average Speed" value={train.train.avgSpeed} />
        <StatusCard title="Max Speed" value={train.train.maxSpeed} />
        <StatusCard title="Halts" value={train.train.totalHalts} />
        <StatusCard title="Return Train" value={train.train.returnTrain} />
      </div>

      {train.train?.coachPosition && (
        <div className="p-4 md:p-6 rounded-2xl border border-slate-800 mx-6 my-4">
          <p>Coach Position</p>
          <div className="flex  overflow-x-auto whitespace-nowrap gap-2 mt-6 p-2 bg-slate-900 rounded-xl">
            {train.train.coachPosition.split("-").map((coach, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center w-20 h-16 bg-slate-700 rounded-lg text-xs font-semibold"
              >
                {coach}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-between p-6 md:flex-row flex-col">
        {train.currentLocation.status === "at-station" ? (
          <div className="flex flex-col gap-2">
            <p className="bg-gray-800 p-3 rounded-2xl">
              At: {train.currentLocation.stationCode}
            </p>
            <p className="bg-gray-800 p-3 rounded-2xl">
              Status: {train.currentLocation.status}
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <p className="bg-gray-800 p-3 rounded-2xl">
              Left: {train.currentLocation.stationCode}
            </p>
            <p className="bg-gray-800 p-3 rounded-2xl">
              Status: {train.currentLocation.status}
            </p>
          </div>
        )}

        <div className="flex flex-col gap-2">
          <p className="bg-gray-800 p-3 rounded-2xl">
            Next Station: {train.nextHalt.stationName} (
            {train.nextHalt.stationCode})
          </p>
          <p className="bg-gray-800 p-3 rounded-2xl">
            {train.nextHalt.distance} km
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoreTrainDetails;
