import { MapPin, Phone } from "lucide-react";
import MapWithNotes from "./SmallMap";
import { StateContext } from "../App";
import { useContext } from "react";

const ClinicPreview = ({
  image,
  title,
  description,
  phone,
  latitude,
  longitude,
  googleMapsApiKey,
  locationNotes = [],
}) => {
  const { language } = useContext(StateContext);

  const handleCall = () => {
    window.location.href = `tel:${phone}`;
  };

  const notesToDisplay = locationNotes.length > 0 && locationNotes;

  return (
    <div className="w-full lg:w-[420px] xl:w-[600px]">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Clinic Image */}
        <div className="relative h-64 w-full overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <h2 className="text-3xl font-bold text-white mb-1">{title}</h2>
          </div>
        </div>

        {/* Clinic Info */}
        <div className="p-6">
          <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

          {/* Call Button */}
          <button
            onClick={handleCall}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-colors duration-200 shadow-md hover:shadow-lg mb-6"
          >
            <Phone className="w-5 h-5" />
            <span>
              {language === "TR" ? "Hemen Ara:" : "Call Now:"} {phone}
            </span>
          </button>

          {/* Map Section */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-red-500" />
              {language === "TR"
                ? "Konum ve Yol Tarifi"
                : "Location and Directions"}
            </h3>
            <MapWithNotes
              latitude={latitude}
              longitude={longitude}
              apiKey={googleMapsApiKey}
            />
          </div>

          {/* Location Notes - Now at the bottom */}
          <div className="space-y-3 mt-6">
            {notesToDisplay.map((note, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100"
              >
                <div className="flex-shrink-0 mt-0.5 text-blue-600">
                  {note.icon || <Navigation className="w-4 h-4" />}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {note.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicPreview;
