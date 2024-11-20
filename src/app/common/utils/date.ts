export const formatDate = (date: Date) => {
  const year = date.getFullYear().toString().slice(-2);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const dayName = new Intl.DateTimeFormat("ko-KR", { weekday: "long" }).format(date).slice(0, 1);
  return `${year}.${month}.${day} (${dayName})`;
};

export const formatYYYYMMDD = (date: Date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}${month}${day}`;
};
