import Image from 'next/image';
import React from 'react';
const ILLUSTRATION_ARIA_LABEL =  "⛈ Weather ☁ according to your location.";

export function Illustration() {
  return (
    <>
      <Image
      src={"/weather.svg"} 
      alt = {ILLUSTRATION_ARIA_LABEL}
      width={780} height={780}
className="illustration"
data-theme="light"
aria-label={"ILLUSTRATION_ARIA_LABEL"}
style={{
"--circle-opacity": 0.1,
} as React.CSSProperties}
      >
      </Image>   
    </>
  );
}
