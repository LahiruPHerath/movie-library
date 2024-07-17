const StarRating = ({ rating }) => {
  const maxStars = 5;
  const filledStars = Math.round((rating / 10) * maxStars);

  return (
    <div className="flex">
      {[...Array(maxStars)].map((star, index) => {
        return (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={index < filledStars ? "currentColor" : "none"}
            stroke="currentColor"
            className="w-5 h-5 text-yellow-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"
            />
          </svg>
        );
      })}
    </div>
  );
};

export default StarRating;
