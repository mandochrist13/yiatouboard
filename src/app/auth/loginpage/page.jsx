
import React from "react";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white">
      {/* Section gauche */}
      <div className="w-full md:w-1/2 px-6 md:px-16 lg:px-32 py-12 flex flex-col space-y-6 bg-white shadow-md">
        <div className="auth-logo mb-6 flex justify-start space-x-4">
          {/* Logo */}
          <a href="index.html" className="block">
            <Image
              src="/logo-dark.png"
              alt="Logo dark"
              className="h-8 sm:h-6"
            />
          </a>
        </div>

        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Se connecter
        </h1>
        <p className="text-gray-600 text-center md:text-start">
          Entrez votre nom et votre mot de passe pour accéder au panneau
          d&apos;administration.
        </p>

        <form className="w-full max-w-sm mx-auto md:mx-0">
          <div className="mb-4">
            <label
              htmlFor="nam"
              className="block text-sm font-medium text-gray-700"
            >
              Nom d&apos;utilisateur
            </label>
            <input
              type="text"
              id="nam"
              name="nam"
              placeholder="Entrez votre nom"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Entrez votre mot de passe"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              required
            />
            <div className="mt-2 text-right">
              <a href="#" className="text-orange-500 text-sm hover:underline">
                Réinitialiser le mot de passe
              </a>
            </div>
          </div>

          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="h-4 w-4 text-orange-500 border-gray-300 rounded"
            />
            <label
              htmlFor="remember"
              className="ml-2 text-sm text-gray-600"
            >
              Souviens-toi de moi
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none"
          >
            Se connecter
          </button>
        </form>

      </div>

      {/* Section droite */}
      <div className="hidden md:flex w-full md:w-1/2 h-full items-center justify-center bg-white">
        <div className="w-full max-w-lg p-4 md:p-6">
          <Image
            src="/img-10.jpg"
            alt="Image description"
            className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
