export default function JourneyProgress({ progress }) {
  return (
    <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
      <div className="flex justify-between mb-4">
        <h2 className="font-semibold">Journey Progress</h2>

        <span>{progress}%</span>
      </div>

      <div className="w-full h-3 rounded-full bg-slate-700">
        <div
          style={{
            width: `${progress}%`,
          }}
          className="h-full rounded-full bg-blue-600 transition-all duration-1000"
        />
      </div>
    </div>
  );
}
