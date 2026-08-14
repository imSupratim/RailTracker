import SearchBox from "./SearchBox"

export default function Hero() {
  return (
    <section className="text-center py-24">

      <h1 className="text-6xl font-bold">

        Track Every Journey

      </h1>

      <p className="mt-6 text-xl text-slate-400">

        Live Train Tracking Across India

      </p>

      <SearchBox />

    </section>
  );
}