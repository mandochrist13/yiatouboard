
"use client";
import React, { useState } from 'react';

const ProduitInformation = () => {
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productBrand, setProductBrand] = useState('');
  const [productWeight, setProductWeight] = useState('');
  const [gender, setGender] = useState('');
  const [size, setSize] = useState([]);
  const [colors, setColors] = useState([]);
  const [description, setDescription] = useState('');
  const [tagNumber, setTagNumber] = useState('');
  const [stock, setStock] = useState('');
  const [tags, setTags] = useState([]);

  const handleSizeChange = (sizeSelected) => {
    setSize((prevSize) =>
      prevSize.includes(sizeSelected)
        ? prevSize.filter((size) => size !== sizeSelected)
        : [...prevSize, sizeSelected]
    );
  };

  const handleColorChange = (colorSelected) => {
    setColors((prevColors) =>
      prevColors.includes(colorSelected)
        ? prevColors.filter((color) => color !== colorSelected)
        : [...prevColors, colorSelected]
    );
  };

  const colorOptions = {
    dark: '#1a202c',
    yellow: '#fbbf24',
    white: '#ffffff',
    red: '#ef4444',
    green: '#10b981',
    blue: '#3b82f6',
    sky: '#0ea5e9',
    gray: '#9ca3af',
  };

  return (
    <div className="max-w-4xl mx-auto p-6  bg-white shadow-lg rounded-xl">
      <div className="text-center mb-8">
        <h4 className="text-2xl font-medium text-gray-800">Informations sur le produit</h4>
      </div>

      <div className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="form-group mb-4">
            <label htmlFor="productName" className="block text-gray-700 font-medium">
              Nom du produit
            </label>
            <input
              type="text"
              id="productName"
              placeholder="Nom des produits"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="category" className="block text-gray-700 font-medium">
            Catégories de produits
            </label>
            <select id="category" className="w-full p-2 border border-gray-300 rounded-md">
              <option value="">Choisissez une catégorie</option>
              <option value="vetements">Appareils électroménagers </option>
              <option value="chaussures">Electronique</option>
              <option value="accessoires">Mode</option>
              <option value="accessoires">Chaussures</option>
              <option value="accessoires">Meubles</option>
              <option value="accessoires">Casque audio</option>
            </select>
          </div>

          <div className="form-group mb-4">
            <label htmlFor="brand" className="block text-gray-700 font-medium">
              Marque
            </label>
            <input
              type="text"
              id="brand"
              placeholder="Nom de marque"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="brand" className="block text-gray-700 font-medium">
              Poids
            </label>
            <input
              type="text"
              id="brand"
              placeholder="En g et Kg"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          
          <div className="form-group mb-4">
            <label className="block text-gray-700 font-medium">Genre</label>
            <select id="gender" className="w-full p-2 border border-gray-300 rounded-md">
              <option value="">Sélectionner le sexe</option>
              <option value="homme">Homme</option>
              <option value="femme">Femme</option>
              <option value="unisexe">Autre</option>
            </select>
          </div>
        </div>
        

        <div>
          <h5 className="text-sm font-medium text-gray-700">Tailles:</h5>
          <div className="flex gap-4 flex-wrap">
            {['XS', 'S', 'M', 'XL', 'XXL', '3XL'].map((sizeOption) => (
              <button
                key={sizeOption}
                onClick={() => handleSizeChange(sizeOption)}
                className={`px-4 py-2 rounded-lg text-white ${size.includes(sizeOption) ? 'bg-blue-500' : 'bg-gray-300'} transition duration-300  hover:scale-105`}
              >
                {sizeOption}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h5 className="text-sm font-medium text-gray-700">Couleurs:</h5>
          <div className="flex gap-4 flex-wrap">
            {Object.entries(colorOptions).map(([colorName, colorHex]) => (
              <button
                key={colorName}
                onClick={() => handleColorChange(colorName)}
                className={`w-10 h-10 rounded-full transition duration-300  hover:scale-110 ${colors.includes(colorName) ? 'border-4 border-blue-500' : 'border-2 border-gray-300'}`}
                style={{ backgroundColor: colorHex }}
              />
            ))}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Brève desciption du produit"
            rows="4"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="form-group">
            <label htmlFor="product-id" className="block text-sm font-medium text-gray-700">Numéro d&apos;étiquette</label>
            <input
              type="number"
              id="product-id"
              placeholder="Enter product description"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              value={tagNumber}
              onChange={(e) => setTagNumber(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="product-stock" className="block text-sm font-medium text-gray-700">Action</label>
            <input
              type="number"
              id="product-stock"
              placeholder="Quantiter"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>
          {/* select */}
          
          <div className="form-group h-64 mb-4">
            <label htmlFor="category" className="block text-gray-700 font-medium">
            Étiqueter
            </label>
            <select id="category" className="w-full p-2 border border-gray-300 rounded-md">
              <option value="">Électronique</option>
              <option value="vetements">Casque audio</option>
              <option value="chaussures">Montre</option>
              <option value="accessoires">Accessoires</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProduitInformation;
