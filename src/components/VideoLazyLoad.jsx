import React from "react";
import { useInView } from "react-intersection-observer";

const VideoLazyLoad = ({ src, type, className }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "100px",
  });

  return (
    <div ref={ref} className={`video ${className}`}>
      {inView && (
        <video
          className="rounded-md object-cover w-full h-52 xl:h-96"
          autoPlay
          loop
          muted
        >
          <source src={src} type={type} />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default VideoLazyLoad;
