import React from 'react';

const organDescriptions = {
  "Cerveau": "Le cerveau est l'organe central du système nerveux.",
  "ADN": "L'ADN contient le code génétique qui détermine les caractéristiques de l'organisme.",
  "Cœur": "Le cœur pompe le sang dans tout le corps.",
  "Crâne": "Le crâne protège le cerveau et forme la structure de la tête.",
  "Squelette": "Le squelette soutient la structure du corps et protège les organes.",
  "Stomac": "L'estomac est responsable de la digestion des aliments.",
};

const InfoPanel = ({ organName }) => {
  return (
    <div style={{
      position: 'absolute', bottom: 20, left: 20, padding: '10px 20px',
      background: 'rgba(255, 255, 255, 0.8)', borderRadius: '8px', zIndex: 2, maxWidth: '300px'
    }}>
      <h2>Informations sur : {organName}</h2>
      <p>{organDescriptions[organName]}</p>
    </div>
  );
}

export default InfoPanel;
