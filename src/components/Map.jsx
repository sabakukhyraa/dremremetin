const API_KEY = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;
const PLACE_ID = import.meta.env.VITE_PLACE_ID;

export default function Map() {
  if (!API_KEY || !PLACE_ID) {
    return (
      <p className="text-white">
        Harita yüklenemiyor. API key veya Place ID eksik.
      </p>
    );
  }

  const src = `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=place_id:${PLACE_ID}`;

  return (
    <div className="w-64 lg:w-72 2xl:w-96 aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
      <iframe
        title="Clinic Location"
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
