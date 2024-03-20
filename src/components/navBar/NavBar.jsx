const NavBar = () => {
  return (
    <div className="flex justify-between gap-10 bg-base text-xl h-16 items-center font-jomhuria">
      <div className="bg-gradient-to-r from-teal-600 to-black h-16 pr-2">
        <h2 className="text-white border-r-4 border-white pr-3 cursor-pointer my-4 mx-3">
          INICIO
        </h2>
      </div>
      <div className="flex items-center">
        <h1 className="text-deco text-4xl font-bold font-jomhuria mb-2">
          EventApp
        </h1>
      </div>
      <div className="flex gap-8 items-center">
        <div className="bg-gradient-to-r from-teal-600 to-black px-2 py-2 h-16">
          <h2 className="text-white cursor-pointer my-2 mx-3">Login</h2>
        </div>
        <div className="bg-gradient-to-r from-teal-600 to-black px-4 py-2 h-16">
          <h2 className="text-white cursor-pointer my-2 mx-3">Registrarse</h2>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
