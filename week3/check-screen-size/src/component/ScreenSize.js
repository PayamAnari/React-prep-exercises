import React from 'react';
import useScreenSize from '../hook/useScreenSize';

const ScreenSize = () => {
  const screenSize = useScreenSize();

  return (
    <div>
      <p>Screen Width: {screenSize.width}px</p>
      <p>Screen Height: {screenSize.height}px</p>
    </div>
  );
};

export default ScreenSize;
