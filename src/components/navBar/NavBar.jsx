const NavBar = () => {
  return (
    <div className="flex justify-between gap-10 bg-base text-xl">
      <div className="bg-gradient-to-r from-teal-600 to-black px-2 py-2">
        <h2 className="text-white border-r-4 border-white pr-2 cursor-pointer">
          INICIO
        </h2>
      </div>
      <div>
        <h1 className="text-deco text-3xl font-bold">EventApp</h1>
      </div>
      <div className="flex gap-8 items-center">
        <div className="bg-gradient-to-r from-teal-600 to-black px-2 py-2">
          <h2 className="text-white cursor-pointer">Login</h2>
        </div>
        <div className="bg-gradient-to-r from-teal-600 to-black px-4 py-2">
          <h2 className="text-white cursor-pointer">Registrarse</h2>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
