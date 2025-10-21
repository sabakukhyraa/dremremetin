import { MapPin } from "lucide-react";

// Map Component with Location Notes
const MapWithNotes = ({ latitude, longitude, apiKey }) => {
  const mapUrl = apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${latitude},${longitude}&zoom=15`
    : `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;

  return (
    <div className="w-full">
      {/* Map Container */}
      <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src={mapUrl}
          allowFullScreen
          className="w-full h-full"
        />
        <div className="absolute top-3 right-3 bg-white px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
          <MapPin className="w-4 h-4 text-red-500" />
          <span className="text-xs font-medium">Konum</span>
        </div>
      </div>
    </div>
  );
};

export default MapWithNotes;
