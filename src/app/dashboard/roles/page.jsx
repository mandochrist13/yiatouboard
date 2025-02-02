
// import React from "react";
// import { FaFacebook } from "react-icons/fa";
// import { FiEye, FiEdit2, FiTrash2 } from "react-icons/fi";

// const WorkspaceTable = () => {
//   return (
//     <div className="w-full bg-gray-50 p-6 shadow-lg rounded-lg">
      
//       <div className="flex items-center justify-between bg-gray-100 p-4 rounded-t-lg text-gray-700 font-semibold">
//         <div className="flex-1">Rôle</div>
//         <div className="flex-1">Espace de travail</div>
//         <div className="flex-1">Mots clés</div>
//         <div className="flex-1">Utilisateurs</div>
//         <div className="flex-1">Status</div>
//         <div className="flex-1">Action</div>
//       </div>

      
//       <div className="flex items-center justify-between bg-white p-4 shadow border-b">
        
//         <div className="flex-1">
//           <p className="text-sm font-medium text-gray-700">Gestionnaire d'espace de travail</p>
//         </div>

       
//         <div className="flex-1 flex items-center space-x-2">
//           <FaFacebook className="text-blue-600 text-lg" />
//           <p className="text-sm font-medium text-gray-700">Facebook</p>
//         </div>

     
//         <div className="flex-1 flex flex-col w-28 gap-5 ">
//           <span className="px-3 py-1 w-20 text-sm bg-gray-200 text-gray-700 rounded-s">
//             Directeur
//           </span>
//           <span className="px-3 py-1 w-20 text-sm bg-gray-200 text-gray-700 rounded-s">
//             Produit
//           </span>
//         </div>

       
//         <div className="flex-1 flex -space-x-2">
//           <img
//             src="https://via.placeholder.com/32"
//             alt="User 1"
//             className="w-8 h-8 rounded-full border-2 border-white"
//           />
//           <div className="w-8 h-8 flex items-center justify-center bg-pink-500 text-white text-sm font-bold rounded-full border-2 border-white">
//             P
//           </div>
//           <img
//             src="https://via.placeholder.com/32"
//             alt="User 2"
//             className="w-8 h-8 rounded-full border-2 border-white"
//           />
//         </div>

     
        
//         <div className="flex-1 flex items-center">
//           <div className="relative w-10 h-5">
      
//             <input
//             type="checkbox"
//             className="peer hidden"
//             id="toggleSwitch"
//             />
         
//            <label
//             htmlFor="toggleSwitch"
//             className="block w-full h-full bg-gray-300 rounded-full cursor-pointer shadow-inner peer-checked:bg-orange-500 transition-colors duration-300">              </label>
        
//            <span
//            className="absolute top-1 left-1 w-3 h-3 bg-white rounded-full shadow-md transition-transform duration-300 peer-checked:translate-x-5"> </span>
//            </div>
//         </div>


        
//         <div className="flex-1 flex space-x-3">
//           <button className="p-2 bg-gray-100 rounded-md hover:bg-gray-200">
//             <FiEye className="text-gray-600 text-lg" />
//           </button>
//           <button className="p-2 bg-orange-100 rounded-md hover:bg-orange-200">
//             <FiEdit2 className="text-orange-600 text-lg" />
//           </button>
//           <button className="p-2 bg-red-100 rounded-md hover:bg-red-200">
//             <FiTrash2 className="text-red-600 text-lg" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WorkspaceTable;
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FiEye, FiEdit2, FiTrash2 } from "react-icons/fi";
import Image from "next/image";

const WorkspaceTable = () => {
  return (
    <div className="w-full bg-gray-50 p-6 shadow-lg rounded-lg">
      {/* Conteneur avec overflow-x-auto */}
      <div className="overflow-x-auto">
        {/* Header */}
        <div className="flex items-center justify-between bg-gray-100 p-4 rounded-t-lg text-gray-700 font-semibold min-w-[600px]">
          <div className="flex-1">Rôle</div>
          <div className="flex-1">Espace de travail</div>
          <div className="flex-1">Mots clés</div>
          <div className="flex-1">Utilisateurs</div>
          <div className="flex-1">Status</div>
          <div className="flex-1">Action</div>
        </div>

        {/* Row */}
        <div className="flex items-center justify-between bg-white p-4 shadow border-b min-w-[600px]">
          {/* Rôle */}
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-700">
              Gestionnaire d&apos;espace de travail
            </p>
          </div>

          {/* Espace de travail */}
          <div className="flex-1 flex items-center space-x-2">
            <FaFacebook className="text-blue-600 text-lg" />
            <p className="text-sm font-medium text-gray-700">Facebook</p>
          </div>

          {/* Mots clés */}
          <div className="flex-1 flex flex-col w-28 gap-5">
            <span className="px-3 py-1 w-20 text-sm bg-gray-200 text-gray-700 rounded-md">
              Directeur
            </span>
            <span className="px-3 py-1 w-20 text-sm bg-gray-200 text-gray-700 rounded-md">
              Produit
            </span>
          </div>

          {/* Utilisateurs */}
          <div className="flex-1 flex -space-x-2">
            <Image
              src="/https://via.placeholder.com/32"
              alt="User 1"
              width={100}
              height={100}
              className="w-8 h-8 rounded-full border-2 border-white"
            />
            <div className="w-8 h-8 flex items-center justify-center bg-pink-500 text-white text-sm font-bold rounded-full border-2 border-white">
              P
            </div>
            <Image
              src="/google.png"
              width={100}
              height={100}
              alt="User 2"
              className="w-8 h-8 rounded-full border-2 border-white"
            />
          </div>

          {/* Status */}
          <div className="flex-1 flex items-center">
            <div className="relative w-10 h-5">
              <input
                type="checkbox"
                className="peer hidden"
                id="toggleSwitch"
              />
              <label
                htmlFor="toggleSwitch"
                className="block w-full h-full bg-gray-300 rounded-full cursor-pointer shadow-inner peer-checked:bg-orange-500 transition-colors duration-300"
              ></label>
              <span
                className="absolute top-1 left-1 w-3 h-3 bg-white rounded-full shadow-md transition-transform duration-300 peer-checked:translate-x-5"
              ></span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex-1 flex space-x-3">
            <button className="p-2 bg-gray-100 rounded-md hover:bg-gray-200">
              <FiEye className="text-gray-600 text-lg" />
            </button>
            <button className="p-2 bg-orange-100 rounded-md hover:bg-orange-200">
              <FiEdit2 className="text-orange-600 text-lg" />
            </button>
            <button className="p-2 bg-red-100 rounded-md hover:bg-red-200">
              <FiTrash2 className="text-red-600 text-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceTable;
