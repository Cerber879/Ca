import React from "react";

const svgStyle = {
  enableBackground: "new 0 0 483.841 483.841",
} as React.CSSProperties;

const ObjFill = ({ fill }: { fill: string }) => {
  return (
    <svg
      width={16}
      height={16}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 483.841 483.841"
      style={svgStyle}
      xmlSpace="preserve"
    >
      <g>
        <g>
          <path
            d="M409.92,0H74.134c-0.142,0-0.285,0-0.427,0C32.941,0.118-0.011,33.261,0.107,74.027v335.787c0,0.142,0,0.285,0,0.427 c0.118,40.766,33.261,73.717,74.027,73.599H409.92c0.071,0,0.142,0,0.214,0c40.766-0.118,73.717-33.26,73.6-74.026V74.027 c0-0.071,0-0.142,0-0.214C483.734,33.047,450.686,0,409.92,0z"
            fill={fill}
            style={{ fill: fill }}
          ></path>
        </g>
      </g>
    </svg>
  );
};

export default ObjFill;
