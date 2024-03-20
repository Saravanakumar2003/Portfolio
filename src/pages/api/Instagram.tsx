import React, { useEffect } from 'react';

const instagramApi = process.env.NEXT_PUBLIC_BEHOLD_API_KEY;

export function Instagram() {
 
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://w.behold.so/widget.js";
    script.type = "module";
    document.body.appendChild(script);
    <script src="https://w.behold.so/widget.js" type="module"></script>

    // This function will run when the component unmounts
    return () => {
      document.body.removeChild(script);
    }
  }, []); // Empty array means this effect runs once on mount and clean up on unmount

  return (
    <figure data-behold-id={instagramApi}></figure>
  );
}