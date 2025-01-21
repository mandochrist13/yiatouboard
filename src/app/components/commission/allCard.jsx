import React from 'react';
import Card from './card'; // Assurez-vous que le chemin est correct

const AllCards = () => {
    const dataCartes = [
        { titre: 'Tout les clients', compte: '+22.63K', icone: 'solar:users-group-two-rounded-bold-duotone' },
        { titre: 'Produits', compte: '+4.5k', icone: 'solar:box-bold-duotone' },
        { titre: 'Commission Soldé', compte: '200.000 fcfa', icone: 'hugeicons:money-send-circle' },
        { titre: 'Commissions à payer', compte: '180.000 fcfa', icone: 'fluent:receipt-money-20-filled' },

    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-8 py-4 items-center justify-center">
            {dataCartes.map((carte, index) => (
                <div key={index} className="bg-white p-4 flex rounded-lg">
                    <Card titre={carte.titre} compte={carte.compte} icone={carte.icone} />
                </div>
            ))}
        </div>
    );
};

export default AllCards;
