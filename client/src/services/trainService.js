import api from "./api";

export const getTrainDetails = async (trainNumber) => {
  const { data } = await api.get(`/train/${trainNumber}`);
  return data.train;
  console.log(data.train);
};
