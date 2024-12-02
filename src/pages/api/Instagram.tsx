import React, { useEffect } from 'react';

const instragram = process.env.NEXT_PUBLIC_INSTAGRAM_URL;
export function Instagram() {
 
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://widgets.sociablekit.com/instagram-feed/widget.js";
    script.type = "module";
    document.body.appendChild(script);
    <script src="https://widgets.sociablekit.com/instagram-feed/widget.js" type="module"></script>

    // This function will run when the component unmounts
    return () => {
      document.body.removeChild(script);
    }
  }, []); // Empty array means this effect runs once on mount and clean up on unmount

  return (
    <figure  className='sk-instagram-feed' data-embed-id={instragram} ></figure>
  );
}