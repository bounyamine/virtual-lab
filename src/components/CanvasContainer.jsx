import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import LoadingSpinner from './LoadingSpinner';

const CanvasContainer = ({ children }) => {
  return (
    <Canvas className='canvas'>
        <ambientLight intensity={1.2} />
        <spotLight position={[15, 15, 15]} angle={0.3} penumbra={1} castShadow />
        <pointLight position={[10, 10, 10]} />
      
      {/* Suspense pour afficher le spinner pendant le chargement */}
      <Suspense fallback={<LoadingSpinner />}>
        {children}
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default CanvasContainer;
