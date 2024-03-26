const Paginate = ({ currentPage, totalPages, setCurrentPage }) => {
  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex gap-2">
      <button
        className={`${
          currentPage === 1
            ? "bg-gray-300 text-gray-400 py-2 px-4 font-bold cursor-not-allowed"
            : "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4"
        } rounded-r`}
        onClick={handlePrevClick}
      >
        Prev
      </button>
      {/* //Crear el array y obtener los numeros del array con keys */}
      {[...Array(totalPages).keys()].map((num) => (
        <div className="" key={num + 1}>
          <button
            className={`bg-base py-2 px-4 text-white hover:bg-deco ${
              num + 1 === currentPage ? "font-bold bg-deco" : ""
            }`}
            onClick={() => setCurrentPage(num + 1)}
          >
            {num + 1}
          </button>
        </div>
      ))}

      <button
        className={`${
          currentPage === totalPages
            ? "bg-gray-300 text-gray-400 py-2 px-4 font-bold cursor-not-allowed"
            : "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4"
        } rounded-r`}
        onClick={handleNextClick}
      >
        Next
      </button>
    </div>
  );
};

export default Paginate;
