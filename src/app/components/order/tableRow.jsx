// src/app/components/order/TableRow.jsx
import React from 'react';
import Badge from './Badge';
import { Icon } from '@iconify/react';

const TableRow = ({ order }) => (
  <tr className="hover:bg-gray-200">
    <td>{order.id}</td>
    <td>{order.date}</td>
    <td><a href="#!" className="link-primary fw-medium">{order.customer}</a></td>
    <td>{order.priority}</td>
    <td>{order.total}</td>
    <td><Badge status={order.status} /></td>
    <td>{order.items}</td>
    <td>{order.deliveryNumber}</td>
    <td><Badge status={order.orderStatus} className="border-2 border-gray-200 p-1" /></td>
    <td>
      <div className="flex  items-center justify-center gap-2">
        {/* Bouton Voir */}
        <a href="#!" className="bg-gray-300 rounded-lg m-1 w-8 h-8 justify-center items-center " title="Voir">
          <Icon icon="solar:eye-broken" className="w-6 h-6" />
        </a>
        {/* Bouton Modifier */}
        <a href="#!" className="bg-orange-200 text-orange-400 rounded-lg m-1 w-8 h-8 justify-center items-center" title="Modifier">
          <Icon icon="solar:pen-2-broken" className="w-6 h-6" />
        </a>
        {/* Bouton Supprimer */}
        <a href="#!" className="bg-red-300 text-red-500 rounded-lg m-1 w-8 h-8 justify-center items-center" title="Supprimer">
          <Icon icon="solar:trash-bin-minimalistic-2-broken" className="w-6 h-6" />
        </a>
      </div>
    </td>
  </tr>
);

export default TableRow;
