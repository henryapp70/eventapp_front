import { events } from "../../utils/events";
import { useGetAllEvents } from "../../hooks/useEvents";
import Card from "../card/Card";
const CardList = () => {
  const { data, isLoading } = useGetAllEvents();

  if (isLoading) return <div>Cargando...</div>;
  console.log(data);
  events;
  return (
    <>
      <section className="flex flex-wrap justify-start mx-24">
        <div className="grid grid-cols-2 gap-16">
          {data.map((event) => (
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
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default CardList;
