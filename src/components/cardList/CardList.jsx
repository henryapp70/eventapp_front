import { useGetEventsByPage } from "../../hooks/useEvents";
import Card from "../card/Card";
import { useEventsStore } from "../../store/eventsStore";

const CardList = ({ currentPage, totalEvents }) => {
  const filterByCategory = useEventsStore((state) => state.filterByCategory);
  const eventsPerPage = 3;
  const { data, isLoading, error } = useGetEventsByPage(
    currentPage,
    eventsPerPage,
    totalEvents
  );

  //Hay resultados de la búsqueda
  console.log("Aqui se quedan almacenados:", filterByCategory);
  const filtered = filterByCategory.length > 0;

  if (isLoading)
    return (
      <div className="text-deco text-center font-bold text-4xl">
        Cargando...
      </div>
    );
  if (error)
    return (
      <div className="text-red-500 text-center font-bold text-4xl">
        Error al cargar los eventos
      </div>
    );

  return (
    <>
      <section className="flex flex-wrap justify-start mx-24">
        <div className="grid grid-cols-2 gap-16">
          {filtered
            ? filtered.map((event) => (
                <Card
                  key={event.id_event}
                  id={event.id_event}
                  image={event?.image[0]}
                  description={event.description}
                  name={event.name}
                  city={event.city}
                  location={event.location}
                  eventType={event.event_type}
                  startDate={event.start_date}
                  endDate={event.end_date}
                  startHour={event.start_hour}
                  category={event.category}
                />
              ))
            : data.map((event) => (
                <Card
                  key={event.id_event}
                  id={event.id_event}
                  image={event.image}
                  description={event.description}
                  name={event.name}
                  city={event.city}
                  location={event.location}
                  eventType={event.event_type}
                  startDate={event.start_date}
                  endDate={event.end_date}
                  startHour={event.start_hour}
                  category={event.category}
                />
              ))}
        </div>
      </section>
    </>
  );
};

export default CardList;
