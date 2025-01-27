"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Chart, registerables } from "chart.js";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

Chart.register(...registerables);

const TopPagesWithChart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleLast48HoursFilter = () => {
    const now = new Date();
    const filteredPages = generateProducts().filter((page) => {
      const pageDate = new Date(page.date);
      const diffInHours = (now - pageDate) / (1000 * 60 * 60); // Différence en heures
      return diffInHours <= 48;
    });
    setPages(filteredPages);
  };

  const chartRef = useRef(null);

  const generateProducts = () => {
    const products = [];
    const statuses = ["Commandé", "En attente", "En cours"];
    const badgeColors = {
      Commandé: "bg-green-100 text-green-600",
      "En attente": "bg-red-100 text-red-600",
      "En cours": "bg-yellow-100 text-yellow-600",
    };

    for (let i = 0; i < 10; i++) {
      const randomDate = new Date();
      randomDate.setDate(randomDate.getDate() - i); // Produits sur 10 jours

      products.push({
        path: `Produit ${i + 1}`,
        views: Math.floor(Math.random() * 100) + 1,
        exitRate: statuses[i % statuses.length],
        badgeColor: badgeColors[statuses[i % statuses.length]],
        date: randomDate.toISOString().split("T")[0],
      });
    }

    return products;
  };

  const [pages, setPages] = useState(generateProducts());
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // ascending or descending

  const handleSort = () => {
    const sortedPages = [...pages].sort((a, b) =>
      sortOrder === "asc" ? a.views - b.views : b.views - a.views
    );
    setPages(sortedPages);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleStatusChange = (index, newStatus) => {
    const updatedPages = [...pages];
    updatedPages[index].exitRate = newStatus;
    updatedPages[index].badgeColor =
      newStatus === "Commandé"
        ? "bg-green-100 text-green-600"
        : newStatus === "En cours"
          ? "bg-yellow-100 text-yellow-600"
          : "bg-red-100 text-red-600";
    setPages(updatedPages);
  };

  const handleDateFilter = () => {
    const filteredPages = generateProducts().filter((page) => {
      const pageDate = new Date(page.date);
      const start = startDate ? new Date(startDate) : null;
      const end = endDate ? new Date(endDate) : null;

      return (!start || pageDate >= start) && (!end || pageDate <= end);
    });
    setPages(filteredPages);
  };

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const mixedChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: pages.map((page) => page.path.split("/").pop()),
        datasets: [
          {
            type: "bar",
            label: "Produits",
            data: pages.map((page) => page.views),
            backgroundColor: "rgb(255, 109, 46)",
          },
        ],
      },
      options: {
        interaction: { mode: "nearest", axis: "x" },
        responsive: true,
        plugins: {
          legend: { position: "bottom" },
          title: { display: false },
        },
        scales: {
          x: {
            ticks: { color: "rgb(70, 70, 70)", font: { size: 12 } },
            grid: { display: false },
          },
          y: {
            beginAtZero: true,
            ticks: { color: "rgb(50, 50, 50)", font: { size: 12 } },
            grid: { color: "rgba(100, 100, 200, 0.3)", lineWidth: 0.2 },
          },
        },
      },
    });

    return () => {
      mixedChart.destroy();
    };
  }, [pages]);

  return (
    <div className="p-8 flex flex-col gap-10">
      {/* Graphique */}
      <div className="w-[60%]">
        <canvas ref={chartRef} className=""></canvas>
      </div>
      {/* Tableau avec filtres */}
      <div className="">
        <div className="shadow-md bg-white rounded-lg">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h4 className="text-lg font-semibold">Global order</h4>

            <Popover>
              <PopoverTrigger>⋮</PopoverTrigger>
              <PopoverContent><div className="">
                <h4 className="text-lg font-semibold mb-4">Filtres et Tri</h4>
                <div className="flex flex-col gap-4">
                  <button
                    onClick={handleLast48HoursFilter}
                    className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
                  >
                    Dernières 48h
                  </button>
                  <div className="flex gap-2">
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="border px-2 py-1 rounded text-sm w-full"
                    />
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="border px-2 py-1 rounded text-sm w-full"
                    />
                  </div>
                  <button
                    onClick={handleDateFilter}
                    className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
                  >
                    Filtrer par date
                  </button>
                  <button
                    onClick={handleSort}
                    className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
                  >
                    Trier par quantité ({sortOrder === "asc" ? "⬆️" : "⬇️"})
                  </button>
                </div>
              </div></PopoverContent>
            </Popover>

            {/* Modal */}
            {isModalOpen && (
              <div className="relative bg-white p-6 rounded-lg shadow-lg w-96 z-50 border">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 text-xl absolute top-4 right-4"
                >
                  ✕
                </button>
                <h4 className="text-lg font-semibold mb-4">Filtres et Tri</h4>
                <div className="flex flex-col gap-4">
                  <button
                    onClick={handleLast48HoursFilter}
                    className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
                  >
                    Dernières 48h
                  </button>
                  <div className="flex gap-2">
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="border px-2 py-1 rounded text-sm w-full"
                    />
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="border px-2 py-1 rounded text-sm w-full"
                    />
                  </div>
                  <button
                    onClick={handleDateFilter}
                    className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
                  >
                    Filtrer par date
                  </button>
                  <button
                    onClick={handleSort}
                    className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
                  >
                    Trier par quantité ({sortOrder === "asc" ? "⬆️" : "⬇️"})
                  </button>
                </div>
              </div>
            )}
          </div>
          <div>
            <table className="table-auto w-full text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-gray-600 px-4 py-2">Produit</th>
                  <th className="text-gray-600 text-center px-1 py-2">
                    Quantité
                  </th>
                  <th className="text-gray-600 px-4 py-2">Statut</th>
                  <th className="text-gray-600 px-4 py-2">Date</th>
                  <th className="text-gray-600 px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {pages.map((page, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition-all duration-200"
                  >
                    <td className=" p-2 text-left">
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
                          <a
                            href="#"
                            className="text-blue-500 hover:underline text-sm"
                          >
                            {page.path}
                          </a>
                        </div>
                      </div>
                    </td>
                    <td className="px-1 py-2 text-center text-sm text-gray-800">
                      {page.views}
                    </td>
                    <td className="px-4 py-2">
                      <span
                        className={`text-sm px-2 py-1 rounded-full ${page.badgeColor}`}
                      >
                        {page.exitRate}
                      </span>
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-800">
                      {page.date}
                    </td>
                    <td className="px-4 py-2">
                      <select
                        onChange={(e) =>
                          handleStatusChange(index, e.target.value)
                        }
                        className="border px-2 py-1 rounded text-sm"
                        defaultValue={page.exitRate}
                      >
                        <option value="Commandé">Commandé</option>
                        <option value="En cours">En cours</option>
                        <option value="En attente">En attente</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPagesWithChart;
