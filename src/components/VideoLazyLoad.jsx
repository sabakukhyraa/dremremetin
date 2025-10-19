import React from "react";
import LazyLoad from "react-lazyload";

const VideoLazyLoad = ({ src, type, className }) => {
  return (
    <LazyLoad height={200} offset={100}>
      <div className={`video ${className}`}>
        <video className="rounded-md object-cover w-full h-52 xl:h-96" autoPlay loop muted>
          <source src={src} type={type} />
          Your browser does not support the video tag.
        </video>
      </div>
    </LazyLoad>
  );
};

export default VideoLazyLoad;
