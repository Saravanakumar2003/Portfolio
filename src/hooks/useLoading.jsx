import { useState, useEffect } from 'react';

// Temporary variable that resets when the page is refreshed or tab is closed
let hasShownLoadingInThisPageLoad = false;

export const useLoading = (minLoadingTime = 2000) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only skip loading if it has been shown in this specific page load
    if (hasShownLoadingInThisPageLoad) {
      // Skip loading immediately if already shown in this page load
      setIsLoading(false);
      return;
    }

    // Mark that loading screen will be shown for this page load
    hasShownLoadingInThisPageLoad = true;

    const startTime = Date.now();

    const handleLoad = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadingTime - elapsedTime);

      setTimeout(() => {
        setIsLoading(false);
      }, remainingTime);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, [minLoadingTime]);

  return isLoading;
};