export default function dateConverter(timestamp, language) {
  const date = new Date(timestamp * 1000); // Convert from seconds to milliseconds
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  
  const formattedDate = date.toLocaleString(language, options);
  
  return formattedDate;
}

