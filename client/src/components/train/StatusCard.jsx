export default function StatusCard({ title, value }) {
  return (
    <div className="bg-slate-900 rounded-xl w-1/3 md:w-1/8 flex  flex-col items-center border hover:scale-105 transition ease-in-out border-slate-800 p-6">
      <p className="text-slate-400 text-sm">{title}</p>

      <h2 className="text-xl font-semibold mt-3">{value}</h2>
    </div>
  );
}
