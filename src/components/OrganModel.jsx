import { useGLTF } from '@react-three/drei';
import React, { useEffect } from 'react';

const OrganModel = React.memo(({ organPath }) => {
  const { scene } = useGLTF(organPath, true);  // Charger dynamiquement le chemin GLTF avec un cache
  const handleClick = () => {
    console.log(`Vous avez cliqué sur l'organe à : ${organPath}`);
  };

  useEffect(() => {
    console.log(`Modèle d'organe chargé : ${organPath}`);
  }, [organPath]);

  return <primitive object={scene} scale={3} onClick={handleClick} />;
}, (prevProps, nextProps) => prevProps.organPath === nextProps.organPath);

export default OrganModel;
