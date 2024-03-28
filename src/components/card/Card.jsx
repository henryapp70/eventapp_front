import { formatDate, formatHour } from "../../helpers/formatters";
import locationIcon from "../../assets/icons/locationIcon.svg";
import tickets from "../../assets/icons/tickets.svg";
import comments from "../../assets/icons/comments.svg";
import eye from "../../assets/icons/closedEye.svg";
import { Link } from "react-router-dom";

const Card = ({
  id,
  name,
  image,
  city,
  description,
  startDate,
  endDate,
  startHour,
  endHour,
  eventType,
  location,
  category,
}) => {
  //Formateando fechas
  const formattedStartDate = formatDate(startDate);
  //Formateando horas
  const formattedStartHour = formatHour(startHour);

  return (
    <div className="h-full flex items-center justify-center cursor-pointer hover:shadow-2xl hover:scale-105 transition duration-300">
      <Link to={`/evento/${id}`}>
        <div className="h-full w-full bg-gradient-to-r from-button1  to-deco p-1 bg-white">
          <div className=" h-full w-full bg-white relative">
            <div className="relative">
              <h3 className="flex justify-center gap-2 align-middle text-2xl text-center font-semibold w-full bg-slate-200 bg-opacity-60 absolute top-20 left-0 z-10 p-2">
                <img
                  src={locationIcon}
                  alt="Icono de ubicación"
                  className="align-middle ml-2"
                />
                <span className="mt-1 font-extrabold">{city}</span>
              </h3>
              <div>
                <img src={image} className="max-w-md p-2 relative z-0" />
              </div>
            </div>

            <div className="text-center text-xl font-semibold p-2">
              <p>
                {name} <span className="text-deco">/ {category}</span>
              </p>
              <div>
                <p>{location}</p>
                <p className="text-sm">
                  {formattedStartDate} - {formattedStartHour}
                </p>
                <hr className="mt-2" />
              </div>
              <div className="flex justify-between mx-4 my-1">
                <img src={eye} alt="Ojo cerrado" />
                <img src={comments} alt="Comentarios" />
                <img src={tickets} alt="Compra tickets" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
