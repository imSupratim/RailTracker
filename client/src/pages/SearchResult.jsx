import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../services/api";

import TrainCard from "../components/TrainCard";
import Loading from "../components/Loading";
import EmptyState from "../components/EmptyState";

export default function SearchResult() {
  const [params] = useSearchParams();

  const query = params.get("q");

  const [loading, setLoading] = useState(true);
  const [trains, setTrains] = useState([]);
  const [count, setCount] = useState(0);
  

  useEffect(() => {
    if (!query) return;

    const fetchTrains = async () => {
      try {
        setLoading(true);

        const res = await api.get(`/train/search?query=${query}`);
        console.log(res.data);
        const totalCount = res.data.count;
        setCount(totalCount)
        setTrains(res.data.trains);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrains();
  }, [query]);

  if (loading) return <Loading />;

  if (!trains.length) return <EmptyState />;

  return (
    <div className="max-w-5xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold mb-8">Search Results ({count})</h1>

      <div className="space-y-5">
        {trains.map((train) => (
          <TrainCard key={train.number} train={train} />
        ))}
      </div>
    </div>
  );
}
