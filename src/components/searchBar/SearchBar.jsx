import search from "../../assets/icons/searchIcon.svg";
const SearchBar = () => {
  return (
    <>
      <div className="flex rounded-full border border-gray-950 w-96 bg-gray-100">
        <input
          className="rounded-full border-none focus:outline-none pl-4 pr-12 pt-3 pb-3 w-full bg-transparent"
          type="text"
          placeholder="Busca por evento o lugar..."
        />
        <img
          src={search}
          alt="Search Icon"
          className="bg-black rounded-full bg-gradient-to-r from-button1 to-deco p-2"
        />
      </div>
    </>
  );
};

export default SearchBar;
