import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import LoadingSpinner from './LoadingSpinner';

const CanvasContainer = ({ children }) => {
  return (
    <Canvas style={{ width: '100vw', height: '100vh', background: 'cornflowerblue' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      
      {/* Suspense pour afficher le spinner pendant le chargement */}
      <Suspense fallback={<LoadingSpinner />}>
        {children}
      </Suspense>
    </Canvas>
  );
};

export default CanvasContainer;
