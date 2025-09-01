"use client";

import { insights } from "@/app/constants/HeroPage";
import Image from "next/image";
import React, { useState } from "react";

const Hero = () => {
  const [selectedTab, setSelectedTab] = useState("insights");

  return (
    <div className="min-h-screen">
      {/* Hero video section */}
      <section className="relative w-full h-[550px] md:h-[400px] rounded-br-[80px] md:rounded-br-[60px]">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/videos/bg.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="z-10 relative flex flex-col items-start pt-10 justify-center md:h-[80%] px-6 text-white">
          <h1 className="text-4xl md:text-5xl font-light leading-tight">
            Resilience insights
          </h1>
          <p className="mt-4 max-w-2xl text-base md:text-md">
            In recent years, the world we live in has seen disruptions,
            unexpected events and crises that showed just how interconnected and
            fragile international supply chains are.
          </p>
          <h1 className="py-5">
            How can one be resilient enough? How can business stay strong?
          </h1>
          <div className="mt-6 flex flex-wrap md:flex-row gap-4 justify-center">
            <button className="px-2 py-2 bg-transparent w-full md:w-[220px] border border-white rounded-lg hover:bg-white/10 hover:text-white transition">
              View logistics insights
            </button>
            <button className="px-2 py-2 bg-transparent w-full md:w-[220px] border border-white rounded-lg hover:bg-white/10 transition">
              Find out how we can help
            </button>
          </div>
        </div>
      </section>

      {/* Sticky Tabs */}
      <section className="px-4 md:px-8">
        {/* The sticky heading container. Use position: sticky so it becomes fixed when it reaches the top of the viewport. top should equal navbar height (4rem). */}
        <div className="mt-6">
          <div className="sticky top-14 md:top-28 z-20 bg-white">
            {/* Add a little inner wrapper with border and background to match the site look */}
            <div className="py-4 md:py-4 bg-white  border-gray-200">
              {/* Mobile: Dropdown */}
              <div className="md:hidden">
                <select
                  value={selectedTab}
                  onChange={(e) => setSelectedTab(e.target.value)}
                  className="w-full outline-none rounded-md px-3 py-2"
                >
                  <option value="insights">Logistics insights</option>
                  <option value="help">How we help</option>
                </select>
              </div>
              <div className="hidden md:flex space-x-8 relative border-b-1 border-gray-300">
                <button
                  onClick={() => setSelectedTab("insights")}
                  className={`relative py-3 text-[16px] ${
                    selectedTab === "insights"
                      ? "text-black after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:bg-black"
                      : ""
                  }`}
                >
                  Logistics insights
                </button>
                <button
                  onClick={() => setSelectedTab("help")}
                  className={`relative py-2 text-[16px] ${
                    selectedTab === "help"
                      ? "  after:absolute after:bottom-0  after:left-0 after:h-[3px] after:w-full after:bg-black"
                      : ""
                  }`}
                >
                  How we help
                </button>
              </div>

              {/* <div className="pb-4 space-x-5">
                <button className="text-[16px] ">Logistics insights</button>
                <button className="text-[16px]">How we help</button>
              </div> */}
              <div className="mt-1 md:hidden h-0.5 w-full bg-transparent">
                <div className="w-full max-w-full h-0.5 bg-gray-900/10" />
              </div>
            </div>
          </div>

          {/* Content below the sticky heading - scrolls under the heading */}
          <div className="pt-6 pb-24">
            <h4 className="text-xl font-semibold">Latest insights</h4>
            <p className="text-gray-600 mt-2 max-w-2xl">
              Here are the most recent articles, trends and research on
              resilience within logistics.
            </p>
            <section className="px-1 py-12">
              <div className="grid md:grid-cols-4 auto-rows-[200px] gap-6">
                {insights.map((item) => (
                  <div
                    key={item.id}
                    className={`relative rounded-xl overflow-hidden shadow-md ${item.className}`}
                  >
                    {/* Image */}
                    <img
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />

                    {/* Black Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                    {/* Text Content */}
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <p className="text-xs font-semibold">
                        {item.tag} • {item.date}
                      </p>
                      <h3 className="text-sm md:text-base font-bold">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              {/* Button */}
              <div className="text-center mt-6">
                <button className="px-6 py-2 border rounded-full text-sm font-medium hover:bg-gray-100">
                  View All
                </button>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
