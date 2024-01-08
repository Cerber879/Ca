import React from "react";

const TextUnderLine = ({ fill }: { fill: string }) => {
  return (
    <svg
      width={17}
      height={17}
      id="Layer_1"
      enableBackground="new 0 0 72 72"
      viewBox="0 0 72 72"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Layer_2_1_">
        <g id="Layer_1-2">
          <g id="format_underlined">
            <path
              d="m12.2 12h1.9v22.1c0 12.1 9.8 21.9 21.9 21.9s21.9-9.8 21.9-21.9v-22.1h1.9c1.7 0 3-1.3 3-3s-1.3-3-3-3h-9.8c-1.7 0-3 1.3-3 3s1.3 3 3 3h1.9v22.1c0 8.8-7.1 15.9-15.9 15.9s-15.9-7.1-15.9-15.9v-22.1h1.9c1.7 0 3-1.3 3-3s-1.3-3-3-3h-9.8c-1.7 0-3 1.3-3 3s1.4 3 3 3z"
              fill={fill}
              style={{ fill: fill }}
            ></path>
            <path
              d="m60 60h-48c-1.7 0-3 1.3-3 3s1.3 3 3 3h48c1.7 0 3-1.3 3-3s-1.3-3-3-3z"
              fill={fill}
              style={{ fill: fill }}
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default TextUnderLine;
