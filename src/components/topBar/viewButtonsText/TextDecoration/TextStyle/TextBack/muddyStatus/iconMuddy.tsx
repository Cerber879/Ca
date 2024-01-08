import React from "react";

const svgStyle = {
  enableBackground: "new 0 0 512 512",
} as React.CSSProperties;

const TextMuddy = ({ fill }: { fill: string }) => {
  return (
    <svg
      width={17}
      height={17}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      style={svgStyle}
      xmlSpace="preserve"
    >
      <g>
        <g>
          <path
            d="M0,0v512h512V0H0z M393.143,228.571h-54.857v-45.714h-54.857v164.571h45.714v54.857H182.857v-54.857h45.714V182.857 h-54.857v45.714h-54.857V128h274.286V228.571z"
            fill={fill}
            style={{ fill: fill }}
          ></path>
        </g>
      </g>
    </svg>
  );
};

export default TextMuddy;
