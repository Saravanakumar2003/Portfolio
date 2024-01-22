// utils/analytics.ts

import ReactGA from 'react-ga';

export const initGA = (): void => {
  ReactGA.initialize('G-DEXGX7MVS0');
};

export const logPageView = (): void => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
