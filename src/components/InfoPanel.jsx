import React from 'react';

const InfoPanel = ({ organName }) => {
  return (
    <div style={{
      position: 'absolute', bottom: 20, left: 20, padding: '10px 20px',
      background: 'rgba(255, 255, 255, 0.8)', borderRadius: '8px', zIndex: 2
    }}>
      <h2>Informations sur : {organName}</h2>
      <p>Ceci est une description détaillée sur {organName} affiché en 3D.</p>
    </div>
  );
}

export default InfoPanel;
