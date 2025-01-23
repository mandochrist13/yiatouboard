"use client";
import { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

export default function SubCategoriesPage() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryName, setCategoryName] = useState("");
  const dropdownRef = useRef(null);

  const categories = [
    { id: "cat1", name: "Montres" },
    { id: "cat2", name: "Vêtements" },
    { id: "cat3", name: "Chaussures" },
    { id: "cat4", name: "Accessoires" },
  ];

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    console.log("Catégorie sélectionnée :", event.target.value);
  };

  const [selectedFilter, setSelectedFilter] = useState("Toutes");

  const subCategories = [
    {
      id: "subcat1",
      name: "Montres",
      img: "/p-1.png",
      bgColor: "bg-gray-200",
    },
    {
      id: "subcat2",
      name: "Vêtements",
      img: "/p-6.png",
      bgColor: "bg-blue-200",
    },
    {
      id: "subcat3",
      name: "Chaussures",
      img: "/p-7.png",
      bgColor: "bg-yellow-200",
    },
    {
      id: "subcat4",
      name: "Accessoires",
      img: "/p-9.png",
      bgColor: "bg-teal-200",
    },
  ];

  const products = [
    {
      id: "P12345",
      name: "accessoire homme",
      img: "/p-1.png",
      price: "10000 fcfa",
      // categoryName: "accessoire homme",
      subCategory: "Montres",
    },
    {
      id: "P67890",
      name: "accessoir enfant",
      img: "/p-6.png",
      price: "5000 fcfa",
      // categoryName: "accessoir enfant",
      subCategory: "Vêtements",
    },
  ];

  // Gestion des clics hors du menu déroulant
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

  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);

  const togglePopup = (editing = false, category = null) => {
    setPopupVisible(!popupVisible);
    setIsEditing(editing);
    setSelectedCategory(category);
    setCategoryName(editing && category ? category.name : "");
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    setDropdownVisible(false);
  };

  const handleSaveCategory = () => {
    if (isEditing) {
      console.log(
        "Modification de la catégorie : ",
        selectedCategory.id,
        categoryName
      );
    } else {
      console.log("Création d'une nouvelle catégorie : ", categoryName);
    }
    setPopupVisible(false);
  };

  return (
    <div className="container mt-2 mx-auto px-10">
      {/* Grid des sous-catégories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {subCategories.map((subCategory) => (
          <div
            className="shadow-lg transform transition-all duration-300 rounded-lg overflow-hidden"
            key={subCategory.id}
          >
            <div className="text-center p-4">
              <div
                className={`${subCategory.bgColor} rounded-md flex items-center justify-center py-1 transition-all duration-300`}
              >
                <Image
                  src={subCategory.img}
                  alt={subCategory.name}
                  height={70}
                  width={70}
                  className="object-cover transition-transform transform"
                />
              </div>
              <h4 className="mt-3 mb-0 text-sm font-semibold text-gray-700 transition-all duration-300 hover:text-orange-500">
                {subCategory.name}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* Liste des produits */}
      <div className="mt-8">
        <div className="card shadow-lg rounded-lg overflow-hidden">
          <div className="w-full flex justify-between items-center p-4 bg-white">
            <h4 className="text-lg text-black font-semibold">
              Catégorie
            </h4>
            <div className="flex gap-4">
              <a
                href="#!"
                className="btn bg-orange-600 text-white px-4 py-2 rounded-md transition duration-300"
                onClick={() => togglePopup(false)}
              >
                Ajouter une sous-catégorie
              </a>
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={toggleDropdown}
                  className=" bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300"
                >
                  Filtrer par sous-catégorie
                </button>
                {dropdownVisible && (
                  <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-48 transition-all duration-300 opacity-100">
                    <a
                      href="#!"
                      className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-all duration-300 ${
                        selectedFilter === "Toutes" ? "font-semibold" : ""
                      }`}
                      onClick={() => handleFilterChange("Toutes")}
                    >
                      Toutes
                    </a>
                    {subCategories.map((subCategory) => (
                      <a
                        key={subCategory.id}
                        href="#!"
                        className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-all duration-300 ${
                          selectedFilter === subCategory.name
                            ? "font-semibold"
                            : ""
                        }`}
                        onClick={() => handleFilterChange(subCategory.name)}
                      >
                        {subCategory.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Table des produits */}
          <div className="overflow-x-auto py-4">
            <table className="min-w-full divide-y divide-gray-200 table-auto">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-5">
                    <input type="checkbox" className="form-checkbox" />
                  </th>
                   <th className="px-4 py-2 text-sm font-semibold text-gray-600">
                    ID
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                    Catégorie
                  </th>
                  <th className="px-4 text-center py-2 text-sm font-semibold text-gray-600">
                    Prix
                  </th>
                 
                  {/* <th className="px-4 py-2 text-sm font-semibold text-gray-600">
                    Catégorie
                  </th> */}
                  <th className="px-4 text-center py-2 text-sm font-semibold text-gray-600">
                    Sous-catégorie
                  </th>
                  <th className="px-4 py-2 text-center text-sm font-semibold text-gray-600">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products
                  .filter((product) =>
                    selectedFilter === "Toutes"
                      ? true
                      : product.subCategory === selectedFilter
                  )
                  .map((product) => (
                    <tr
                      key={product.id}
                      className="hover:bg-gray-50 transition-all duration-200"
                    >
                      <td className="px-5">
                        <input type="checkbox" className="form-checkbox" />
                      </td>
                      <td className="px-4 py-2 text-black text-sm">
                        {product.id}
                      </td>
                      <td className="px-4 py-2">
                        <div className="flex items-center gap-2">
                          <Image
                            src={product.img}
                            alt={product.name}
                            width={50}
                            height={50}
                            className="w-12 object-cover rounded"
                          />
                          <p className="text-gray-800 font-medium text-sm">
                            {product.name}
                          </p>
                        </div>
                      </td>
                      <td className="px-4 py-2 text-center text-black text-sm">
                        {product.price}
                      </td>
                      {/* <td className="px-4 py-2 text-black text-sm">
                        {product.categoryName}
                      </td> */}
                      <td className="px-4 py-2 text-center text-black text-sm">
                        {product.subCategory}
                      </td>
                      <td className="px-4 py-2 text-sm">
                        <div className="flex gap-2">
                          <a
                            href="#!"
                            className="btn bg-gray-100 text-gray-800 px-2 py-1 rounded-md hover:bg-gray-200 transition-all duration-300"
                          >
                            <Icon icon="solar:eye-broken" />
                          </a>
                          <a
                            href="#!"
                            className="btn bg-orange-500 text-white px-2 py-1 rounded-md hover:bg-orange-600 transition-all duration-300"
                            onClick={() => togglePopup(true, product)}
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

      {/* Pop-up */}
      {popupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-96 rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              {isEditing
                ? "Modifier la sous-catégorie"
                : "Créer une sous-catégorie"}
            </h2>
            <input
              type="text"
              className="w-full border mb-4 border-gray-300 rounded-md p-2"
              placeholder="Nom de la sous-catégorie"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
            <div className="flex flex-col gap-4 w-full">
              {/* <label
                htmlFor="category-select"
                className="text-sm font-medium text-gray-700"
              >
                Choisir une catégorie
              </label> */}
              <select
                id="category-select"
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="border border-gray-300 rounded-md p-2 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="" disabled>
                  -- Sélectionnez une catégorie --
                </option>
                {categories.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>

              {selectedCategory && (
                <p className="text-sm text-gray-600">
                  Vous avez sélectionné :{" "}
                  <span className="font-medium text-orange-600">
                    {selectedCategory}
                  </span>
                </p>
              )}
            </div>
            <div className="mt-4 flex justify-end gap-4">
              <button
                onClick={() => setPopupVisible(false)}
                className="btn bg-gray-200 text-gray-800 px-4 py-2 rounded-md"
              >
                Annuler
              </button>
              <button
                onClick={handleSaveCategory}
                className="btn bg-orange-600 text-white px-4 py-2 rounded-md"
              >
                Sauvegarder
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
