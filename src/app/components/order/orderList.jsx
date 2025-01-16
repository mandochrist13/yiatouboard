// src/app/components/order/OrderList.jsx
"use client"; // Assurez-vous que ce fichier est traité côté client

import React, { useState } from 'react';
import OrderTable from './orderTable';
import { Icon } from '@iconify/react';

const OrderList = () => {
  const [filter, setFilter] = useState('Tous'); // État pour le filtre
  const [dropdownOpen, setDropdownOpen] = useState(false); // État pour l'affichage du menu déroulant

  const orders = [
    { id: '#583488/80', date: '23 Avril 2024', customer: 'Gail C. Anderson', priority: 'Normal', total: '$1,230.00', status: 'Unpaid', items: 4, deliveryNumber: '-', orderStatus: 'Draft', icon: 'solar:eye-broken' },
    { id: '#456754/80', date: '20 Avril 2024', customer: 'Jung S. Ayala', priority: 'Normal', total: '$987.00', status: 'Paid', items: 2, deliveryNumber: '-', orderStatus: 'Packaging', icon: 'solar:pen-2-broken' },
    { id: '#578246/80', date: '19 Avril 2024', customer: 'David A. Arnold', priority: 'High', total: '$1,478.00', status: 'Paid', items: 5, deliveryNumber: '#D-57837678', orderStatus: 'Completed', icon: 'solar:trash-bin-minimalistic-2-broken' },
    // Ajoutez d'autres commandes ici...
  ];

  // Fonction pour filtrer les commandes
  const filteredOrders = filter === 'Tous' ? orders : orders.filter(order => order.status === filter);

  return (

        <div className=" flex flex-col p-4">
          <div className="flex justify-between items-center p-3">
            <h4 className="text-lg ">Liste des Commandes</h4>
            <div className="relative">
              <button 
                className="flex flex-cols gap-2 items-center  " 
                onClick={() => setDropdownOpen(!dropdownOpen)} // Toggle dropdown visibility
              >
                  {filter}
                <Icon icon="solar:list-broken" className="mr-2" />
              
              </button>
              {dropdownOpen && (
                <ul className="absolute right-0 z-10 bg-white p-4 m-4 border rounded shadow-lg mt-1">
                  <li><button className="dropdown-item" onClick={() => { setFilter('Tous'); setDropdownOpen(false); }}>Tous</button></li>
                  <li><button className="dropdown-item" onClick={() => { setFilter('Paid'); setDropdownOpen(false); }}>Payé</button></li>
                  <li><button className="dropdown-item" onClick={() => { setFilter('Unpaid'); setDropdownOpen(false); }}>Non Payé</button></li>
                  <li><button className="dropdown-item" onClick={() => { setFilter('Refund'); setDropdownOpen(false); }}>Remboursé</button></li>
                  <li><button className="dropdown-item" onClick={() => { setFilter('Canceled'); setDropdownOpen(false); }}>Annulé</button></li>
                </ul>
              )}
            </div>
          </div>

          {/* Affichage du tableau avec les commandes filtrées */}
          <OrderTable orders={filteredOrders} />
        </div>
  );
};

export default OrderList;
