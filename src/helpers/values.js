import { allEvents } from "../hooks/useEvents";

export const fetchEvents = async () => {
  const eventos = await allEvents(); // Llama a allEvents para obtener los datos
  const cities = Array.from(new Set(eventos.map((event) => event.city)));
  const categories = Array.from(
    new Set(eventos.map((event) => event.category))
  );
  console.log(cities);
  console.log(categories);
  return { cities, categories };
};
