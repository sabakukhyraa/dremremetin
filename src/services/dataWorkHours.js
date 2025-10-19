const days = {
  EN: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  TR: [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ],
};
const now = new Date();
const dayOfWeek = now.getDay();

export default function workHours(language) {
  const today = days[language][dayOfWeek];
  const hour = now.getHours();
  if (dayOfWeek == 0) {
    return {
      isOpen: false,
      today,
    }
  }
}
