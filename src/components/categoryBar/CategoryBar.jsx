import React from "react";
import { Link } from "react-router-dom";

const CategoryBar = () => {
  return (
    <>
      <div className="flex gap-3 justify-center text-3xl bg-deco py-4 font-semibold mt-5 font-jomhuria">
        <Link to="#">
          <h3 className="border-r-4 border-black px-2">CONCIERTOS</h3>
        </Link>
        <Link to="#">
          <h3 className="border-r-4 border-black px-2">DEPORTES</h3>
        </Link>
        <Link to="#">
          <h3 className="border-r-4 border-black px-2">TEATRO</h3>
        </Link>
        <Link to="#">
          <h3 className="border-r-4 border-black px-2">ENTRETENIMIENTO</h3>
        </Link>
        <Link to="#">
          <h3 className="border-r-4 border-black px-2">INFANTILES</h3>
        </Link>
        <Link to="#">
          <h3 className="border-r-4 border-black px-2">CURSOS</h3>
        </Link>
        <Link to="#">
          <h3 className="border-r-4 border-black px-2">LITERATURA</h3>
        </Link>
        <Link to="#">
          <h3 className="border-r-4 border-black px-2">SEMINARIOS</h3>
        </Link>
        <Link to="#">
          <h3>OTROS</h3>
        </Link>
      </div>
    </>
  );
};

export default CategoryBar;
