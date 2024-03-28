import api from "../api/events";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

//Todos los eventos

export const allEvents = async () => {
  const { data } = await api.get("/getallevents");
  return data;
};
export const useAllEvents = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: allEvents,
  });
};

// Función para obtener los eventos de acuerdo a la página
const getEventsByPage = async (page, eventsPerPage, totalEvents) => {
  const from = (page - 1) * eventsPerPage + 1;
  const to = Math.min(page * eventsPerPage, totalEvents);
  const url = `/getallevents?from=${from}&to=${to}`;
  const { data } = await api.get(url);
  return data;
};
//Ejecuta la función y guarda en caché
export const useGetEventsByPage = (page, eventsPerPage, totalEvents) => {
  return useQuery({
    queryKey: ["events", page],
    queryFn: () => getEventsByPage(page, eventsPerPage, totalEvents),
    placeholderData: keepPreviousData,
  });
};

//Petición 1 evento

const getEvent = async (id) => {
  const { data } = await api.get(`getallevents/${id}`, {
    // Para que pueda comparar en la base de datos
    values: { id_event: id },
  });
  return data;
};

export const useGetEvent = () => {
  const { id } = useParams();
  return useQuery({
    queryKey: ["singleEvent", id],
    queryFn: () => getEvent(id),
    placeholderData: keepPreviousData,
  });
};
