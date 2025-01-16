// src/app/components/order/OrderTable.jsx
import React from 'react';
import TableRow from './tableRow';

const OrderTable = ({ orders }) => (
  <div className="card-body p-0">
    <div className="table-responsive">
      <table className="table align-middle mb-0 table-hover table-centered">
        <thead className="bg-light-subtle">
          <tr>
            <th>ID </th>
            <th>Date </th>
            <th>Client</th>
            <th>Priorité</th>
            <th>Total</th>
            <th>Statut de Paiement</th>
            <th>Articles</th>
            <th>Numéro de Livraison</th>
            <th>Statut de Commande</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-300">
          {orders.map((order) => (
            <TableRow key={order.id} order={order} />
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default OrderTable;
