"use client";
import { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image"

export default function Home() {
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

  const categories = [
    {
      id: "cat1",
      name: "Catégories de Mode",
      img: "/public/google-remove.png",
      bgColor: "bg-gray-200",
    },
    {
      id: "cat2",
      name: "Casques Électroniques",
      img: "/public/google-remove.png",
      bgColor: "bg-blue-200",
    },
    {
      id: "cat3",
      name: "Chaussures",
      img: "/public/google-remove.png",
      bgColor: "bg-yellow-200",
    },
    {
      id: "cat4",
      name: "Lunettes & Solaires",
      img: "/public/google-remove.png",
      bgColor: "bg-teal-200",
    },
  ];

  const products = [
    {
      id: "FS16276",
      name: "Mode Hommes, Femmes & Enfants",
      img: "/public/google-remove.png",
      price: "$80 à $400",
      createdBy: "Vendeur",
      stock: 46233,
    }
  ];

  return (
    <div className="container mt-2 mx-auto  px-4">
      {/* Grid des catégories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {categories.map((category) => (
          <div
            className="card shadow-lg hover:scale-105 transform transition-all duration-300 rounded-lg overflow-hidden"
            key={category.id}
          >
            <div className="card-body text-center p-4">
              <div
                className={`${category.bgColor} rounded-full flex items-center justify-center mx-auto p-6 hover:bg-opacity-80 transition-all duration-300`}
              >
                <Image
                  src={category.img}
                  alt={category.name}
                  height={48}
                  width={48}
                  className="object-cover transition-transform transform hover:scale-110"
                />
              </div>
              <h4 className="mt-3 mb-0 text-lg font-semibold text-gray-700 transition-all duration-300 hover:text-orange-500">
                {category.name}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* Liste des produits */}
      <div className="mt-8">
        <div className="card shadow-lg rounded-lg overflow-hidden">
          <div className="card-header flex justify-between items-center p-4 bg-gray-100">
            <h4 className="text-lg font-semibold">Liste de toutes les catégories</h4>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
           <a
              href="product-add.html"
              className="btn bg-orange-600 text-white px-4 py-2 rounded-md hover:scale-110 transition duration-300"
            >
              Ajouter un produit
            </a>
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
          <div className="overflow-x-auto p-4">
            <table className="min-w-full divide-y divide-gray-200 table-auto">
              <thead className="bg-gray-100">
                <tr>
                  <th>
                    <input type="checkbox" className="form-checkbox" />
                  </th>
                  <th className="px-4 py-2 text-sm font-semibold text-gray-600">Catégories</th>
                  <th className="px-4 py-2 text-sm font-semibold text-gray-600">Prix de départ</th>
                  <th className="px-4 py-2 text-sm font-semibold text-gray-600">Créé par</th>
                  <th className="px-4 py-2 text-sm font-semibold text-gray-600">ID</th>
                  <th className="px-4 py-2 text-sm font-semibold text-gray-600">Stock de produits</th>
                  <th className="px-4 py-2 text-sm font-semibold text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product) => (
                  <tr
                    key={product.id}
                    className="hover:bg-gray-50 transition-all duration-200"
                  >
                    <td>
                      <input type="checkbox" className="form-checkbox" />
                    </td>
                    <td className="px-4 py-2">
                      <div className="flex items-center gap-2">
                        <div className="rounded bg-gray-200 w-16 h-16 flex items-center justify-center">
                          <Image
                            src={product.img}
                            alt={product.name}
                            width={100}
                            height={100}
                            className="w-12 object-cover transition-transform transform hover:scale-110"
                          />git 
                        </div>
                        <p className="text-gray-800 font-medium text-sm">{product.name}</p>
                      </div>
                    </td>
                    <td className="px-4 py-2 text-sm">{product.price}</td>
                    <td className="px-4 py-2 text-sm">{product.createdBy}</td>
                    <td className="px-4 py-2 text-sm">{product.id}</td>
                    <td className="px-4 py-2 text-sm">{product.stock}</td>
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
    </div>
  );
}