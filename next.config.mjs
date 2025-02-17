/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: "/api/:path*", 
          destination: "http://localhost:3000/api/:path*", // Vérifie le bon port de ton API
        },
      ];
    },
  };
  
  export default nextConfig;
  