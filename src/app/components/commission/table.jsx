"use client";
import { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

const Table = () => {
  const [searchTerm, setSearchTerm] = useState(""); // État pour la recherche
  const [filterStatus, setFilterStatus] = useState(""); // État pour le filtre de statut
  const dropdownRef = useRef(null);

  const client = [
    {
      id: "#FS16276",
      name: "Michael A. Miner",
      img: "/avatar-1.jpg",
      statut: "payer",
      color: "bg-[#d3f2df]",
      textcolor: "text-[#21c45d]",
      allprice: "Instantané",
      pricepayment: "6.000 fcfa",
      date: "10-01-2025",
    },
    {
      id: "#FS16277",
      name: "John Doe",
      img: "/avatar-2.jpg",
      statut: "non payé",
      color: "bg-[#f8d7da]",
      textcolor: "text-[#dc3545]",
      allprice: "Délai",
      pricepayment: "4.000 fcfa",
      date: "11-01-2025",
    },
  ];

  // Filtrage des clients en fonction de la recherche et du statut
  const filteredClients = client.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterStatus === "" || c.statut === filterStatus)
  );

  return (
    <div className="mt-8 px-8">
      <div className="card shadow-lg rounded-lg overflow-hidden">
        <div className="w-full flex justify-between items-center p-4 bg-white">
          <h4 className="text-lg text-black font-semibold">
            Liste de tous les clients
          </h4>
          <div className="flex gap-4">
            {/* Input de recherche */}
            <input
              type="text"
              placeholder="Rechercher un client..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Filtre par statut */}
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Tous les statuts</option>
              <option value="payer">Payer</option>
              <option value="non payé">Non payé</option>
            </select>
          </div>
        </div>

        {/* Table des clients */}
        <div className="overflow-x-auto py-4">
          <table className="min-w-full divide-y divide-gray-200 table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-5">
                  <input type="checkbox" className="form-checkbox" />
                </th>
                <th className="px-4 text-left py-2 text-sm font-semibold text-gray-600">
                  Nom du client
                </th>
                <th className="px-4 py-2 text-sm font-semibold text-gray-600">
                  ID Transaction
                </th>
                <th className="px-4 py-2 text-sm font-semibold text-gray-600">
                  Type
                </th>
                <th className="px-4 py-2 text-sm font-semibold text-gray-600">
                  Commission
                </th>
                <th className="px-4 py-2 text-sm font-semibold text-gray-600">
                  Date
                </th>
                <th className="px-4 py-2 text-sm font-semibold text-gray-600">
                  Statut
                </th>
                <th className="px-4 py-2 text-sm font-semibold text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredClients.map((client) => (
                <tr
                  key={client.id}
                  className="hover:bg-gray-50 transition-all duration-200"
                >
                  <td className="px-5">
                    <input type="checkbox" className="form-checkbox" />
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex items-center gap-2">
                      <Image
                        src={client.img}
                        alt={client.name}
                        width={100}
                        height={100}
                        className="w-10 rounded-full object-cover transition-transform transform hover:scale-110"
                      />
                      <p className="text-gray-800 font-medium text-sm">
                        {client.name}
                      </p>
                    </div>
                  </td>
                  <td className="px-4 text-center py-2 text-black text-sm">
                    {client.id}
                  </td>
                  <td className="px-4 py-2 text-black text-sm">{client.allprice}</td>
                  <td className="px-4 py-2 text-center text-black text-sm">
                    {client.pricepayment}
                  </td>
                  <td className="px-4 py-2 text-center text-black text-sm">
                    {client.date}
                  </td>
                  <td className="px-4 py-2 text-sm">
                    <div
                      className={`${client.color} ${client.textcolor} px-2 py-1 rounded`}
                    >
                      {client.statut}
                    </div>
                  </td>
                  <td className="px-4 py-2 text-sm">
                    <div className="flex gap-2">
                      <a
                        href="#!"
                        className="btn btn-light bg-gray-100 text-gray-800 px-2 py-1 rounded-md hover:bg-gray-200 transition-all duration-300"
                      >
                        <Icon icon="solar:eye-broken" />
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
