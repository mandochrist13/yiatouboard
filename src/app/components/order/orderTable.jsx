
import React from 'react';
import TableRow from './tableRow';

const OrderTable = ({ orders }) => (
  <div className="">
    <div className="w-full">
      <table className="w-full align-middle">
        <thead className="bg-gray-100 py-2">
          <tr className="text-[#262d35] p-2 text-sm">
            <th>ID </th>
            <th>Date </th>
            <th>Client</th>
            {/* <th>Priorité</th> */}
            <th>Total</th>
            <th className='w-10 px-4'>Statut</th>
            <th>Articles</th>
            <th className='w-10 p-4'>Type</th>
            <th className='w-10 px-4'>Etat</th>
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
