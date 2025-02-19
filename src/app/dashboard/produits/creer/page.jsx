"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";
import { WiCloudUp } from "react-icons/wi";
// import ProduitInformation from "../../../components/Forme.jsx";
import { db, storage } from "../../../../lib/firebase.js";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const ProductCard = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(""); // Pour gérer plusieurs images
  const [category, setCategory] = useState("");

  const [subcategory, setSubcategory] = useState("");
  const [shoeSize, setShoeSize] = useState("");
  const [size, setSize] = useState([]);
  const [colors, setColors] = useState([]);
  const [description, setDescription] = useState('');
  const [tagNumber, setTagNumber] = useState('');
  const [weight, setWeight] = useState('');
  // const [tags, setTags] = useState([]);
  const [isSample, setIsSample] = useState(false); // Pour savoir si c'est un échantillon
  const [quantity, setQuantity] = useState(1); // Quantité pour l'échantillon


  const dbref = collection(db, "Products")



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



  
  const uploadImage = (file) => {
    if (!file) return;
  
    try {
      const storageRef = ref(storage, `images/${file.name}`);
    console.log(`storageRef ${storageRef}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    console.log(`Upload task ${uploadTask}`);
  
    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Progression de l'upload (optionnel)
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload en cours : ${progress}%`);
        },
        (error) => reject(error), // Gérer les erreurs
        async () => {
          // Récupérer l'URL après l'upload
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          resolve(downloadURL);
        }
      );
    });
    } catch (error) {
      console.log(`error ${error}` );
    }
    
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0]; // Récupérer seulement le premier fichier

    if (!file) {
      alert("Aucune image sélectionnée !");
      return;
    }

    console.log("url image:" , file)

    try {
      const url = await uploadImage(file)
      console.log("Image uploaded :", url);
      setImage(url);
     } catch (error) {
       console.error("Erreur lors de l'upload de l'image :", error);
       alert("Erreur lors de l'upload de l'image. Réessayez !");
     }
  };



  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    setSubcategory(""); // Réinitialiser la sous-catégorie quand la catégorie change
  };

  const fileInputRef = useRef(null);
  const handleUploadSuccess = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // ✅ Réinitialise correctement le champ file
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Image envoyée :", image);
    console.log("Catégorie:", category);
    console.log("Sous-catégorie:", subcategory);
    console.log("Taille:", size);
    console.log("Pointure:", shoeSize);
    console.log("Échantillon:", isSample);
    if (isSample) {
      console.log("Quantité:", quantity);
    }
  };



  const handleCreateProduct = async () => {
    if (!name || !category || !price || !description || !image) {
      alert("Veuillez remplir tout les champs")
      return;
    }

    const productData = {
      name,
      image,
      category,
      price: parseFloat(price),
      description,
      subcategory,
      size,
      colors,
      weight,
      shoeSize,
      isSample,
      quantity: parseInt(quantity),
    };

    try {
      const response = await fetch("/api/v1/products", {
        method: "POST",
        // mode: 'no-cors',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      const docRef = await addDoc(collection(db, "Products"), productData);

      if (!response.ok) {
        throw new Error("Erreur lors de la création du produit");
      }

      console.log("Produit ajouté avec ID :", docRef.id);
      alert("Produit ajouté avec succès !");
    } catch (error) {
      console.error("Erreur lors de l'ajout du produit :", error);
      alert(error.message);
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
            src={image ? image : "/p-1.png"}
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
          <button onClick={handleCreateProduct} className="w-full py-2 text-sm bg-white border hover:bg-gray-500 border-gray-500 text-gray-500 rounded-xl hover:text-white transition-transform">
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

              multiple accept="image/*"
              className="h-20 w-20 flex items-center justify-center cursor-pointer"
            >
              <WiCloudUp className="text-orange-500 text-6xl" />
            </label>
            <input
              // id="file-upload"
              type="file"
              accept="image/*"
              // value={images}
              ref={fileInputRef}
              //  onChange={handleFileChange}
              onChange={handleImageChange}
              className=" "
            // multiple  Permet l'ajout de plusieurs fichiers
            />
            <div className="mt-4 flex flex-wrap gap-2">
              {image && (
                <Image
                  src={image}
                  alt="Image sélectionnée"
                  width={100}
                  height={100}
                />
              )}
            </div>
            <p className="text-gray-600 text-center mt-4">
              Déposez vos images ici, ou{" "}
              <span htmlFor="file-upload" className="text-blue-500 cursor-pointer">
                cliquez pour parcourir
              </span>
            </p>
            <p className="text-sm text-gray-400 mt-2">
              PNG, JPG et GIF sont autorisés.
            </p>
          </div>

          {/* <ProduitInformation /> */}
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nom des produits"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>


                {/* <div className="form-group mb-4">
                  <label htmlFor="brand" className="block text-gray-700 font-medium">
                    Marque
                  </label>
                  <input
                    type="text"
                    id="brand"
                    value={}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Nom de marque"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div> */}

                <div className="form-group mb-4">
                  <label htmlFor="brand" className="block text-gray-700 font-medium">
                    Poids
                  </label>
                  <input
                    type="text"
                    id="brand"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="En g et Kg"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                <div className="form-group mb-4">
                  <label htmlFor="brand" className="block text-gray-700 font-medium">
                    Prix
                  </label>
                  <input
                    type="text"
                    id="brand"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="En F CFA"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
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

                  {/* Spécifier si c'est un échantillon ou un produit international */}
                  <div className="">
                    <label className="flex items-center gap-2 text-sm text-gray-700">
                      <input
                        type="checkbox"
                        checked={isSample}
                        onChange={() => setIsSample(!isSample)}
                      />
                      C&apos;est un échantillon
                    </label>
                    {isSample && (
                      <div className="mt-4">
                        <h5 className="text-sm font-medium text-gray-700">Quantité :</h5>
                        <input
                          type="number"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}

                          min="1"
                          className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md"
                        />
                      </div>
                    )}
                  </div>

                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductCard;
