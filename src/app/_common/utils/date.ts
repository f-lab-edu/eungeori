export const formatDate = (date: Date) => {
  const year = date.getFullYear().toString().slice(-2);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const dayName = new Intl.DateTimeFormat('ko-KR', { weekday: 'long' }).format(date).slice(0, 1);
  return `${year}.${month}.${day} (${dayName})`;
};

export const formatYYYYMMDD = (date: Date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}${month}${day}`;
};

export const formatToLocalYYYYMMDD = (date: Date) => {
  return date
    .toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .replace(/. /g, '-')
    .replace('.', '');
};

export const formatToLocalISOString = (
  time: {
    hour: number;
    minute: number;
  },
  dateStr: string,
) => {
  const [year, month, day] = dateStr.split('-').map(Number);
  const date = new Date(year, month - 1, day, time.hour, time.minute);

  const yearStr = date.getFullYear();
  const monthStr = String(date.getMonth() + 1).padStart(2, '0');
  const dayStr = String(date.getDate()).padStart(2, '0');
  const hourStr = String(date.getHours()).padStart(2, '0');
  const minuteStr = String(date.getMinutes()).padStart(2, '0');
  const secondStr = String(date.getSeconds()).padStart(2, '0');

  return `${yearStr}-${monthStr}-${dayStr}T${hourStr}:${minuteStr}:${secondStr}`;
};
