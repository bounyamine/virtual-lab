import { useGLTF } from '@react-three/drei';
import React, { useState } from 'react';

const OrganModel = React.memo(({ organPath }) => {
  const { scene } = useGLTF(organPath, true);  // Chargement avec mise en cache
  const [isError] = useState(false);

  const handleClick = () => {
    console.log(`Vous avez cliqué sur l'organe : ${organPath}`);
  };

  if (isError) {
    return <p className='error'>Erreur lors du chargement du modèle</p>;
  }

  return <primitive object={scene} scale={3} onClick={handleClick} />;
}, (prevProps, nextProps) => prevProps.organPath === nextProps.organPath);

export default OrganModel;
