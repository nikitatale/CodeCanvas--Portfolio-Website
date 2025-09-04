import React from "react";
import PropTypes from "prop-types";

const BlurBlob = ({ position, size }) => {
  const { top, left } = position;
  const { width, height } = size;

  return (
    <div
      className="absolute"
      style={{
        top: top,
        left: left,
        width: width,
        height: height,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        className="w-full h-full bg-purple-800 rounded-full opacity-20 blur-3xl animate-blob"
        style={{
          animation: "blob 10s infinite",
          "@keyframes blob": {
            "0%": { transform: "scale(1)" },
            "33%": { transform: "scale(1.2)" },
            "66%": { transform: "scale(0.8)" },
            "100%": { transform: "scale(1)" },
          },
        }}
      ></div>
    </div>
  );
};

BlurBlob.position = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};

export default BlurBlob;
