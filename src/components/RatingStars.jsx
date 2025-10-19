export default function RatingStars({ rate }) {
  return (
    <div className="rating-stars w-20 xl:w-40">
      <svg
        style={{ display: "none" }}
        width="148px"
        height="27px"
        viewBox="0 0 148 27"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <symbol id="stars-rating">
          <polygon
            id="Star"
            points="14 20.5968214 5.34752416 27 8.68000007 16.6778501 5.55111512e-16 10.3130823 10.7120592 10.3368215 14 0 17.2879408 10.3368215 28 10.3130823 19.3199999 16.6778501 22.6524758 27"
          ></polygon>
          <polygon
            id="Star-Copy"
            points="44 20.5968214 35.3475242 27 38.6800001 16.6778501 30 10.3130823 40.7120592 10.3368215 44 0 47.2879408 10.3368215 58 10.3130823 49.3199999 16.6778501 52.6524758 27"
          ></polygon>
          <polygon
            id="Star-Copy-2"
            points="74 20.5968214 65.3475242 27 68.6800001 16.6778501 60 10.3130823 70.7120592 10.3368215 74 0 77.2879408 10.3368215 88 10.3130823 79.3199999 16.6778501 82.6524758 27"
          ></polygon>
          <polygon
            id="Star-Copy-3"
            points="104 20.5968214 95.3475242 27 98.6800001 16.6778501 90 10.3130823 100.712059 10.3368215 104 0 107.287941 10.3368215 118 10.3130823 109.32 16.6778501 112.652476 27"
          ></polygon>
          <polygon
            id="Star-Copy-4"
            points="134 20.5968214 125.347524 27 128.68 16.6778501 120 10.3130823 130.712059 10.3368215 134 0 137.287941 10.3368215 148 10.3130823 139.32 16.6778501 142.652476 27"
          ></polygon>
        </symbol>
      </svg>
      <svg className="icon" viewBox="0 0 148 27">
        <use xlinkHref="#stars-rating" fill="#ccc" />
      </svg>
      <svg className="icon" viewBox="0 0 148 27">
        <defs>
          <clipPath id="rating-percentage">
            <rect
              x="0"
              y="0"
              width={`calc(${(rate / 5) * 100}%)`}
              height="100%"
            />
          </clipPath>
        </defs>
        <use
          xlinkHref="#stars-rating"
          fill="#fbbf24"
          clipPath="url(#rating-percentage)"
        />
      </svg>
    </div>
  );
}
