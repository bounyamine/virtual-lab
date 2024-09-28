import React from 'react';

const organDescriptions = {
  "Cerveau": "Le cerveau est l'organe central du système nerveux.",
  "ADN": "L'ADN contient le code génétique qui détermine les caractéristiques de l'organisme.",
  "Cœur Anatomique": "Le cœur pompe le sang dans tout le corps.",
  "Cœur": "Le Cœur pompe le sang dans tout le corps.",
  "Crâne": "Le crâne protège le cerveau et forme la structure de la tête.",
  "Squelette": "Le squelette soutient la structure du corps et protège les organes.",
  "Stomac": "L'estomac est responsable de la digestion des aliments.",
};

const InfoPanel = ({ organName }) => {
  return (
    <div className='info-panel'>
      <h2>Informations sur : {organName}</h2>
      <p>{organDescriptions[organName]}</p>
    </div>
  );
}

export default InfoPanel;
