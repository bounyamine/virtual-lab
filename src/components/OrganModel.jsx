import { useGLTF } from '@react-three/drei';
import React from 'react';

const OrganModel = ({ organPath }) => {
  const { scene } = useGLTF(organPath);  // Charger dynamiquement le chemin GLTF

  const handleClick = () => {
    console.log(`Vous avez cliqué sur l'organe : ${organPath}`);
  };

  return <primitive object={scene} scale={3} onClick={handleClick} />;
}

export default OrganModel;
