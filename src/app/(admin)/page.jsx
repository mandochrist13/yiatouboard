"use client";

import { Icon } from "@iconify/react";
import Chart from "chart.js/auto";

import { useEffect, useRef } from "react";


export default function Test() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const mixedChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            type: "bar",
            label: "Bar Dataset",
            data: [30, 60, 45, 69, 49, 61, 42, 44, 78, 52, 63, 67],
            backgroundColor: "rgb(255, 109, 46)",
          },
          {
            type: "line",
            label: "Line Dataset",
            data: [8, 12, 7, 17, 21, 11, 5, 9, 7, 29, 12, 35],
            borderColor: "rgb(33, 196, 93)",
            borderWidth: 2,
          },
        ],
      },

      options: {
        interaction: {
          mode: "nearest", // Mode d'interaction ('index', 'nearest', etc.)
          axis: "x", // 'x', 'y', ou 'xy'
        },
        responsive: true,
        plugins: {
          legend: { position: "bottom", boxWidth: 20 },
          title: { display: false, text: "Mixed Chart Exam" },
        },
        scales: {
          x: {
            ticks: {
              color: "rgb(70, 70, 70)",
              font: {
                size: 12,
              },
            },
            grid: {
              display: false, // Désactive les lignes de grille
            },
          },
          y: {
            beginAtZero: true, // Commencer l'échelle à zéro
            ticks: {
              color: "rgb(50, 50, 50)", // Couleur des étiquettes
              font: {
                size: 12, // Taille de la police
              },
            },
            grid: {
              color: "rgba(100, 100, 200, 0.3)", // Couleur des lignes de grille
              lineWidth: 0.2, // Épaisseur des lignes
            },
          },
        },
      },
    });

    return () => {
      mixedChart.destroy(); // Détruire le graphique lors du démontage du composant
    };
  }, []);

  return (
    <div>
      {/* <!-- Start Container Fluid --> */}
      <div className="px-10 space-y-10 lg:px-20 bg-[#f7f9fa]">
        {/* <!-- Start here.... --> */}
        <div className="row">
          <div className="col-xxl-5">
            <div className="row">
              <div className="col-12">
                <div className="bg-[#ffe3d6] text-[14px] text-[#7a2b31] p-3 rounded-xl mb-3">
                  We regret to inform you that our server is currently
                  experiencing technical difficulties.
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="bg-white rounded-lg ">
                  <div className="rounded-lg overflow-hidden">
                    <div className="card-body">
                      <div className="flex p-6 justify-between items-center">
                        <div className="col-6">
                          <div className="p-3 bg-[#ffded1] rounded-xl">
                            <Icon
                              icon="solar:cart-5-bold-duotone"
                              className="avatar-title text-4xl text-[#ff6d2e]"
                            />
                          </div>
                        </div>
                        {/* <!-- end col --> */}
                        <div className="flex flex-col text-end">
                          <p className="text-gray-600 mb-0">Total Orders</p>
                          <h3 className="text-[#313b5e] text-2xl mt-1 mb-0">
                            13, 647
                          </h3>
                        </div>
                        {/* <!-- end col --> */}
                      </div>
                      {/* <!-- end row--> */}
                    </div>
                    {/* <!-- end card body --> */}
                    <div className="card-footer px-6 py-2 bg-[#e1e3e6]">
                      <div className="flex items-center justify-between">
                        <div className="space-x-2">
                          <span className="text-green-600">
                            <i className="bx bxs-up-arrow fs-12"></i> 2.3%
                          </span>
                          <span className="text-gray-600 text-xs">
                            Last Week
                          </span>
                        </div>
                        <a
                          href="#!"
                          className="text-gray-600 text-xs font-semibold "
                        >
                          View More
                        </a>
                      </div>
                    </div>
                    {/* <!-- end card body --> */}
                  </div>
                  {/* <!-- end card --> */}
                </div>
                {/* <!-- end col --> */}
                <div className="bg-white rounded-lg ">
                  <div className="rounded-lg overflow-hidden">
                    <div className="card-body">
                      <div className="flex p-6 justify-between items-center">
                        <div className="col-6">
                          <div className="p-3 bg-[#ffded1] rounded-xl">
                            <Icon
                              icon="cil:badge"
                              className="avatar-title text-4xl text-[#ff6d2e]"
                            />
                          </div>
                        </div>
                        {/* <!-- end col --> */}
                        <div className="flex flex-col text-end">
                          <p className="text-gray-600 mb-0">New Leads</p>
                          <h3 className="text-[#313b5e] text-2xl mt-1 mb-0">
                            9, 526{" "}
                          </h3>
                        </div>
                        {/* <!-- end col --> */}
                      </div>
                      {/* <!-- end row--> */}
                    </div>
                    {/* <!-- end card body --> */}
                    <div className="card-footer px-6 py-2 bg-[#e1e3e6]">
                      <div className="flex items-center justify-between">
                        <div className="space-x-2">
                          <span className="text-green-600">
                            <i className="bx bxs-up-arrow fs-12"></i> 8.1%
                          </span>
                          <span className="text-gray-600 text-xs">
                            Last Month
                          </span>
                        </div>
                        <a
                          href="#!"
                          className="text-gray-600 text-xs font-semibold "
                        >
                          View More
                        </a>
                      </div>
                    </div>
                    {/* <!-- end card body --> */}
                  </div>
                  {/* <!-- end card --> */}
                </div>
                {/* <!-- end col --> */}
                <div className="bg-white rounded-lg ">
                  <div className="rounded-lg overflow-hidden">
                    <div className="card-body">
                      <div className="flex p-6 justify-between items-center">
                        <div className="col-6">
                          <div className="p-3 bg-[#ffded1] rounded-xl">
                            <Icon
                              icon="mingcute:backpack-line"
                              className="avatar-title text-4xl text-[#ff6d2e]"
                            />
                          </div>
                        </div>
                        {/* <!-- end col --> */}
                        <div className="flex flex-col text-end">
                          <p className="text-gray-600 mb-0">Deals</p>
                          <h3 className="text-[#313b5e] text-2xl mt-1 mb-0">
                            976{" "}
                          </h3>
                        </div>
                        {/* <!-- end col --> */}
                      </div>
                      {/* <!-- end row--> */}
                    </div>
                    {/* <!-- end card body --> */}
                    <div className="card-footer px-6 py-2 bg-[#e1e3e6]">
                      <div className="flex items-center justify-between">
                        <div className="space-x-2">
                          <span className="text-red-600">
                            <i className="bx bxs-up-arrow fs-12"></i> 0.3%
                          </span>
                          <span className="text-gray-600 text-xs">
                            Last Month
                          </span>
                        </div>
                        <a
                          href="#!"
                          className="text-gray-600 text-xs font-semibold "
                        >
                          View More
                        </a>
                      </div>
                    </div>
                    {/* <!-- end card body --> */}
                  </div>
                  {/* <!-- end card --> */}
                </div>
                {/* <!-- end col --> */}
                <div className="bg-white rounded-lg ">
                  <div className="rounded-lg overflow-hidden">
                    <div className="card-body">
                      <div className="flex p-6 justify-between items-center">
                        <div className="col-6">
                          <div className="p-3 bg-[#ffded1] rounded-xl">
                            <Icon
                              icon="hugeicons:dollar-circle"
                              className="avatar-title text-4xl text-[#ff6d2e]"
                            />
                          </div>
                        </div>
                        {/* <!-- end col --> */}
                        <div className="flex flex-col text-end">
                          <p className="text-gray-600 mb-0">Booked Revenue</p>
                          <h3 className="text-[#313b5e] text-2xl mt-1 mb-0">
                            $123.6k{" "}
                          </h3>
                        </div>
                        {/* <!-- end col --> */}
                      </div>
                      {/* <!-- end row--> */}
                    </div>
                    {/* <!-- end card body --> */}
                    <div className="card-footer px-6 py-2 bg-[#e1e3e6]">
                      <div className="flex items-center justify-between">
                        <div className="space-x-2">
                          <span className="text-green-600">
                            <i className="bx bxs-up-arrow fs-12"></i> 10.6%
                          </span>
                          <span className="text-gray-600 text-xs">
                            Last Month
                          </span>
                        </div>
                        <a
                          href="#!"
                          className="text-gray-600 text-xs font-semibold "
                        >
                          View More
                        </a>
                      </div>
                    </div>
                    {/* <!-- end card body --> */}
                  </div>
                  {/* <!-- end card --> */}
                </div>
              </div>

              {/* <!-- end col --> */}
            </div>
            {/* <!-- end row --> */}
          </div>
          {/* <!-- end col --> */}
          

          {/* <!-- end col --> */}
        </div>
        {/* <!-- end row --> */}
        <div className="bg-white p-10 rounded-xl">
          <h1 className="text-black mb-5">Performance</h1>
            <canvas ref={chartRef} />
          </div>

      </div>
    </div>
  );
}
