import { Helmet, HelmetProvider } from "react-helmet-async";
import { useContext, useEffect, useState, useRef } from "react";
import { StateContext } from "../../App";
import dateConverter from "../../services/dateConverter";
import RatingStars from "../../components/RatingStars";

// Google Places API Configuration
const API_KEY = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;
const PLACE_ID = import.meta.env.VITE_PLACE_ID;

const CommentCard = ({ comment, index, language }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <li
      ref={cardRef}
      className={`transform transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${(index % 4) * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative h-full group ${isHovered ? "z-10" : "z-0"}`}>
        {/* Animated gradient background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-600 to-sky-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl ${
            isHovered ? "animate-pulse" : ""
          }`}
        />

        {/* Main card container */}
        <div
          className={`relative h-full bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 ${
            isHovered ? "scale-[1.02] shadow-2xl" : ""
          }`}
        >
          {/* Top gradient accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500" />

          {/* Decorative background pattern */}
          <div className="absolute top-0 right-0 w-48 h-48 opacity-5">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <defs>
                <pattern
                  id={`pattern-${index}`}
                  x="0"
                  y="0"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="2"
                    fill="currentColor"
                    className="text-blue-600"
                  />
                </pattern>
              </defs>
              <rect width="200" height="200" fill={`url(#pattern-${index})`} />
            </svg>
          </div>

          <div className="relative p-6 xl:p-8 h-full flex flex-col">
            {/* Header with author info and rating */}
            <div className="flex items-start justify-between mb-6">
              <a
                href={comment.author_url}
                className="group/author flex items-center gap-3 transform transition-transform duration-300 hover:translate-x-1"
              >
                {/* Profile photo container */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-0 group-hover/author:opacity-75 blur-md transition-opacity duration-300" />
                  {comment.profile_photo_url ? (
                    <img
                      loading="lazy"
                      className="relative w-12 h-12 xl:w-14 xl:h-14 rounded-full object-cover border-2 border-white shadow-lg"
                      src={comment.profile_photo_url}
                      alt={comment.author_name}
                    />
                  ) : (
                    <div className="relative w-12 h-12 xl:w-14 xl:h-14 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {comment.author_name.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>

                {/* Author name with hover effect */}
                <div>
                  <h3 className="text-md md:text-lg xl:text-xl font-semibold text-gray-800 group-hover/author:text-blue-600 transition-colors duration-300 text-start">
                    {comment.author_name}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {language === "TR"
                      ? "Doğrulanmış Hasta"
                      : "Verified Patient"}
                  </p>
                </div>
              </a>

              {/* Rating with animation */}
              <div className="flex flex-col items-end gap-1">
                <div
                  className={`transform transition-transform duration-500 ${
                    isHovered ? "scale-110" : ""
                  }`}
                >
                  <RatingStars rate={comment.rating} />
                </div>
                <span className="text-xs text-gray-500 font-medium">
                  {comment.rating}.0 / 5.0
                </span>
              </div>
            </div>

            {/* Quote icon */}
            <div className="mb-4">
              <svg
                className="w-8 h-8 text-blue-100"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Review text */}
            <div className="flex-grow mb-6">
              <p className="text-gray-700 leading-relaxed text-base xl:text-lg text-start">
                {comment.text}
              </p>
            </div>

            {/* Footer with date and interaction */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center gap-4">
                {/* Helpful button */}
                <button className="group/helpful flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors duration-300">
                  <svg
                    className="w-4 h-4 group-hover/helpful:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </svg>
                  <span>{language === "TR" ? "Yararlı" : "Helpful"}</span>
                </button>

                {/* Google logo */}
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span>Google</span>
                </div>
              </div>

              {/* Date */}
              <time className="text-xs text-gray-400 italic">
                {comment.relative_time_description ||
                  dateConverter(
                    comment.time,
                    language === "TR" ? "tr-TR" : "en-US"
                  )}
              </time>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default function PatientSatisfaction() {
  const { language } = useContext(StateContext);
  const [reviews, setReviews] = useState([]);
  const [placeDetails, setPlaceDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Load Google Places API and fetch reviews
    const loadGooglePlacesAPI = () => {
      // Check if Google Maps is already loaded
      if (window.google && window.google.maps && window.google.maps.places) {
        fetchPlaceReviews();
        return;
      }

      // Load Google Maps API
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places&callback=initGooglePlaces`;
      script.async = true;
      script.defer = true;

      window.initGooglePlaces = () => {
        fetchPlaceReviews();
      };

      script.onerror = () => {
        setError("Failed to load Google Maps API");
        setLoading(false);
      };

      document.head.appendChild(script);
    };

    const fetchPlaceReviews = () => {
      try {
        // Create a hidden map element for the Places service
        const map = new window.google.maps.Map(document.createElement("div"));
        const service = new window.google.maps.places.PlacesService(map);

        // Request place details including reviews
        const request = {
          placeId: PLACE_ID,
          fields: ["name", "rating", "user_ratings_total", "reviews", "url"],
          // Request reviews in the current language
          language: language === "TR" ? "tr" : "en",
        };

        service.getDetails(request, (place, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            setPlaceDetails({
              name: place.name,
              rating: place.rating,
              user_ratings_total: place.user_ratings_total,
              url: place.url,
            });

            // Process and set reviews
            if (place.reviews && place.reviews.length > 0) {
              // Google Places API returns maximum 5 most relevant reviews
              // Sort them by time (most recent first) if needed
              const processedReviews = place.reviews
                .sort((a, b) => b.time - a.time)
                .map((review) => ({
                  author_name: review.author_name,
                  author_url: review.author_url,
                  profile_photo_url: review.profile_photo_url,
                  rating: review.rating,
                  text: review.text,
                  time: review.time * 1000, // Convert to milliseconds
                  relative_time_description: review.relative_time_description,
                }));

              setReviews(processedReviews);
            } else {
              setError("No reviews found");
            }
          } else {
            console.error("Places API error:", status);
            setError(`Failed to fetch reviews: ${status}`);
          }
          setLoading(false);
        });
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("An error occurred while fetching reviews");
        setLoading(false);
      }
    };

    loadGooglePlacesAPI();
  }, [language]); // Re-fetch when language changes

  const mapComments = reviews.map((comment, index) => (
    <CommentCard
      key={index}
      comment={comment}
      index={index}
      language={language}
    />
  ));

  return (
    <HelmetProvider>
      <div className="w-full">
        <Helmet>
          <html lang={language.toLowerCase()} />

          <title>
            {language == "TR"
              ? "Hasta Memnuniyeti - Uzman Doktor Emre Metin - Ortodontist"
              : "Patient Satisfaction - Specialist Doctor Emre Metin -  Orthodontist"}
          </title>
          <meta
            name="description"
            content={
              language == "TR"
                ? "Emre Metin'in hastalarının yaptıkları yorumları okuyun."
                : "Read the comments made by patients who received treatment from Emre Metin."
            }
          />
          <link
            rel="canonical"
            href={
              language == "TR"
                ? "https://dremremetin.com/hakkimizda/hasta-memnuniyeti"
                : "https://dremremetin.com/about/patient-satisfaction"
            }
          />
          <meta
            property="og:url"
            content={
              language == "TR"
                ? "https://dremremetin.com/hakkimizda/hasta-memnuniyeti"
                : "https://dremremetin.com/about/patient-satisfaction"
            }
          />
        </Helmet>
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-12 pt-28 -mt-16">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl xl:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                {language === "TR"
                  ? "Hasta Memnuniyeti"
                  : "Patient Satisfaction"}
              </h1>

              {/* Average Rating */}
              <div className="flex flex-col items-center justify-center mt-8 mb-12">
                <div className="bg-white rounded-2xl shadow-xl p-6 xl:p-8">
                  <h2 className="text-lg font-semibold text-gray-600 mb-3">
                    {language === "TR"
                      ? "Ortalama Değerlendirme"
                      : "Average Rating"}
                  </h2>

                  {loading ? (
                    <div className="animate-pulse">
                      <div className="h-12 bg-gray-200 rounded w-32 mx-auto"></div>
                    </div>
                  ) : error ? (
                    <p className="text-red-500 text-sm">{error}</p>
                  ) : placeDetails ? (
                    <>
                      <div className="flex items-center gap-4">
                        <div className="transform scale-125">
                          <RatingStars rate={Math.round(placeDetails.rating)} />
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-5xl xl:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                            {placeDetails.rating.toFixed(1)}
                          </span>
                          <span className="text-gray-500 text-lg">/5.0</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 mt-3">
                        {placeDetails.user_ratings_total}{" "}
                        {language === "TR" ? "hasta yorumu" : "patient reviews"}
                      </p>
                    </>
                  ) : (
                    <p className="text-gray-500">No data available</p>
                  )}
                </div>
              </div>
            </div>

            {/* Reviews Grid */}
            <section className="space-y-8">
              <h2 className="text-2xl xl:text-3xl font-bold text-gray-800 text-center mb-8">
                {language === "TR"
                  ? "Hasta Değerlendirmeleri"
                  : "Patient Reviews"}
              </h2>

              {loading ? (
                <div className="grid xl:grid-cols-2 grid-cols-1 gap-6 xl:gap-8">
                  {[...Array(4)].map((_, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl shadow-lg p-6 animate-pulse"
                    >
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                          <div>
                            <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
                            <div className="h-3 bg-gray-200 rounded w-24"></div>
                          </div>
                        </div>
                        <div className="h-4 bg-gray-200 rounded w-20"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-3 bg-gray-200 rounded w-full"></div>
                        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                        <div className="h-3 bg-gray-200 rounded w-4/6"></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : error ? (
                <div className="text-center py-12">
                  <p className="text-red-500 mb-4">{error}</p>
                  <p className="text-gray-600">
                    {language === "TR"
                      ? "Yorumlar yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin."
                      : "An error occurred while loading reviews. Please try again later."}
                  </p>
                </div>
              ) : reviews.length > 0 ? (
                <ul className="grid xl:grid-cols-2 grid-cols-1 gap-6 xl:gap-8">
                  {mapComments}
                </ul>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600">
                    {language === "TR"
                      ? "Henüz yorum bulunmamaktadır."
                      : "No reviews available yet."}
                  </p>
                </div>
              )}

              {/* More reviews link */}
              {placeDetails && (
                <div className="text-center pt-8">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={
                      placeDetails.url ||
                      `https://search.google.com/local/reviews?placeid=${PLACE_ID}`
                    }
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
                  >
                    <span>
                      {language === "TR" ? "Daha fazla" : "Read more"}
                    </span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}
