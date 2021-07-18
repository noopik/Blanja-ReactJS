import { generateMedia } from 'styled-media-query';

export const customMedia = generateMedia({
  desktop: '1281px',
  laptop: '1280px',
  tablet: '768px',
  mobile: '481px',
  minimobile: '320px',
});
