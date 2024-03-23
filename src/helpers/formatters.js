export function formatDate(dateString) {
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const date = new Date(dateString);
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${day} de ${months[monthIndex]} ${year}`;
}

export function formatHour(hourString) {
  const hour = parseInt(hourString.split(":")[0]);
  const formattedHour = hour < 10 ? hourString[1] : hourString.split(":")[0];
  const formattedTime = formattedHour + " hrs.";
  return formattedTime;
}
