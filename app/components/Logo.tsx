import React, { FC } from 'react';

// Definición de las variantes disponibles
type LogoVariant = 'isotype' | 'logotype' | 'isotype-gradient' | 'isologo';

// Interfaz de propiedades para el componente Logo
interface LogoProps {
  variant?: LogoVariant;
  className?: string;
  width?: number | string;
  height?: number | string;
}

// Componente base para Isotype
const Isotype: FC<{ className?: string; width?: number | string; height?: number | string }> = ({
  className,
  width,
  height,
}) => (
  <svg
    width={width || '100%'}
    height={height || '100%'}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Isotype Logo"
  >
    <path d="M7.46 9.36H3.82V21.18H7.46V9.36Z" />
    <path d="M15.64 21.18C12.13 21.18 9.28 18.33 9.28 14.82C9.28 11.31 12.13 8.46 15.64 8.46C19.15 8.46 22 11.31 22 14.82C22 18.33 19.15 21.18 15.64 21.18ZM15.64 12.09C14.14 12.09 12.91 13.31 12.91 14.82C12.91 16.33 14.13 17.55 15.64 17.55C17.15 17.55 18.37 16.33 18.37 14.82C18.37 13.31 17.15 12.09 15.64 12.09Z" />
    <path d="M2 14.82V11.18C3 11.18 3.82 10.36 3.82 9.36V8.45C3.82 5.45 6.26 3 9.27 3H11.09V6.64H9.27C8.27 6.64 7.45 7.46 7.45 8.46V9.37C7.45 12.38 5 14.82 2 14.82H2Z" />
    <rect x="13.82" y="2.97309" width="3.61" height="3.67691" />
  </svg>
);

// Componente base para Logotype
const Logotype: FC<{ className?: string; width?: number | string; height?: number | string }> = ({
  className,
  width,
  height,
}) => (
  <svg
    width={width || '100%'}
    height={height || '100%'}
    viewBox="0 0 50 18"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Logotype"
  >
    <path
      d="M0.054,16.748l0,-12.026c0,-2.414 1.957,-4.372 4.371,-4.372l6.198,0l0,3.47l-5.301,0c-0.891,0 -1.614,0.722 -1.614,1.613l0,1.856l6.083,0l0,3.33l-6.06,0l0,6.129l-3.677,0Zm20.61,-16.744c4.602,0 8.511,3.353 8.511,8.557c0,5.18 -3.909,8.533 -8.511,8.533c-4.626,0 -8.535,-3.353 -8.535,-8.533c0,-5.204 3.909,-8.557 8.535,-8.557Zm0,13.483c2.265,0 4.718,-1.526 4.718,-4.949c0,-3.423 -2.453,-4.973 -4.718,-4.973c-2.29,0 -4.742,1.55 -4.742,4.973c0,3.423 2.452,4.949 4.742,4.949Zm19.107,-8.187c-0.116,-0.763 -0.74,-2.058 -2.73,-2.058c-1.364,0 -2.243,0.855 -2.243,1.757c-0,0.787 0.485,1.365 1.619,1.573l2.197,0.416c3.122,0.579 4.741,2.591 4.741,4.927c-0,2.567 -2.151,5.179 -6.059,5.179c-4.533,0 -6.476,-2.936 -6.707,-5.249l3.354,-0.809c0.138,1.503 1.155,2.821 3.399,2.821c1.434,0 2.313,-0.694 2.313,-1.711c-0,-0.833 -0.671,-1.434 -1.758,-1.642l-2.244,-0.417c-2.775,-0.531 -4.463,-2.382 -4.463,-4.81c-0,-3.099 2.729,-5.273 5.875,-5.273c4.094,0 5.643,2.451 5.989,4.371l-3.283,0.925Zm9.784,-4.95l0,16.398l-3.7,0l0,-16.398l3.7,0Z"
    />
  </svg>
);

// Componente para Isotype con degradado
const IsotypeGradient: FC<{ className?: string; width?: number | string; height?: number | string }> = ({
  className,
  width,
  height,
}) => (
  <svg
    width={width || '100%'}
    height={height || '100%'}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Isotype Gradient Logo"
  >
    <defs>
      <linearGradient id="isotypeGradient0" x1="5.64" y1="21.18" x2="5.64" y2="9.36" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3C63AD" />
        <stop offset="1" stopColor="#025D31" />
      </linearGradient>
      <linearGradient id="isotypeGradient1" x1="11.14" y1="10.32" x2="20.13" y2="19.32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#BA9AC8" />
        <stop offset="1" stopColor="#28AF87" />
      </linearGradient>
      <linearGradient id="isotypeGradient2" x1="2" y1="8.91" x2="11.09" y2="8.91" gradientUnits="userSpaceOnUse">
        <stop stopColor="#2E55A0" />
        <stop offset="1" stopColor="#F4B0CF" />
      </linearGradient>
      <linearGradient id="isotypeGradient3" x1="14.2034" y1="4.19094" x2="17.0697" y2="3.70145" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FAA5C6" />
        <stop offset="1" stopColor="#006FD8" />
      </linearGradient>
    </defs>
    <path d="M7.46 9.36H3.82V21.18H7.46V9.36Z" fill="url(#isotypeGradient0)" />
    <path
      d="M15.64 21.18C12.13 21.18 9.28 18.33 9.28 14.82C9.28 11.31 12.13 8.46 15.64 8.46C19.15 8.46 22 11.31 22 14.82C22 18.33 19.15 21.18 15.64 21.18ZM15.64 12.09C14.14 12.09 12.91 13.31 12.91 14.82C12.91 16.33 14.13 17.55 15.64 17.55C17.15 17.55 18.37 16.33 18.37 14.82C18.37 13.31 17.15 12.09 15.64 12.09Z"
      fill="url(#isotypeGradient1)"
    />
    <path
      d="M2 14.82V11.18C3 11.18 3.82 10.36 3.82 9.36V8.45C3.82 5.45 6.26 3 9.27 3H11.09V6.64H9.27C8.27 6.64 7.45 7.46 7.45 8.46V9.37C7.45 12.38 5 14.82 2 14.82H2Z"
      fill="url(#isotypeGradient2)"
    />
    <rect x="13.82" y="2.97309" width="3.61" height="3.67691" fill="url(#isotypeGradient3)" />
  </svg>
);

// Componente para Isologo sin degradado
const Isologo: FC<{ className?: string; width?: number | string; height?: number | string }> = ({
  className,
  width,
  height,
}) => (
  <svg
    width={width || '100%'}
    height={height || '100%'}
    viewBox="0 0 84 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Isologo Logo"
  >
    {/* Isotype */}
    <g>
      <path d="M7.46 9.36H3.82V21.18H7.46V9.36Z" fill="currentColor" />
      <path
        d="M15.64 21.18C12.13 21.18 9.28 18.33 9.28 14.82C9.28 11.31 12.13 8.46 15.64 8.46C19.15 8.46 22 11.31 22 14.82C22 18.33 19.15 21.18 15.64 21.18ZM15.64 12.09C14.14 12.09 12.91 13.31 12.91 14.82C12.91 16.33 14.13 17.55 15.64 17.55C17.15 17.55 18.37 16.33 18.37 14.82C18.37 13.31 17.15 12.09 15.64 12.09Z"
        fill="currentColor"
      />
      <path
        d="M2 14.82V11.18C3 11.18 3.82 10.36 3.82 9.36V8.45C3.82 5.45 6.26 3 9.27 3H11.09V6.64H9.27C8.27 6.64 7.45 7.46 7.45 8.46V9.37C7.45 12.38 5 14.82 2 14.82H2Z"
        fill="currentColor"
      />
      <rect x="13.82" y="2.97309" width="3.61" height="3.67691" fill="currentColor" />
    </g>

    {/* Logotype */}
    <g transform="translate(28,3)">
      <path
        d="M0.054,16.748l0,-12.026c0,-2.414 1.957,-4.372 4.371,-4.372l6.198,0l0,3.47l-5.301,0c-0.891,0 -1.614,0.722 -1.614,1.613l0,1.856l6.083,0l0,3.33l-6.06,0l0,6.129l-3.677,0Zm20.61,-16.744c4.602,0 8.511,3.353 8.511,8.557c0,5.18 -3.909,8.533 -8.511,8.533c-4.626,0 -8.535,-3.353 -8.535,-8.533c0,-5.204 3.909,-8.557 8.535,-8.557Zm0,13.483c2.265,0 4.718,-1.526 4.718,-4.949c0,-3.423 -2.453,-4.973 -4.718,-4.973c-2.29,0 -4.742,1.55 -4.742,4.973c0,3.423 2.452,4.949 4.742,4.949Zm19.107,-8.187c-0.116,-0.763 -0.74,-2.058 -2.73,-2.058c-1.364,0 -2.243,0.855 -2.243,1.757c-0,0.787 0.485,1.365 1.619,1.573l2.197,0.416c3.122,0.579 4.741,2.591 4.741,4.927c-0,2.567 -2.151,5.179 -6.059,5.179c-4.533,0 -6.476,-2.936 -6.707,-5.249l3.354,-0.809c0.138,1.503 1.155,2.821 3.399,2.821c1.434,0 2.313,-0.694 2.313,-1.711c-0,-0.833 -0.671,-1.434 -1.758,-1.642l-2.244,-0.417c-2.775,-0.531 -4.463,-2.382 -4.463,-4.81c-0,-3.099 2.729,-5.273 5.875,-5.273c4.094,0 5.643,2.451 5.989,4.371l-3.283,0.925Zm9.784,-4.95l0,16.398l-3.7,0l0,-16.398l3.7,0Z"
        fill="currentColor"
      />
    </g>
  </svg>
);

// Componente Logo consolidado
export const Logo: FC<LogoProps> = ({
  variant = 'isotype',
  className = '',
  width,
  height,
}) => {
  switch (variant) {
    case 'logotype':
      return <Logotype className={className} width={width} height={height} />;
    case 'isotype-gradient':
      return <IsotypeGradient className={className} width={width} height={height} />;
    case 'isologo':
      return <Isologo className={className} width={width} height={height} />;
    case 'isotype':
    default:
      return <Isotype className={className} width={width} height={height} />;
  }
};
