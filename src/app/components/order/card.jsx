import React from 'react';
import { Icon } from '@iconify/react';

const Card = ({ titre, compte, icone }) => (

      <div className="flex justify-between items-center "> 
        <div>
          <h4 className="text-[#262d35] text-[13px] font-semibold mb-2">{titre}</h4>
          <p className="text-gray-500">{compte}</p>
        </div>
        <div className="flex items-center justify-center p-3 bg-[#fff0eb] rounded-lg"> {/* Couleur de fond orange pâle */}
          <Icon icon={icone} className="w-7 h-7 text-[#ff723b]" /> {/* Agrandi l'icône */}
        </div>
      </div>
);

export default Card;
