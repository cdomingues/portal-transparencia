import React from 'react';

interface Props {
  src: string;
}

const NoClickIframe: React.FC<Props> = ({ src }) => {
  return (
    <iframe src={src} style={{ pointerEvents: 'none' }}/>
  );
}

export default NoClickIframe;
