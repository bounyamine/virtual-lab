import React, { useState, Suspense } from 'react';
import './App.css';
import OrganModel from './components/OrganModel';
import CanvasContainer from './components/CanvasContainer';
import InfoPanel from './components/InfoPanel';
import LoadingSpinner from './components/LoadingSpinner';

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
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Panneau de sélection d'organe */}
      <div>
        <select
          value={selectedOrgan}
          onChange={handleOrganChange}
          style={{ padding: '10px', fontSize: '16px' }}
        >
          {Object.keys(organs).map((organ) => (
            <option key={organ} value={organ}>
              {organ}
            </option>
          ))}
        </select>
      </div>

      {/* Canvas avec le modèle d'organe */}
      <CanvasContainer>
        <Suspense fallback={<LoadingSpinner />}>
          <OrganModel organPath={organs[selectedOrgan]} />
        </Suspense>
      </CanvasContainer>

      {/* Panneau d'informations */}
      <InfoPanel organName={selectedOrgan} />
    </div>
  );
}

export default App;
