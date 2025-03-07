"use client"

// src/context/UserContext.js
import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Auth } from "@/lib/firebase"; // Importez votre instance Firebase Auth
import Cookies from "js-cookie";

// Créez le contexte
const UserContext = createContext();

// Hook personnalisé pour utiliser le contexte
export const useUser = () => useContext(UserContext);

// Fournisseur de contexte
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // État de l'utilisateur
  const [loading, setLoading] = useState(true); // État de chargement

  useEffect(() => {
    // Écoutez les changements d'état d'authentification
    const unsubscribe = onAuthStateChanged(Auth, (user) => {
      setUser(user); // Mettez à jour l'utilisateur
      setLoading(false); // Arrêtez le chargement
    });

    // Nettoyez l'abonnement lors du démontage du composant
    return () => unsubscribe();
  }, []);


   // Fonction pour déconnecter l'utilisateur
   const logout = async () => {
    await signOut(Auth);
    Cookies.remove("authToken"); // Supprimer le token du cookie
    setUser(null);
  };

  return (
    <UserContext.Provider value={{user, loading, logout}}>
      {!loading && children} {/* Affichez les enfants uniquement une fois le chargement terminé */}
    </UserContext.Provider>
  );
};