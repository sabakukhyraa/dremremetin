import { Phone, Clock } from "lucide-react";
import { useContext } from "react";
import { StateContext } from "../App";

const BusinessContact = () => {
  // Replace with your actual business phone number
  const phoneNumber = "+905326543082";
  const { language } = useContext(StateContext);

  const workingHours =
    language == "TR"
      ? [
          { day: "Pazartesi", hours: "10:00 - 19:00" },
          { day: "Salı", hours: "10:00 - 19:00" },
          { day: "Çarşamba", hours: "10:00 - 19:00" },
          { day: "Perşembe", hours: "10:00 - 19:00" },
          { day: "Cuma", hours: "10:00 - 19:00" },
          { day: "Cumartesi", hours: "10:00 - 19:00" },
          { day: "Pazar", hours: "Kapalı" },
        ]
      : [
          { day: "Monday", hours: "10:00 - 19:00" },
          { day: "Tuesday", hours: "10:00 - 19:00" },
          { day: "Wednesday", hours: "10:00 - 19:00" },
          { day: "Thursday", hours: "10:00 - 19:00" },
          { day: "Friday", hours: "10:00 - 19:00" },
          { day: "Saturday", hours: "10:00 - 19:00" },
          { day: "Sunday", hours: "Closed" },
        ];

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  // Get current day to highlight
  const today = new Date().getDay();
  const dayMap = [6, 0, 1, 2, 3, 4, 5];

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Phone Button */}
      <button
        onClick={handlePhoneClick}
        className="w-full mb-8 bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center gap-3 transition-colors duration-200 shadow-md hover:shadow-lg"
      >
        <Phone className="w-6 h-6" />
        <span className="text-lg">Randevu için arayınız</span>
      </button>

      {/* Working Hours Table */}
      <div className="bg-[#f8fbff] rounded-lg p-4">
        <div className="flex items-center gap-2 mb-4 text-gray-700">
          <Clock className="w-5 h-5" />
          <h2 className="text-xl font-semibold">Çalışma Saatleri</h2>
        </div>

        <div className="overflow-hidden rounded-lg border border-gray-200">
          <table className="w-full">
            <tbody>
              {workingHours.map((item, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-200 last:border-b-0 ${
                    dayMap[today] === index
                      ? "bg-blue-50 font-semibold"
                      : "bg-white hover:bg-gray-50"
                  } transition-colors duration-150`}
                >
                  <td className="py-3 px-4 text-left text-gray-800">
                    {item.day}
                  </td>
                  <td
                    className={`py-3 px-4 text-right ${
                      item.hours === "Kapalı"
                        ? "text-red-600 font-medium"
                        : "text-gray-700"
                    }`}
                  >
                    {item.hours}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Optional: Add current status */}
        <div className="mt-4 text-center">
          <StatusIndicator hours={workingHours[dayMap[today]]} />
        </div>
      </div>
    </div>
  );
};

// Helper component to show if currently open/closed
const StatusIndicator = ({ hours }) => {
  if (!hours) return null;

  const isOpen = () => {
    if (hours.hours === "Kapalı") return false;

    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();

    const [open, close] = hours.hours.split(" - ").map((time) => {
      const [h, m] = time.split(":").map(Number);
      return h * 60 + m;
    });

    return currentTime >= open && currentTime < close;
  };

  const open = isOpen();

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
        open ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
      }`}
    >
      <span
        className={`w-2 h-2 rounded-full ${
          open ? "bg-green-500" : "bg-red-500"
        }`}
      ></span>
      {open ? "Şu an açık" : "Şu an kapalı"}
    </div>
  );
};

export default BusinessContact;
