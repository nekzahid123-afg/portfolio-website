import { useState, useEffect } from "react";

function Carousel({ mediaItems }) {
  const [index, setIndex] = useState(0);
  const hasMedia = Boolean(mediaItems?.length);
  const itemCount = mediaItems?.length ?? 0;

  useEffect(() => {
    if (!hasMedia) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev === itemCount - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, [hasMedia, itemCount]);

  if (!hasMedia) {
    return <p>No media to display.</p>;
  }

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? itemCount - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === itemCount - 1 ? 0 : prev + 1));
  };

  const currentItem = mediaItems[index];

  return (
    <div className="flex flex-col items-center w-full py-4 px-4">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 w-full">
        <button
          onClick={prevSlide}
          className="px-4 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 active:bg-blue-800 transition border-2 border-blue-600 cursor-pointer order-2 sm:order-1"
        >
          ← Previous
        </button>

        <img
          src={currentItem.src}
          alt={currentItem.title}
          className="rounded shadow-md w-[600px] h-[600px] object-cover order-1 sm:order-2"
        />

        <button
          onClick={nextSlide}
          className="px-4 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 active:bg-blue-800 transition border-2 border-blue-600 cursor-pointer order-3"
        >
          Next →
        </button>
      </div>

      <h3 className="mt-4 text-lg sm:text-xl font-bold text-center">
        {currentItem.title}
      </h3>

      <p className="text-sm text-gray-500 mt-2">
        {index + 1} / {mediaItems.length}
      </p>
    </div>
  );
}

export default Carousel;
