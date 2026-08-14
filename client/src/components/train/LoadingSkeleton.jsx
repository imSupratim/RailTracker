export default function LoadingSkeleton() {
  return (
    <div className="max-w-7xl mx-auto p-6 animate-pulse">
      <div className="h-44 rounded-xl bg-slate-800" />

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="h-32 rounded-xl bg-slate-800" />

        <div className="h-32 rounded-xl bg-slate-800" />

        <div className="h-32 rounded-xl bg-slate-800" />

        <div className="h-32 rounded-xl bg-slate-800" />
      </div>
    </div>
  );
}
