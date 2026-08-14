import { Link } from "react-router-dom";

export default function TrainCard({ train }) {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-bold">{train.name}</h2>

          <p className="text-slate-400">#{train.number}</p>
        </div>

        <Link
          to={`/train/${train.number}`}
          className="bg-blue-600 px-4 py-2 rounded-lg"
        >
          Track Live
        </Link>
      </div>
{/* 
      <div className="mt-6 flex justify-between">
        <div>
          <p className="text-sm text-slate-500">Source</p>

          <p>{train.source}</p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Destination</p>

          <p>{train.destination}</p>
        </div>
      </div> */}
    </div>
  );
}
