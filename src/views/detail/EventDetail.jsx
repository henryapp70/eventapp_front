import { useGetEvent } from "../../hooks/useEvents";
import CategoryBar from "../../components/categoryBar/CategoryBar";
const EventDetail = () => {
  const { data, isLoading } = useGetEvent();
  if (isLoading) return <div>Cargando...</div>;
  if (!data) return <div>No se encontraron los detalles del evento</div>;

  return (
    <div>
      <CategoryBar />
      <div className="flex flex-col items-center">
        <p>{data.name}</p>
        <p>{data.description}</p>
        <img src={data.image} width={500} height={500} />
        <p>{data.location}</p>
        <p>{data.start_date}</p>
        <p>{data.end_date}</p>
        <p>{data.start_hour}</p>
        <p>{data.end_hour}</p>
      </div>
    </div>
  );
};

export default EventDetail;
