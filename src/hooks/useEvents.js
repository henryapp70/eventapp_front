import api from "../api/events";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

//Realizar la petición para traer todos los eventos
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

//Petición 1 evento

const getEvent = async (id) => {
  const { data } = await api.get(`getallevents/${id}`, {
    // Para que pueda comparar en la base de datos
    values: { id_event: id },
  });
  console.log(data);
  return data;
};

export const useGetEvent = () => {
  const { id } = useParams();
  return useQuery({
    queryKey: ["singleEvent", id],
    queryFn: () => getEvent(id),
  });
};
