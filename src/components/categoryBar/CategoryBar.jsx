import React from "react";
import { Link } from "react-router-dom";

const CategoryBar = () => {
  return (
    <>
      <div className="flex gap-3 justify-center text-2xl bg-deco py-4 font-semibold mt-5 font-jomhuria">
        <Link to="#">
          <h3 className="border-r-4 border-black px-2 hover:text-gray-100">
            CONCIERTOS
          </h3>
        </Link>
        <Link to="#">
          <h3 className="border-r-4 border-black px-2 hover:text-gray-100">
            DEPORTES
          </h3>
        </Link>
        <Link to="#">
          <h3 className="border-r-4 border-black px-2 hover:text-gray-100">
            TEATRO
          </h3>
        </Link>
        <Link to="#">
          <h3 className="border-r-4 border-black px-2 hover:text-gray-100">
            ENTRETENIMIENTO
          </h3>
        </Link>
        <Link to="#">
          <h3 className="border-r-4 border-black px-2 hover:text-gray-100">
            INFANTILES
          </h3>
        </Link>
        {/* <Link to="#">
          <h3 className="border-r-4 border-black px-2 hover:text-gray-100">
            CURSOS
          </h3>
        </Link> */}
        <Link to="#">
          <h3 className="border-r-4 border-black px-2 hover:text-gray-100">
            LITERATURA
          </h3>
        </Link>
        <Link to="#">
          <h3 className="border-r-4 border-black px-2 hover:text-gray-100">
            SEMINARIOS
          </h3>
        </Link>
        <Link to="#">
          <h3 className="hover:text-gray-100">OTROS</h3>
        </Link>
      </div>
    </>
  );
};

export default CategoryBar;
