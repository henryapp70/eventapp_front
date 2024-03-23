import api from "../api/events";
import { useQuery } from "@tanstack/react-query";
//Realizar la petición
const getAllEvents = async () => {
  const { data } = await api.get("/getallevents");
  return data;
};

//Ejecuta la función del get y guarda los datos en caché.

export const useGetAllEvents = () => {
  return useQuery({
    queryKey: ["events"],
    queryFn: getAllEvents,
  });
};
