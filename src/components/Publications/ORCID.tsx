//ORCID component

import React from 'react';
import { ORCIDContainer, ORCIDLink } from './style';

export function ORCID() {
  return (
    <ORCIDContainer>
      <span>ORCID:</span>
      <ORCIDLink href="https://orcid.org/0009-0008-6026-3263" target="_blank">
        0009-0008-6026-3263
      </ORCIDLink>
    </ORCIDContainer>
  );
}



