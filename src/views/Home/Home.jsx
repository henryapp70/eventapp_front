// import eventIcon from "../../assets/icons/createEvent.svg";
// import { Link } from "react-router-dom";
import SearchBar from "../../components/searchBar/SearchBar";
import CategoryBar from "../../components/categoryBar/CategoryBar";
// import allMonths from "../../utils/months.json";
// import allCities from "../../utils/cities.json";
import CardList from "../../components/cardList/CardList";
import Carousel from "../../components/carousel/Carousel";
import Paginate from "../../components/pagination/Paginate";
import { useState, useEffect } from "react";
import { useGetEventsByPage } from "../../hooks/useEvents";
import { useStore } from "../../store/eventsStore";

const Home = () => {
  const setOriginalEvents = useStore((state) => state.setOriginalEvents);

  const [filteredEvents, setFilteredEvents] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 6;
  const totalEvents = 31;

  const { data } = useGetEventsByPage(currentPage, eventsPerPage, totalEvents);

  useEffect(() => {
    if (data) {
      setOriginalEvents(data);
      console.log("Eventos originales almacenados:", data);
    }
  }, [data, setOriginalEvents]);

  const handleFilteredEvents = (filteredResults) => {
    setFilteredEvents(filteredResults);
  };
  const handleResetEvents = () => {
    setFilteredEvents(null);
  };
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex justify-center flex-grow"></div>

        {/* <Link to="/crear-evento" className="flex items-center ml-auto">
          <img src={eventIcon} alt="Event Icon" className="mr-2" />
          <h2 className="font-semibold text-2xl">Crear Evento</h2>
        </Link> */}
      </div>

      <Carousel />
      <CategoryBar />
      {/* //Acá son los botones de filtrado */}
      <h1 className="mx-40 my-10 w-3/12 px-10 font-extrabold text-3xl">
        POPULAR EVENTS
      </h1>
      <div className="flex mx-10 my-10 gap-5 text-xl">
        {/* <div>
          <select className="font-jomhuria p-2 w-56 border border-button1">
            <option>Mes</option>
            {allMonths.meses.map((mes) => (
              <option key={mes}>{mes}</option>
            ))}
          </select>
        </div>
        <div>
          <select className="font-jomhuria p-2 w-56 border border-button1">
            <option>Ciudad</option>
            {allCities.ciudades.map((ciudad) => (
              <option key={ciudad}>{ciudad}</option>
            ))}
          </select>
        </div> */}

        <div className="w-full flex gap-5 justify-between mx-20">
          <Paginate
            currentPage={currentPage}
            totalPages={Math.ceil(totalEvents / eventsPerPage)}
            setCurrentPage={setCurrentPage}
          />
          <SearchBar
            setFilteredEvents={handleFilteredEvents}
            resetEvents={handleResetEvents}
          />
        </div>
      </div>

      {/* Aquí vienen las Cards */}

      <div>
        <CardList
          currentPage={currentPage}
          totalEvents={totalEvents}
          filteredEvents={filteredEvents}
          data={data}
        />
      </div>
    </>
  );
};

export default Home;
