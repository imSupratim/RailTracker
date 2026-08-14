import { getTrainDetails, searchTrain } from "../services/trainService.js";

export const search = async (req, res) => {
  const query = req.query.query;

  if (!query) {
    return res.status(400).json({
      success: false,
      message: "Search query is required",
    });
  }

  const trains = await searchTrain(query);

  res.json({
    success: true,
    count: trains.length,
    trains,
  });
};

export const details = async(req, res) => {
  const train = await getTrainDetails(req.params.trainNumber);

  res.json({
    success: true,
    train,
  });
};