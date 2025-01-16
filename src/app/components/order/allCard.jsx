import React from 'react';
import Card from './Card'; // Assurez-vous que le chemin est correct

const AllCards = () => {
    const donneesCartes = [
        { titre: 'Remboursement de Paiement', compte: 490, icone: 'solar:chat-round-money-broken' },
        { titre: 'Commande Annulée', compte: 241, icone: 'solar:cart-cross-broken' },
        { titre: 'Commande Expédiée', compte: 630, icone: 'solar:box-broken' },
        { titre: 'Commande en Livraison', compte: 170, icone: 'solar:tram-broken' },
        { titre: 'En Attente de Révision', compte: 210, icone: 'solar:clipboard-remove-broken' },
        { titre: 'En Attente de Paiement', compte: 608, icone: 'solar:clock-circle-broken' },
        { titre: 'Livré', compte: 200, icone: 'solar:clipboard-check-broken' },
        { titre: 'En Cours', compte: 656, icone: 'solar:inbox-line-broken' },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 items-center justify-center">
            {donneesCartes.map((carte, index) => (
                <div key={index} className="border-2 p-4 rounded-lg shadow-md hover:bg-gray-200">
                    <Card titre={carte.titre} compte={carte.compte} icone={carte.icone} />
                </div>
            ))}
        </div>
    );
};

export default AllCards;
