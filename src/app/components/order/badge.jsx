
import React from 'react';

const Badge = ({ status }) => {
  let className = 'px-2 py-1 text-[11px] rounded';

  switch (status) {
    case 'Paid':
      className += ' bg-green-400  text-white ';
      break;
    case 'Unpaid':
      className += ' bg-gray-200 text-black';
      break;
    case 'Refund':
      className += ' bg-light text-black';
      break;
    case 'Canceled':
      className += ' border border-red-400 text-red-400';
      break;
    case 'Packaging':
      className += ' border border-yellow-400 text-yellow-400';
      break;
    case 'Completed':
      className += ' border border-green-400 text-green-400';
      break;
    default:
      className += ' border-blue-900 border text-blue-900';
  }

  return <span className={className}>{status}</span>;
};

export default Badge;
