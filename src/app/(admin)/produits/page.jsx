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
      category: "Fashion",
      rating: 4.5,
      reviews: 55,
    },
  ]);

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleEdit = (id) => {
    alert(`Edit product with ID: ${id}`);
  };

  const handleView = (id) => {
    alert(`View details for product with ID: ${id}`);
  };

  return (
    <div className="p-8 bg ">
      <div className="bg-white  rounded-t-xl p-2 flex justify-between items-center w-full">
        <h1 className="text-md text-[#262d35] font-semibold">Liste de tous les produits</h1>
        
        <div className="flex flex-col items-start gap-4 md:flex-row">
          <a href="/produits/creer">
            <button className="bg-orange-500 text-sm text-white px-6 py-2 rounded-lg w-full md:w-auto">
             Ajouter 
            </button>
         </a>
         <select className="border border-slate-200 text-black bg-white rounded-lg hover:bg-slate-200 px-3 py-2 w-full md:w-auto">
           <option value="this-month">Ce mois-ci</option>
           <option value="last-month">Télécharger</option>
           <option value="all-time">Exporter</option>
           <option value="all-time">Importer</option>
        </select>
       </div>
      </div>
      <div className="overflow-x-auto ">
      <table className="w-full   p-4">
        <thead className="">
          <tr className="text-[#262d35] border-y border-gray-300 bg-[#fcfcfc]">
            <th className=" p-2">
              <input type="checkbox" />
            </th>
            <th className="text-left p-2">Nom et taille du produit</th>
            <th className=" p-2">Prix</th>
            <th className=" p-2">Stock</th>
            <th className=" p-2">Catégorie</th>
            <th className=" p-2">Notation</th>
            <th className=" p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-y bg-white hover:bg-white/50 text-center">
              <td className="p-2">
                <input type="checkbox" />
              </td>
              <td className=" p-2 text-left">
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
              <td className="text-[#262d35] p-2">${product.price.toFixed(2)}</td>
              <td className=" text-[#262d35] p-2">
                <p className="text-[#262d35]">{product.stock} Item Left</p>
                <p className="text-sm text-gray-500">{product.sold} Sold</p>
              </td>
              <td className="text-[#262d35] p-2">{product.category}</td>
              <td className="p-2">
                <div className="flex bg-[#edf2f7] rounded text-[#262d35] items-center justify-center gap-1">
                  <FaStar className="text-yellow-400" />
                  {product.rating} ({product.reviews})
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
