import { useEffect, useState } from "react";
import { getTrainDetails } from "../services/trainService";

export default function useTrain(trainNumber) {
  const [train, setTrain] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTrain = async () => {
      try {
        setLoading(true);

        const data = await getTrainDetails(trainNumber);

        setTrain(data);

        setError("");
      } catch (err) {
        setError("Unable to fetch train details.");
      } finally {
        setLoading(false);
      }
    };

    fetchTrain();

    const interval = setInterval(fetchTrain, 30000);

    return () => clearInterval(interval);
  }, [trainNumber]);

  return {
    train,
    loading,
    error,
  };
}
