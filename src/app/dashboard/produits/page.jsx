"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Modal } from "flowbite-react";
import { Icon } from "@iconify/react";
import { db } from "@/lib/firebase";
import { motion } from "framer-motion";
import { WiCloudUp } from "react-icons/wi";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
// import ProduitInformation from "../../../components/Forme.jsx";
// import { db, storage } from "../../../../lib/firebase.js";
// import { addDoc, collection } from "firebase/firestore";
// import { uploadBytesResumable, ref, getDownloadURL } from "firebase/storage";
import { collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";

const ProductTable = () => {
  const [openModal, setOpenModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [fetchData, setFetchData] = useState([])
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  //variable update produit
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(""); // Pour gérer plusieurs images
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [shoeSize, setShoeSize] = useState("");
  const [size, setSize] = useState([]);
  const [colors, setColors] = useState([]);
  const [description, setDescription] = useState('');
  const [tagNumber, setTagNumber] = useState(0);
  const [weight, setWeight] = useState('');
  // const [tags, setTags] = useState([]);
  const [isSample, setIsSample] = useState(false); // Pour savoir si c'est un échantillon
  const [quantity, setQuantity] = useState(1); // Quantité pour l'échantillon


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
      fetchdata()
    } catch (error) {
      console.log("Erreur lors de la suppression :", error);
    }
  }

  const handleUpdate = async ( product) => {
    const productData = {
      name: name? name : product.name,
      image: image? image: product.image,
      category: category? category: product.category,
      price: price? parseFloat(price) : product.price,
      description: description? description : product.description,
      subcategory: subcategory? subcategory: product.subcategory,
      size: size? size : product.size,
      weight: weight? weight: product.weight,
      shoeSize: shoeSize? shoeSize: product.shoeSize,
      isSample: isSample? isSample: product.isSample,
      quantity: quantity? quantity: product.quantity,
    };

    console.log('data :', productData)
    try {
      const docRef = doc(db, 'products', product.id);
      await updateDoc(docRef, productData);
      console.log(`Document ${product.id} mis à jour avec succès`);
      setOpenModal(false)
      fetchdata()
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

  const uploadImage = async (file) => {

    const storageRef = ref(storage, `images/${file.name}`);
    uploadBytesResumable(storageRef, file)
      .then(() => {
        console.log('upload success');
        getDownloadURL(ref(storage, `images/${file.name}`))
          .then((url) => {
            setImage(url);

          })
      });
    //setOldImageName(image.name)
  }


  const handleImageChange = async (e) => {
    const file = e.target.files[0]; // Récupérer seulement le premier fichier

    if (!file) {
      alert("Aucune image sélectionnée !");
      return;
    }

    console.log("url image:", file)

    try {
      await uploadImage(file)

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


  return (
    <div className="p-8 ">
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
            {filteredProducts.map((product, index) => (
              <tr
                key={index}
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
                  <Dialog open={openModal} onOpenChange={()=>setOpenModal(!openModal)}>
                    <DialogTrigger asChild>
                      <button
                        type="button"
                        onClick={() => setOpenModal(true)}
                        className="btn bg-orange-500 text-white px-2 py-1 rounded-md hover:bg-orange-600 transition-all duration-300"
                      >
                        <Icon icon="solar:pen-2-broken" />
                      </button>
                    </DialogTrigger>

                    <DialogContent className="sm:max-w-[725px] h-[80%] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Modifier produit</DialogTitle>
                        <DialogDescription>
                          Make changes to your profile here. Click save when you're done.
                        </DialogDescription>
                      </DialogHeader>
                      {/* <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="name" className="text-right">
                            Name
                          </Label>
                          <Input id="name" value="Pedro Duarte" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="username" className="text-right">
                            Username
                          </Label>
                          <Input id="username" value="@peduarte" className="col-span-3" />
                        </div>
                      </div> */}
                      <div className="space-y-4 text-gray-700">
                        {/* <Image
                  src="/p-1.png"
                  width={1000}
                  height={1000}
                  alt={`Produit`}
                  className="object-cover w-40 rounded-lg mb-4"
                /> */}

                      </div>
                      <div className="space-y-4">
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
                                  value={!name ? product.name : name}
                                  onChange={(e) => setName(e.target.value)}
                                  placeholder="Nom des produits"
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
                                  value={!weight ? product.weight : weight}
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
                                  value={!price ? product.price : price}
                                  onChange={(e) => setPrice(e.target.value)}
                                  placeholder="En F CFA"
                                  className="w-full p-2 border border-gray-300 rounded-md"
                                  required
                                />
                              </div>


                              <div className="form-group">
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                                <textarea
                                  id="description"
                                  className="w-full p-3 border border-gray-300 rounded-lg"
                                  value={description ? description: product.description}
                                  onChange={(e) => setDescription(e.target.value)}
                                  placeholder="Brève desciption du produit"
                                  rows="4"
                                />
                              </div>
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
                                      value={subcategory }
                                      onChange={(e) => setSubcategory(e.target.value)}
                                      className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md"
                                    >
                                      <option value="">Sélectionnez une sous-catégorie</option>
                                      {category === "T-shirt" ? (
                                        <>
                                          <option value="M">M</option>
                                          <option value="L">L</option>
                                          <option value="XL">XL</option>
                                        </>
                                      ): category === "Chaussures" &&(
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
                                {category === "T-shirt" ?(
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
                                ):category === "Chaussures" &&  (
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


                              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                <div className="form-group">
                                  <label htmlFor="product-id" className="block text-sm font-medium text-gray-700">Numéro d&apos;étiquette</label>
                                  <input
                                    type="number"
                                    id="product-id"
                                    placeholder="Enter product description"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                    value={!tagNumber? product.tagNumber : tagNumber}
                                    onChange={(e) => setTagNumber(parseInt(e.target.value))}
                                  />
                                </div>

                                {/* Spécifier si c'est un échantillon ou un produit international */}
                                <div className="">
                                  <label className="flex items-center gap-2 text-sm text-gray-700">
                                    <input
                                      type="checkbox"
                                      checked={isSample }
                                      onChange={() => setIsSample(!isSample)}
                                    />
                                    C&apos;est un échantillon
                                  </label>
                                  {isSample && (
                                    <div className="mt-4">
                                      <h5 className="text-sm font-medium text-gray-700">Quantité :</h5>
                                      <input
                                        type="number"
                                        value={!quantity? product.quantity: quantity}
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
                      </div>
                      <DialogFooter>
                        <Button onClick={()=> handleUpdate(product)}>Save changes</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                  <button

                    className="btn bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition-all duration-300"
                    onClick={() => handleDelete(product.id)}
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
      {/* Modal */}




    </div>
  );
};

export default ProductTable;
