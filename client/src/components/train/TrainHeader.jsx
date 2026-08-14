import { TrainFront, CircleCheckBig, Clock3, AArrowDown, ArrowBigRightDashIcon, ArrowBigRightIcon, TrafficCone, Signal } from "lucide-react";

export default function TrainHeader({ train }) {
  return (
    <div className="bg-slate-900 rounded-2xl border  border-slate-800 p-8">
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        <div>
          <div className="flex items-center gap-3">
            <TrainFront className="text-blue-500" size={34} />

            <div>
              <h1 className="text-3xl font-bold">{train.trainName}</h1>

              <p className="text-slate-400">Train No. {train.trainNumber}</p>
              <p><span className="font-bold">Category</span>: {train.train.category}</p>
            </div>
          </div>
        </div>

        <div className="flex gap-6 items-center md:py-1 py-4 bg-gray-800 px-5 rounded-4xl shadow-2xl">

           {train.train.source.name} ({train.train.source.code}) <ArrowBigRightIcon/> {train.train.destination.name} (
          {train.train.destination.code})

        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-green-500">
            <CircleCheckBig size={20} />

            {train.status}
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <Clock3 size={18} />
            Updated
            {new Date(train.lastUpdatedAt).toLocaleTimeString()}
          </div>

          {
            train.isLive && (
              <div className="bg-red-500 animate-pulse text-white font-semibold px-2 rounded-full w-15 text-center ">
                Live
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}
