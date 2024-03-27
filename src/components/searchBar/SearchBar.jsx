import { useState } from "react";
import search from "../../assets/icons/searchIcon.svg";
import { getEventsByCategory } from "../../hooks/useEvents";
import { useEventsStore } from "../../store/eventsStore";

const SearchBar = () => {
  //Estado local y manejo del inputs
  const [input, setInput] = useState("");
  //Guardar en el Estado de Zustand
  const setCategory = useEventsStore((state) => state.setCategory);

  const handleChange = (event) => {
    setInput(event.target.value);
  };
  //Manejo del envío
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const events = await getEventsByCategory("category", input);
      console.log("Eventos encontrados:", events);
      setCategory(events);
    } catch (error) {
      console.error("Error al buscar eventos:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex rounded-full border border-gray-950 w-96 bg-gray-100">
          <input
            className="rounded-full border-none focus:outline-none pl-4 pr-12 pt-1 pb-1 w-full bg-transparent"
            type="text"
            value={input}
            placeholder="Busca por evento o lugar..."
            onChange={handleChange}
          />
          <button type="submit">
            <img
              src={search}
              alt="Search Icon"
              className="rounded-full bg-gradient-to-r from-button1 to-deco p-2"
            />
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
