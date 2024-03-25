import eventIcon from "../../assets/icons/createEvent.svg";
import { Link } from "react-router-dom";
import SearchBar from "../../components/searchBar/SearchBar";
import CategoryBar from "../../components/categoryBar/CategoryBar";
import allMonths from "../../utils/months.json";
import allCities from "../../utils/cities.json";
import CardList from "../../components/cardList/CardList";
import Carousel from "../../components/carousel/Carousel";

const Home = () => {
  return (
    <>
      <div className="flex justify-between items-center mt-5 mx-10 p-5">
        <div></div>
        <div className="flex justify-center flex-grow">
          <SearchBar />
        </div>
        <Link to="/crear-evento" className="flex items-center ml-auto">
          <img src={eventIcon} alt="Event Icon" className="mr-2" />
          <h2 className="font-semibold text-2xl">Crear Evento</h2>
        </Link>
      </div>
      <CategoryBar />
      <Carousel />
      {/* //Acá son los botones de filtrado */}

      <div className="flex mx-10 my-10 gap-5 text-xl">
        <div>
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
        </div>
      </div>

      {/* Aquí vienen las Cards */}

      <div>
        <CardList />
      </div>
    </>
  );
};

export default Home;
