import { events } from "../../utils/events";
import Card from "../card/Card";
const CardList = () => {
  events;
  return (
    <>
      <section className="flex flex-wrap justify-start mx-24">
        <div className="grid grid-cols-2 gap-16">
          {events.map((event) => (
            <Card
              key={event.name}
              img={event.img}
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
