import React from "react";

const Square = ({ fill }: { fill: string }) => {
  return (
    <svg
      width={16}
      height={16}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 16 16"
    >
      <path
        fill={fill}
        d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12"
        style={{ fill: fill }}
      />
    </svg>
  );
};

export default Square;
