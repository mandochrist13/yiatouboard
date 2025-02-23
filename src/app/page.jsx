"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { Auth } from "@/lib/firebase";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const provider = new GoogleAuthProvider();
  const router = useRouter();


  const handleLogin = async () => {

    console.log( `user email:${email} \n password: ${password}`)
    try {
      signInWithEmailAndPassword(Auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          
          console.log('user :', user.accessToken)
          Cookies.set("authToken", user.accessToken, { expires: 7, secure: true });
          console.log("Connexion réussie, redirection vers /dashboard...");
          router.push("/dashboard");
          // ...
        })
        .catch((error) => {
          console.log('Erreur :', error)
        });

    } catch (error) {
      console.log("Erreur de connexion:", error);
    }
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (user) => {
      if (user) {
        router.push("/dashboard");  // Redirige si l'utilisateur est déjà connecté
      }
    });

    return () => unsubscribe();  // Nettoyage de l'écouteur d'événements
  }, [router]);



  const handleGoogleLogin = () => {
    signInWithPopup(Auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;  // Vérifier si la valeur est définie
        const user = result.user;

        console.log("Utilisateur Google connecté:", user);
        console.log("Token:", token);
        Cookies.set("authToken", token, { expires: 7, secure: true });


        router.push("/dashboard");
      })
      .catch((error) => {
        console.log("Erreur d'authentification Google:", error);
      });
  };







  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white">
      {/* Section gauche */}
      <div className="w-full md:w-1/2 px-6 md:px-16 lg:px-32 py-12 flex flex-col space-y-6 bg-white shadow-md">
        <div className="auth-logo mb-6 flex justify-start space-x-4">
          <a href="/">
            <Image src="/logo.png" alt="Logo dark" width={1000} height={1000} className="h-8 w-32" />
          </a>
        </div>
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Se connecter</h1>
        <p className="text-gray-600 text-center md:text-start">Entrez votre email et mot de passe pour accéder au panneau d&apos;administration.</p>
        <div className="w-full max-w-sm mx-auto md:mx-0">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Entrez votre email"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Entrez votre mot de passe"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-5">
            <button
              type="submit"
              onClick={handleLogin}
              className="w-full py-2 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none"
            >
              Se connecter
            </button>
            <p>ou</p>
            <div className="flex gap-5">
              <button onClick={handleGoogleLogin}>
                <Icon icon="devicon:google" width="28" height="28" />
              </button>
              <button>
                <Icon icon="logos:facebook" width="28" height="28" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Section droite */}
      <div className="hidden md:flex w-full md:w-1/2 h-full items-center justify-center bg-white">
        <div className="w-full max-w-lg p-4 md:p-6">
          <Image src="/img-10.jpg" priority alt="Image description" width={1000} height={1000} className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
}
