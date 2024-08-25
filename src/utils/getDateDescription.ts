export const getDateDescription = (date: string) => {
  const today = new Date();
  const inputDate = new Date(date);

  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  inputDate.setHours(0, 0, 0, 0);

  if (inputDate.getTime() === today.getTime()) {
    return "Today";
  }
  if (inputDate.getTime() === tomorrow.getTime()) {
    return "Tomorrow";
  }

  const options: Intl.DateTimeFormatOptions = { weekday: "long" };
  const dayOfWeek = inputDate.toLocaleDateString("en-US", options);

  const day = inputDate.getDate();
  const monthOptions: Intl.DateTimeFormatOptions = { month: "short" };
  const month = inputDate
    .toLocaleDateString("en-US", monthOptions)
    .replace(".", "");
  return `${dayOfWeek}, ${day} ${month}`;
};
