"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { db } from "@/lib/firebase";
import { collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [fetchData, setFetchData] = useState([])
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);


  const fetchdata = async () => {

    try {
      try {
        const querySnapshot = await getDocs(collection(db, "products")); // Remplace "products" par le bon nom de ta collection
        const snap = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setFetchData(snap); // Mettre à jour le state
        console.log(snap);
      } catch (error) {
        console.error("Erreur lors de la récupération des produits :", error);
      }
    } catch (error) {
      console.log("Erreur lors de la récupération des produits :", error);
    }
  };

  const handleDelete = async (productId) => {
    try {
      const docRef = doc(db, 'products', productId)
      await deleteDoc(docRef)
      console.log(`Document ${productId} supprimé avec succès`);
    } catch (error) {
      console.log("Erreur lors de la suppression :", error);
    }
  }

  const handleUpdate = async (productId) => {
    try {
      const docRef = doc(db, 'products', productId);
      await updateDoc(docRef, updatedFields);
      console.log(`Document ${productId} mis à jour avec succès`);
    } catch (error) {
      console.log("Erreur lors de la mise à jour :", error);
    }
  }


  useEffect(() => {
    fetchdata()

  }, [])

  const filteredProducts = [...products, ...fetchData].filter((product) => {
    const name = product.name || ""; // S'assure que name est une string
    const matchesSearch = name.toLowerCase().includes(searchQuery.toLowerCase());
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

              <a href="/dashboard/produits/creer">
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
              <th className="p-2"> Action</th>
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
                      {/* <p className="text-sm text-gray-700">
                        Taille: {product.size.join(", ")}
                      </p> */}
                    </div>
                  </div>
                </td>
                <td className="text-[#262d35] p-2">
                  {/* ${product.price.toFixed(2)} */}
                  {product.price} F CFA
                </td>
                <td className="text-[#262d35] p-2">
                  <p className="text-[#262d35]">{product.stock} Items Left</p>
                  <p className="text-sm text-gray-500">{product.sold} Sold</p>
                </td>
                <td className="text-[#262d35] p-2">{product.category}</td>
                <td className="text-[#262d35] p-2">{product.subcategory}</td>
                <td className="text-center p-2"> <div className="flex h-full w-full gap-2">
                  <button
                    href="#!"
                    className="btn btn-light bg-gray-100 text-gray-800 px-2 py-1 rounded-md hover:bg-gray-200 transition-all duration-300"
                  >
                    <Icon icon="solar:eye-broken" />
                  </button>
                  <button
                    href="#!"
                    className="btn bg-orange-500 text-white px-2 py-1 rounded-md hover:bg-orange-600 transition-all duration-300"
                  >
                    <Icon icon="solar:pen-2-broken" />
                  </button>
                  <button
                    href="#!"
                    className="btn bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition-all duration-300"
                  >
                    <Icon icon="solar:trash-bin-minimalistic-2-broken" />
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
