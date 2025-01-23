"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaStar, FaEye, FaEdit, FaTrashAlt } from "react-icons/fa";

const ProductTable = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Black T-shirt",
      size: ["S", "M", "L", "XL"],
      price: 80,
      stock: 486,
      sold: 155,
      category: "Vêtements homme",
      rating: "T-shirt",
    },
    {
      id: 2,
      name: "White Sneakers",
      size: ["38", "39", "40", "41"],
      price: 120,
      stock: 200,
      sold: 50,
      category: "Chaussures",
      rating: "Sneakers",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleEdit = (id) => {
    alert(`Edit product with ID: ${id}`);
  };

  const handleView = (id) => {
    alert(`View details for product with ID: ${id}`);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-8 bg">
      {/* Header */}
      <div className="bg-white rounded-t-xl p-4 flex flex-col gap-4 md:flex-row justify-between items-center w-full">
        <h1 className="text-md text-[#262d35] font-semibold">
          Liste de tous les produits
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <a href="/produits/creer">
            <button className="bg-orange-500 text-sm text-white px-6 py-2 rounded-lg w-full md:w-auto">
              Ajouter
            </button>
          </a>
          <select
            onChange={(e) => setSelectedCategory(e.target.value)}
            value={selectedCategory}
            className="border border-slate-200 text-black bg-white rounded-lg hover:bg-slate-200 px-3 py-2 w-full md:w-auto"
          >
            <option value="">Toutes les catégories</option>
            <option value="Vêtements homme">Vêtements homme</option>
            <option value="Chaussures">Chaussures</option>
            <option value="Accessoires">Accessoires</option>
          </select>
          <input
            type="text"
            placeholder="Rechercher un produit"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 w-full md:w-auto text-sm"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto mt-4">
        <table className="w-full p-4">
          <thead>
            <tr className="text-[#262d35] border-y border-gray-300 bg-[#fcfcfc]">
              <th className="p-2">
                <input type="checkbox" />
              </th>
              <th className="text-left p-2">Nom et taille du produit</th>
              <th className="p-2">Prix</th>
              <th className="p-2">Stock</th>
              <th className="p-2">Catégorie</th>
              <th className="p-2">Sous catégorie</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr
                key={product.id}
                className="border-y bg-white hover:bg-white/50 text-center"
              >
                <td className="p-2">
                  <input type="checkbox" />
                </td>
                <td className="p-2 text-left">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-md">
                      <Image
                        src="/p-1.png"
                        width={100}
                        height={100}
                        alt="description de l'image"
                        className="w-12 h-12 object-cover rounded-md"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-black">{product.name}</p>
                      <p className="text-sm text-gray-700">
                        Size: {product.size.join(", ")}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="text-[#262d35] p-2">
                  ${product.price.toFixed(2)}
                </td>
                <td className="text-[#262d35] p-2">
                  <p className="text-[#262d35]">{product.stock} Item Left</p>
                  <p className="text-sm text-gray-500">{product.sold} Sold</p>
                </td>
                <td className="text-[#262d35] p-2">{product.category}</td>
                <td className="p-2">
                  <div className="flex text-[#262d35] items-center justify-center gap-1">
                    {product.rating}
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex items-center justify-center gap-3 h-9">
                    <button
                      onClick={() => handleView(product.id)}
                      className="text-blue-500"
                    >
                      <FaEye />
                    </button>
                    <button
                      onClick={() => handleEdit(product.id)}
                      className="text-orange-500"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="text-red-500"
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
