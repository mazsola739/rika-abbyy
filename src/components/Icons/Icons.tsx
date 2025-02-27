import * as React from 'react';
import { SVGProps } from 'react';

export const ArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} fill="currentColor" {...props}>
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.67} d="M15.833 10.5H4.167m0 0L10 16.333M4.167 10.5 10 4.667" />
  </svg>
);

export const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} fill="currentColor" {...props}>
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.67} d="M4.167 10.5h11.666m0 0L10 4.667m5.833 5.833L10 16.333" />
  </svg>
);

export const ArrowUpRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" {...props}>
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17 17 7m0 0H7m10 0v10" />
  </svg>
);

export const HamburgerMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" {...props}>
    <g clipPath="url(#a)">
      <path d="M26.733 14.667H5.267c-.7 0-1.267.567-1.267 1.267v.133c0 .7.567 1.267 1.267 1.267h21.466c.7 0 1.267-.567 1.267-1.267v-.133c0-.7-.567-1.267-1.267-1.267ZM26.733 21.333H5.267C4.567 21.333 4 21.9 4 22.6v.133c0 .7.567 1.267 1.267 1.267h21.466c.7 0 1.267-.567 1.267-1.267V22.6c0-.7-.567-1.267-1.267-1.267ZM26.733 8H5.267C4.567 8 4 8.567 4 9.267V9.4c0 .7.567 1.267 1.267 1.267h21.466c.7 0 1.267-.567 1.267-1.267v-.133C28 8.567 27.433 8 26.733 8Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const Close = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" {...props}>
    <path d="M24.532 23.075 9.353 7.895a1.267 1.267 0 0 0-1.791 0l-.094.095a1.267 1.267 0 0 0 0 1.791l15.179 15.18a1.267 1.267 0 0 0 1.791 0l.094-.095a1.267 1.267 0 0 0 0-1.791Z" />
    <path d="m22.647 7.925-15.18 15.18a1.267 1.267 0 0 0 0 1.79l.095.095a1.267 1.267 0 0 0 1.791 0l15.18-15.18a1.267 1.267 0 0 0 0-1.79l-.095-.095a1.267 1.267 0 0 0-1.791 0Z" />
  </svg>
);
