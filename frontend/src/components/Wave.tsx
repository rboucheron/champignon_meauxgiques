import React from 'react';

interface WaveProps {
  style?: React.CSSProperties; // Typage explicite pour la prop style
}

const Wave: React.FC<WaveProps> = ({ style }) => {
  return (
    <svg
      style={style}
      id="Calque_1"
      data-name="Calque 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 903.31 192.85"
    >
      <defs>
        <style>
          {`
            .cls-1 {
              fill: #0179a5;
            }
            .cls-1, .cls-2, .cls-3 {
              stroke-width: 0px;
            }
            .cls-2 {
              fill: #3d4395;
            }
            .cls-3 {
              fill: #9895b8;
            }
          `}
        </style>
      </defs>
      <path className="cls-1" d="M385.53,149.56s75.75-102.72,161.36,3.54" />
      <path className="cls-1" d="M161.87,148.79s75.75-102.72,161.36,3.54" />
      <path className="cls-1" d="M602.29,149.56s84.14-102.72,179.23,3.54" />
      <path className="cls-3" d="M703.39,90.82c.27-.03.55-.06.82-.1" />
      <path
        className="cls-2"
        d="M466.21,186.31L0,180.17v-36.77s18.83,12.6,65.47-13.96,112.34-10.89,123.23,0,66.04,34.67,108.94,1.17c42.89-33.51,101.11-26.36,141.96,9.05,0,0,.56,6.96,26.61,4.01"
      />
      <path
        className="cls-2"
        d="M903.31,192.85l-466.21-7.3v-43.68s18.83,14.96,65.47-16.58c46.64-31.54,112.34-12.94,123.23,0s66.04,41.19,108.94,1.38c42.89-39.8,101.11-31.31,141.96,10.75,0,0,.56,8.27,26.61,4.76"
      />
      <line className="cls-3" x1="805.55" y1="134.81" x2="703.39" y2="133.46" />
      <path
        className="cls-1"
        d="M67.11,128.53S34.09,107.32,0,114.51v28.89s20.73,12.39,67.11-14.87Z"
      />
    </svg>
  );
};

export default Wave;