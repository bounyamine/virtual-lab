import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export const CanvasContainer = ({ children }) => {
  return (
    <Canvas style={{ width: '100vw', height: '100vh', background: 'cornflowerblue' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {children}
      <OrbitControls />
    </Canvas>
  );
};
