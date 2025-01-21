"use client";
import { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";

const Table = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  // Fermer le menu déroulant si un clic se produit en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const client = [
    {
      id: "#FS16276",
      name: "Michael A. Miner",
      img: "/avatar-1.jpg",
      statut: "payer",
      color: "bg-[#d3f2df]",
      textcolor: "text-[#21c45d]",
      allprice: "10.000 fcfa",
      pricepayment: "6.000 fcfa",
      date: "10-01-2025",

    },
  ];

  return (
    <div className="mt-8 px-8 ">
      <div className="card shadow-lg rounded-lg overflow-hidden">
        <div className="w-full flex justify-between items-center p-4 bg-white">
          <h4 className="text-lg text-black font-semibold">
            Liste de tout les clients
          </h4>
          <div className="flex gap-4">
            
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="btn bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300"
              >
                Ce mois-ci
              </button>
              {dropdownVisible && (
                <div className="dropdown-menu  right-0 mt-2 bg-white shadow-lg rounded-lg w-48 transition-all duration-300 opacity-100">
                  <a
                    href="#!"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-all duration-300"
                  >
                    Télécharger
                  </a>
                  <a
                    href="#!"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-all duration-300"
                  >
                    Exporter
                  </a>
                  <a
                    href="#!"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-all duration-300"
                  >
                    Importer
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Table des produits - responsive */}
        <div className="overflow-x-auto py-4">
          <table className="min-w-full divide-y divide-gray-200 table-auto">
            <thead className="bg-gray-100">
              <tr className="">
                <th className=" px-5">
                  <input type="checkbox" className="form-checkbox" />
                </th>
                <th className="px-4 text-left py-2 text-sm font-semibold text-gray-600">
                  Nom du client
                </th>
                <th className="px-4 py-2 text-sm font-semibold text-gray-600">
                  ID Transaction
                </th>
                <th className="px-4 py-2 text-sm font-semibold text-gray-600">
                  Statut
                </th>
                <th className="px-4 py-2 text-sm font-semibold text-gray-600">
                  total commission
                </th>
                <th className="px-4 py-2 text-sm font-semibold text-gray-600">
                  commission remboursé
                </th>
                <th className="px-4 py-2 text-sm font-semibold text-gray-600">
                  date
                </th>
                <th className="px-4 py-2 text-sm font-semibold text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {client.map((client) => (
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
                  <td className="px-4 py-2 text-sm">
                    <div
                      className={`${client.color} ${
                        client.textcolor
                      } px-2 py-1 rounded`}
                    >
                      {client.statut}
                    </div>
                  </td>
                  <td className="px-4 py-2 text-black text-sm">{client.allprice}</td>
                  <td className="px-4 py-2 text-center text-black text-sm">
                    {client.pricepayment}
                  </td>
                  <td className="px-4 py-2 text-center text-black text-sm">
                    {client.date}
                  </td>
                  <td className="px-4 py-2 text-sm">
                    <div className="flex gap-2">
                      <a
                        href="#!"
                        className="btn btn-light bg-gray-100 text-gray-800 px-2 py-1 rounded-md hover:bg-gray-200 transition-all duration-300"
                      >
                        <Icon icon="solar:eye-broken" />
                      </a>
                      <a
                        href="#!"
                        className="btn bg-orange-500 text-white px-2 py-1 rounded-md hover:bg-orange-600 transition-all duration-300"
                      >
                        <Icon icon="solar:pen-2-broken" />
                      </a>
                      <a
                        href="#!"
                        className="btn bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition-all duration-300"
                      >
                        <Icon icon="solar:trash-bin-minimalistic-2-broken" />
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
