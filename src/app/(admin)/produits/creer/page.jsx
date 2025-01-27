"use client";

import Image from "next/image";
import React, { useState } from "react";
import { WiCloudUp } from "react-icons/wi";
import ProduitInformation from "../../../components/Forme.jsx";

const ProductCard = () => {
  const [images, setImages] = useState([]); // Pour gérer plusieurs images
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [size, setSize] = useState("");
  const [shoeSize, setShoeSize] = useState("");

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    setSubcategory(""); // Réinitialiser la sous-catégorie quand la catégorie change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Images envoyées :", images);
    console.log("Catégorie:", category);
    console.log("Sous-catégorie:", subcategory);
    console.log("Taille:", size);
    console.log("Pointure:", shoeSize);
    console.log("Échantillon:", isSample);
    if (isSample) {
      console.log("Quantité:", quantity);
    }
  };

  return (
    <div className="flex flex-col gap-6 lg:flex-row md:space-x-6 p-8 bg-gray-100">
      {/* Product Card */}
      <div className="w-full lg:w-1/4 bg-white p-4 rounded-md shadow-md">
        <div className="w-full h-40 bg-gray-200 rounded-md flex items-center justify-center">
          <Image
            width={100}
            height={100}
            src={images[0] || "/p-1.png"}
            alt="Produit"
            className="h-full w-full object-contain"
          />
        </div>
        <h2 className="mt-4 text-[#262d35] text-lg font-medium text-center md:text-left">
          {category === "T-shirt" ? "T-shirt Slim Fit" : "Chaussures"} pour Homme
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
          {/* Section Category */}
          <h5 className="text-sm font-medium text-gray-700 mt-4">Catégorie :</h5>
          <select
            value={category}
            onChange={handleCategoryChange}
            className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md"
          >
            <option value="">Sélectionnez une catégorie</option>
            <option value="T-shirt">T-shirt</option>
            <option value="Chaussures">Chaussures</option>
          </select>

          {/* Section Subcategory */}
          {category && (
            <>
              <h5 className="text-sm font-medium text-gray-700 mt-6">
                Sous-catégorie :
              </h5>
              <select
                value={subcategory}
                onChange={(e) => setSubcategory(e.target.value)}
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md"
              >
                <option value="">Sélectionnez une sous-catégorie</option>
                {category === "T-shirt" && (
                  <>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                  </>
                )}
                {category === "Chaussures" && (
                  <>
                    <option value="39">39</option>
                    <option value="40">40</option>
                    <option value="41">41</option>
                  </>
                )}
              </select>
            </>
          )}

          {/* Dynamic Input based on selected category */}
          {category === "T-shirt" && (
            <>
              <h5 className="text-sm font-medium text-gray-700 mt-6">Taille :</h5>
              <div className="flex gap-2 mt-2">
                {["S", "M", "L", "XL"].map((sizeOption) => (
                  <a
                    key={sizeOption}
                    className="px-4 py-2 text-sm rounded-lg text-black bg-gray-200 transition-transform  hover:scale-105"
                    onClick={() => setSize(sizeOption)}
                  >
                    {sizeOption}
                  </a>
                ))}
              </div>
            </>
          )}

          {category === "Chaussures" && (
            <>
              <h5 className="text-sm font-medium text-gray-700 mt-6">Pointure :</h5>
              <div className="flex gap-2 mt-2">
                {["39", "40", "41"].map((sizeOption) => (
                  <a
                    key={sizeOption}
                    className="px-4 py-2 text-sm rounded-lg text-black bg-gray-200 transition-transform  hover:scale-105"
                    onClick={() => setShoeSize(sizeOption)}
                  >
                    {sizeOption}
                  </a>
                ))}
              </div>
            </>
          )}
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

      {/* Formulaire d'ajout d'images */}
      <div className="w-full lg:w-3/4 bg-white p-4 rounded-md shadow-md">
        <h2 className="text-lg text-black font-medium text-center md:text-left">
          Ajouter des photos de produit
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
              multiple // Permet l'ajout de plusieurs fichiers
            />
            <div className="mt-4 flex flex-wrap gap-2">
              {images.map((img, index) => (
                <Image
                  key={index}
                  width={100}
                  height={100}
                  src={img}
                  alt={`Aperçu ${index}`}
                  className="h-20 w-20 object-cover rounded-md border"
                />
              ))}
            </div>
            <p  className="text-gray-600 text-center mt-4">
              Déposez vos images ici, ou{" "}
              <span   htmlFor="file-upload" className="text-blue-500 cursor-pointer">
                cliquez pour parcourir
              </span>
            </p>
            <p className="text-sm text-gray-400 mt-2">
              PNG, JPG et GIF sont autorisés.
            </p>
          </div>

          <ProduitInformation />
        </form>
      </div>
    </div>
  );
};

export default ProductCard;
