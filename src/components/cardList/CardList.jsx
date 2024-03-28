import { useGetEventsByPage } from "../../hooks/useEvents";
import Card from "../card/Card";

const CardList = ({ currentPage, totalEvents, filteredEvents }) => {
  const eventsPerPage = 6;

  const { data, isLoading, error } = useGetEventsByPage(
    currentPage,
    eventsPerPage,
    totalEvents
  );

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

  let eventsToDisplay = data;

  if (filteredEvents && filteredEvents.length > 0) {
    eventsToDisplay = filteredEvents;
  }
  return (
    <>
      <section className="flex flex-wrap justify-start mx-24">
        <div className="grid grid-cols-3 gap-16">
          {eventsToDisplay.map((event) => (
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
