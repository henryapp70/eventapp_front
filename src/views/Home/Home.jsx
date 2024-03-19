import eventIcon from "../../assets/icons/createEvent.svg";
import { Link } from "react-router-dom";
import SearchBar from "../../components/searchBar/SearchBar";
import CategoryBar from "../../components/categoryBar/CategoryBar";

const Home = () => {
  return (
    <>
      <div className="flex justify-between items-center mt-5 mx-10 p-5">
        <div></div>
        <div className="flex justify-center flex-grow">
          <SearchBar />
        </div>
        <Link to="#" className="flex items-center ml-auto">
          <img src={eventIcon} alt="Event Icon" className="mr-2" />
          <h2 className="font-semibold text-2xl">Crear Evento</h2>
        </Link>
      </div>
      <CategoryBar />
    </>
  );
};

export default Home;
