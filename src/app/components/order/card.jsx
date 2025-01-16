import React from 'react';
import { Icon } from '@iconify/react';

const Card = ({ titre, compte, icone }) => (

      <div className="flex justify-between items-center "> 
        <div>
          <h4 className="card-title mb-2">{titre}</h4>
          <p className="text-muted fw-medium fs-22 mb-0">{compte}</p>
        </div>
        <div className="flex items-center justify-center w-16 h-16 bg-orange-200 rounded-lg"> {/* Couleur de fond orange pâle */}
          <Icon icon={icone} className="w-10 h-10 text-orange-800" /> {/* Agrandi l'icône */}
        </div>
      </div>
);

export default Card;
