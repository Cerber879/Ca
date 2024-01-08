import React from "react";

const svgStyle = {
  enableBackground: "new 0 0 486.273 486.273",
} as React.CSSProperties;

const Triangle = ({ fill }: { fill: string }) => {
  return (
    <svg
      width={16}
      height={16}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x={0}
      y={0}
      viewBox="0 0 486.273 486.273"
      style={svgStyle}
      xmlSpace="preserve"
    >
      <g>
        <g>
          <path
            d="M484.844,438.908L252.311,36.775c-2.905-5.125-9.414-6.925-14.539-4.021c-1.679,0.952-3.069,2.341-4.021,4.021 L1.431,438.908c-2.946,5.102-1.198,11.625,3.904,14.571c1.603,0.925,3.419,1.418,5.269,1.429h465.067 c5.891-0.035,10.638-4.84,10.602-10.731C486.262,442.327,485.77,440.511,484.844,438.908z M29.804,433.788L243.138,63.441 l213.333,370.347H29.804z"
            fill={fill}
            style={{ fill: fill }}
          />
        </g>
      </g>
    </svg>
  );
};

export default Triangle;
