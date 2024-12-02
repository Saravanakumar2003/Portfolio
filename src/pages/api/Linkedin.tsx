import React, { useEffect } from 'react';
import styled from 'styled-components';

export const LinkedinFigure = styled.figure`
  background-color: ${props => props.theme.backgroundAlt};
  border: 2px solid ${props => props.theme.border};
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  

  @media (min-width: 768px) {
    padding: 1.5rem;
  }

  @media (min-width: 994px) {
    padding: 2rem;
  }
`;

const linkedin = process.env.NEXT_PUBLIC_LINKEDIN_URL;
export function Linkedin() {
 
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://widgets.sociablekit.com/linkedin-profile-posts/widget.js";
    script.type = "module";
    document.body.appendChild(script);
    <script src="https://widgets.sociablekit.com/linkedin-profile-posts/widget.js" type="module"></script>

    // This function will run when the component unmounts
    return () => {
      document.body.removeChild(script);
    }
  }, []); // Empty array means this effect runs once on mount and clean up on unmount

  return (
    <LinkedinFigure className='sk-ww-linkedin-profile-post' data-embed-id={linkedin}></LinkedinFigure>
  );
}
