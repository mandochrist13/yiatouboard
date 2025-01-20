
import React from 'react';
import Badge from './badge';
import { Icon } from '@iconify/react';

const TableRow = ({ order }) => (
  <tr className="">
    <td className="text-[#262d35]/60 text-[11px] p-3">{order.id}</td>
    <td className="text-[#262d35]/60 text-[11px] p-3">{order.date}</td>
    <td className="text-orange-600 text-[11px] p-3"><a href="#!" className="link-primary fw-medium">{order.customer}</a></td>
    <td className="text-[#262d35]/60 text-[11px] p-3">{order.priority}</td>
    <td className="text-[#262d35]/60 text-[11px] p-3">{order.total}</td>
    <td className='text-center'><Badge status={order.status} /></td>
    <td className="text-[#262d35]/60 text-center text-[11px] p-3">{order.items}</td>
    <td className="text-[#262d35]/60 text-center text-[11px] p-3">{order.deliveryNumber}</td>
    <td className='text-center'><Badge status={order.orderStatus} className="border-2 border-gray-200 p-1" /></td>
    <td className='p-3'>
      <div className="flex  items-center justify-center gap-2">
        {/* Bouton Voir */}
        <a href="#!" className="bg-[#edf2f7] rounded-lg px-3 py-1 text-[#3d4552] justify-center items-center " title="Voir">
          <Icon icon="solar:eye-broken" className="w-4 h-4" />
        </a>
        {/* Bouton Modifier */}
        <a href="#!" className="bg-[#fff0eb] hover:bg-orange-400 hover:text-white text-orange-400 px-3 py-1 rounded-lg justify-center items-center" title="Modifier">
          <Icon icon="solar:pen-2-broken" className="w-4 h-4" />
        </a>
        {/* Bouton Supprimer */}
        <a href="#!" className="bg-[#fceded] hover:bg-red-400 hover:text-white text-red-400 rounded-lg px-3 py-1 justify-center items-center" title="Supprimer">
          <Icon icon="solar:trash-bin-minimalistic-2-broken" className="w-4 h-4" />
        </a>
      </div>
    </td>
  </tr>
);

export default TableRow;
