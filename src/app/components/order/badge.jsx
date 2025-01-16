// src/app/components/order/Badge.jsx
import React from 'react';

const Badge = ({ status }) => {
  let className = 'px-2 py-1 fs-13 rounded';

  switch (status) {
    case 'Paid':
      className += ' bg-green-400  text-white ';
      break;
    case 'Unpaid':
      className += ' bg-gray-200 text-dark';
      break;
    case 'Refund':
      className += ' bg-light text-dark';
      break;
    case 'Canceled':
      className += ' border-2 border-red-400 text-red-400';
      break;
    case 'Packaging':
      className += ' border-2 border-yellow-400 text-yellow-400';
      break;
    case 'Completed':
      className += ' border-2 border-green-400 text-green-400';
      break;
    default:
      className += ' border-blue-900 border-2 text-blue-900';
  }

  return <span className={className}>{status}</span>;
};

export default Badge;
