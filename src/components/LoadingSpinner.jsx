import { Html } from '@react-three/drei';
import React from 'react';

const LoadingSpinner = () => {
  return (
    <Html>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="spinner" style={{
          border: '4px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '50%',
          borderTop: '4px solid white',
          width: '100px',
          height: '100px',
          animation: 'spin 1s linear infinite',
        }}></div>
      </div>
    </Html>
  );
};

export default LoadingSpinner;
