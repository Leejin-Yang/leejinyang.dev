import type { SyntheticEvent } from 'react';

export const handleImageError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
  e.currentTarget.src = '/images/default.png';
};
