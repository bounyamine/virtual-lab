import React, { useState } from 'react';
import OrganModel from './components/OrganModel';
import { CanvasContainer } from './components/CanvasContainer';
import InfoPanel from './components/InfoPanel';

// Liste des organes et leurs chemins GLTF correspondants
const organs = {
  "Cerveau": './human_brain/scene.gltf',
  "ADN": './human_dna/scene.gltf',
  "Cœur": './human_heart_realistic_anatomical_model/scene.gltf',
  "Crâne": './human_male_skull/scene.gltf',
  "Squelette": './human_skeleton/scene.gltf',
  "Stomac": './realistic_human_stomach/scene.gltf',
};

function App() {
  const [selectedOrgan, setSelectedOrgan] = useState("Cerveau");

  // Changer d'organe
  const handleOrganChange = (event) => {
    setSelectedOrgan(event.target.value);
  };

  return (
    <div>
      {/* Panneau de sélection d'organe */}
      <div style={{ position: 'absolute', top: 10, left: 10, zIndex: 2 }}>
        <select value={selectedOrgan} onChange={handleOrganChange}>
          {Object.keys(organs).map((organ) => (
            <option key={organ} value={organ}>
              {organ}
            </option>
          ))}
        </select>
      </div>

      {/* Canvas avec le modèle d'organe */}
      <CanvasContainer>
        <OrganModel organPath={organs[selectedOrgan]} />
      </CanvasContainer>

      {/* Panneau d'informations */}
      <InfoPanel organName={selectedOrgan} />
    </div>
  );
}

export default App;
