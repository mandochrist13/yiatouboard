"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

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
      subcategory: "T-shirts",
    },
    {
      id: 2,
      name: "White Sneakers",
      size: ["38", "39", "40", "41"],
      price: 120,
      stock: 200,
      sold: 50,
      category: "Chaussures",
      subcategory: "Sneakers",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "" || product.category === selectedCategory;
    const matchesSubcategory =
      selectedSubcategory === "" || product.subcategory === selectedSubcategory;

    return matchesSearch && matchesCategory && matchesSubcategory;
  });

  return (
    <div className="p-8 bg">
      {/* Header */}
      <div className="bg-white rounded-t-xl p-4 flex justify-between items-center w-full">
        <h1 className="text-md text-[#262d35] font-semibold">
          Liste de tous les produits ({products.length})
        </h1>
        <div className="relative">
          {/* Popover Trigger */}
          <button
            onClick={() => setIsPopoverOpen(!isPopoverOpen)}
            className="text-gray-500"
          >
            <Icon icon="ph:dots-three-outline-vertical-fill" />
          </button>

          {/* Popover */}
          {isPopoverOpen && (
            <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-200 shadow-lg rounded-lg p-4 z-50">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-semibold">Options</h3>
                <button
                  onClick={() => setIsPopoverOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  X
                </button>
              </div>

              <a href="/produits/creer">
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg w-full mb-2">
                  Ajouter
                </button>
              </a>

              {/* Filter by Category */}
              <select
                onChange={(e) => setSelectedCategory(e.target.value)}
                value={selectedCategory}
                className="border border-gray-300 rounded-lg px-3 py-2 w-full mb-2"
              >
                <option value="">Toutes les catégories</option>
                <option value="Vêtements homme">Vêtements homme</option>
                <option value="Chaussures">Chaussures</option>
              </select>

              {/* Filter by Subcategory */}
              <select
                onChange={(e) => setSelectedSubcategory(e.target.value)}
                value={selectedSubcategory}
                className="border border-gray-300 rounded-lg px-3 py-2 w-full mb-2"
              >
                <option value="">Toutes les sous-catégories</option>
                <option value="T-shirts">T-shirts</option>
                <option value="Sneakers">Sneakers</option>
              </select>

              {/* Search Input */}
              <input
                type="text"
                placeholder="Rechercher un produit"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 w-full"
              />
            </div>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
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
                        Taille: {product.size.join(", ")}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="text-[#262d35] p-2">
                  ${product.price.toFixed(2)}
                </td>
                <td className="text-[#262d35] p-2">
                  <p className="text-[#262d35]">{product.stock} Items Left</p>
                  <p className="text-sm text-gray-500">{product.sold} Sold</p>
                </td>
                <td className="text-[#262d35] p-2">{product.category}</td>
                <td className="text-[#262d35] p-2">{product.subcategory}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
