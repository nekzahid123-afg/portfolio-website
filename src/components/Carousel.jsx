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
    <div className="flex flex-col items-center w-full">
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={prevSlide}
          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
        >
          Previous
        </button>

        <img
          src={currentItem.src}
          alt={currentItem.title}
          className="rounded shadow-md w-[600px] h-[600px] object-cover"
        />

        <button
          onClick={nextSlide}
          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
        >
          Next
        </button>
      </div>

      <h3 className="mt-3 text-xl font-bold">{currentItem.title}</h3>

      <p className="text-sm text-gray-500">
        {index + 1} / {mediaItems.length}
      </p>
    </div>
  );
}

export default Carousel;
