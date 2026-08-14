import {
  CircleCheckBig,
  Circle,
  TrainFront,
  Clock3,
  MapPin,
} from "lucide-react";

export default function RouteTimeline({ train }) {
  const route = train.route || [];
  const currentSequence = train.currentLocation?.sequence || 0;

  const formatTime = (date) => {
    if (!date) return "--";

    return new Date(date).toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const getStationState = (station) => {
    if (station.sequence < currentSequence) return "completed";

    if (station.sequence === currentSequence) return "current";

    return "upcoming";
  };

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 md:p-8">

      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <TrainFront className="text-blue-500" size={28} />

        <div>
          <h2 className="text-xl md:text-2xl font-bold">
            Journey Route
          </h2>

          <p className="text-sm text-slate-400">
            {route.length} stations • {train.train.distance} km
          </p>
        </div>
      </div>

      {/* Route */}
      <div className="relative max-h-[700px] overflow-y-auto pr-2">

        {route.map((station, index) => {
          const state = getStationState(station);

          const isLast = index === route.length - 1;

          return (
            <div
              key={`${station.sequence}-${station.stationCode}`}
              className="relative flex gap-4 md:gap-6 "
            >

              {/* Timeline */}
              <div className="flex flex-col items-center ">

                {/* Connector */}
                {!isLast && (
                  <div
                    className={`absolute top-10 left-[15px] md:left-[19px] w-[2px] h-full ${
                      state === "completed"
                        ? "bg-green-500"
                        : "bg-slate-700"
                    }`}
                  />
                )}

                {/* Station marker */}
                <div
                  className={`relative z-10 flex items-center justify-center rounded-full ${
                    state === "current"
                      ? "w-10 h-10 bg-blue-500 ring-4 ring-blue-500/20"
                      : state === "completed"
                      ? "w-8 h-8 bg-green-500"
                      : "w-8 h-8 bg-slate-800 border-2 border-slate-600"
                  }`}
                >
                  {state === "completed" && (
                    <CircleCheckBig
                      size={18}
                      className="text-white"
                    />
                  )}

                  {state === "current" && (
                    <TrainFront
                      size={20}
                      className="text-white"
                    />
                  )}

                  {state === "upcoming" && (
                    <Circle
                      size={12}
                      className="text-slate-500"
                      fill="currentColor"
                    />
                  )}
                </div>
              </div>

              {/* Station information */}
              <div
                className={`flex-1 px-5 pb-10 rounded-2xl pt-2 mt-2 ${
                  state === "current"
                    ? "bg-blue-500/7 rounded-xl p-4 -mt-2"
                    : station.isHalt 
                    ? "bg-green-500/10"
                    : ""
                }`}
              >

                <div className="flex flex-col md:flex-row md:justify-between gap-3">

                  {/* Station name */}
                  <div>
                    <div className="flex items-center gap-2">

                      <h3
                        className={`font-semibold  ${
                          state === "current"
                            ? "text-blue-400 text-lg"
                            : state === "completed"
                            ? "text-white"
                            : "text-slate-300"
                        }`}
                      >
                        {station.stationName}
                      </h3>

                      {station.isHalt && (
                        <span className="text-[10px] px-2 py-1 rounded-full bg-slate-800 text-slate-400">
                          HALT
                        </span>
                      )}

                      {state === "current" && (
                        <span className="text-[10px] px-2 py-1 rounded-full animate-pulse bg-green-500 text-white font-semibold">
                          CURRENT
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-500 mt-1">
                      {station.stationCode}
                    </p>
                  </div>

                  {/* Distance */}
                  <div className="text-sm text-slate-400">
                    {station.distance} km
                  </div>
                </div>

                {/* Details */}
                <div className="mt-3 flex flex-wrap gap-3 text-xs">

                  {station.scheduledArrival && (
                    <div className="flex items-center gap-1 bg-slate-800 px-3 py-2 rounded-lg">
                      <Clock3 size={14} />

                      <span>
                        Arrive {formatTime(station.scheduledArrival)}
                      </span>
                    </div>
                  )}

                  {station.scheduledDeparture && (
                    <div className="flex items-center gap-1 bg-slate-800 px-3 py-2 rounded-lg">
                      <Clock3 size={14} />

                      <span>
                        Depart {formatTime(station.scheduledDeparture)}
                      </span>
                    </div>
                  )}

                  {station.platform && (
                    <div className="flex items-center gap-1 bg-slate-800 px-3 py-2 rounded-lg">
                      <MapPin size={14} />

                      <span>
                        Platform {station.platform}
                      </span>
                    </div>
                  )}

                </div>

                {/* Delay */}
                {(station.delayArrival > 0 ||
                  station.delayDeparture > 0) && (
                  <div className="mt-3 text-xs text-red-400">
                    Delayed by{" "}
                    {Math.max(
                      station.delayArrival || 0,
                      station.delayDeparture || 0
                    )}{" "}
                    min
                  </div>
                )}

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}