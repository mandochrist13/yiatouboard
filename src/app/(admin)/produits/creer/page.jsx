"use client";

import Image from "next/image";
import React, { useState } from "react";
import { WiCloudUp } from "react-icons/wi";
import ProduitInformation from "../../../components/Forme.jsx";

const ProductCard = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Image envoyée :", image);
  };

  return (
    <div className="flex flex-col gap-6 lg:flex-row md:space-x-6 p-8 bg-gray-100">
      {/* Product Card */}
      <div className="w-full lg:w-1/4 bg-white p-4 rounded-md shadow-md">
        <div className="w-full h-40 bg-gray-200 rounded-md flex items-center justify-center">
          <Image
            width={100}
            height={100}
            src={image || "/p-1.png"}
            alt="Men Black Slim Fit T-shirt"
            className="h-full w-full object-contain"
          />
        </div>
        <h2 className="mt-4 text-[#262d35] text-lg font-medium text-center md:text-left">
          T-shirt Slim Fit Noir pour Homme{" "}
          <span className="text-gray-500">(Mode)</span>
        </h2>
        <p className="mt-4 text-[#262d35] text-sm font-medium text-center md:text-left">
          Prix :
        </p>
        <p className="mt-2 gap-1 w-full grid grid-cols-2 text-center md:text-left">
          <span className="line-through text-gray-400">100 FCFA</span>{" "}
          <span className="text-[#262d35] font-bold">8000 FCFA</span>{" "}
          <span className="text-gray-500 text-[10px]">(30% de réduction)</span>
        </p>

        <div>
          {/* Section Size */}
          <h5 className="text-sm font-medium text-gray-700 mt-4">Taille :</h5>
          <div className="flex gap-2 mt-2">
            {["S", "M", "XL", "XXL"].map((sizeOption) => (
              <a
                key={sizeOption}
                className="px-4 py-2 text-sm rounded-lg text-black bg-gray-200 transition-transform  hover:scale-105"
              >
                {sizeOption}
              </a>
            ))}
          </div>

          {/* Section Colors */}
          <h5 className="text-sm font-medium text-gray-700 mt-6">Couleurs</h5>
          <div className="flex gap-2 justify-between mt-2">
            {["#EF4444", "#fff", "#3B82F6", "#F59E0B",].map(
              (color, index) => (
                <div key={index} className="bg-gray-300 p-3 rounded-md">
                  <div
                    
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                </div>
              )
            )}
          </div>
        </div>

        <div className="flex justify-between gap-2 mt-6 ">
          <button className="w-full py-2 text-sm bg-white border hover:bg-gray-500 border-gray-500 text-gray-500 rounded-xl hover:text-white transition-transform">
            Ajouter
          </button>
          <button className="px-5 w-full text-sm py-2 bg-orange-400 text-white rounded-xl hover:bg-orange-600 transition-transform ">
            Annuler
          </button>
        </div>
      </div>

      {/* Formulaire d'ajout d'image */}
      <div className="w-full lg:w-3/4 bg-white  p-4 rounded-md shadow-md">
        <h2 className="text-lg text-black font-medium text-center md:text-left">
          Ajouter une photo de produit
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="border-2 border-dashed p-8 rounded-md flex flex-col items-center">
            <label
              htmlFor="file-upload"
              className="h-20 w-20 flex items-center justify-center cursor-pointer"
            >
              <WiCloudUp className="text-orange-500 text-6xl" />
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            {image && (
              <Image
                width={100}
                height={100}
                src={image}
                alt="Aperçu"
                className="mt-4 h-40 w-full object-cover rounded-lg border"
              />
            )}
            <p className="text-gray-600 text-center mt-4">
              Déposez vos images ici, ou{" "}
              <span className="text-blue-500 cursor-pointer">
                cliquez pour parcourir
              </span>
            </p>
            <p className="text-sm text-gray-400 mt-2">
              PNG, JPG et GIF sont autorisés.
            </p>
          </div>
        </form>

        <div className="">
          <ProduitInformation />
        </div>
      </div>
    </div>
  );
};

// const ProductInformation = () => {
//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl">
//       <h4 className="text-2xl font-medium text-center mb-8">Informations sur le produit</h4>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div>
//           <label htmlFor="product-brand" className="block text-sm font-medium">Marque</label>
//           <input type="text" id="product-brand" className="w-full p-3 border rounded-lg" />
//         </div>

//         <div>
//           <label htmlFor="product-weight" className="block text-sm font-medium">Poids</label>
//           <input type="text" id="product-weight" className="w-full p-3 border rounded-lg" />
//         </div>
//       </div>
//     </div>
//   );
// };

export default ProductCard;
