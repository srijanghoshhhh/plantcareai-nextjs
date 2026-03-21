"use client";

import Image from "next/image";
import { Plus, Leaf, Droplets, Sun, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export default function MyPlants() {
    const [userName, setUserName] = useState<string | null>(null);

    useEffect(() => {
        const storedName = localStorage.getItem("loggedInUser");
        if (storedName) {
            setUserName(storedName);
        }
    }, []);
    const mockPlants = [
        { name: "Monstera Deliciosa", health: 95, status: "Healthy", image: "/apple.jpg" }, // Fallback to generic image names if needed
        { name: "Fiddle Leaf Fig", health: 70, status: "Needs Water", image: "/coffee.jpg" },
        { name: "Snake Plant", health: 100, status: "Excellent", image: "/orange.jpg" },
        { name: "Calathea Orbifolia", health: 45, status: "Browning Edges", image: "/tomato.jpg" }
    ];

    return (
        <main className="min-h-screen bg-stone-50 pt-[100px] pb-20">
            <div className="container mx-auto px-6 max-w-[1300px]">

                {/* Welcome Back Banner */}
                {userName && (
                    <div className="mb-10 relative overflow-hidden bg-gradient-to-r from-green-800 via-emerald-700 to-green-900 rounded-3xl p-8 md:p-10 shadow-[0_20px_50px_rgba(21,128,61,0.25)] border border-green-600/30 group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full mix-blend-overlay filter blur-[40px] animate-pulse"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-400/20 rounded-full mix-blend-overlay filter blur-[30px] animate-pulse delay-700"></div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-semibold mb-4">
                                    <Sparkles className="w-4 h-4 text-emerald-300" />
                                    <span>Premium Member</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-green-100 to-emerald-50 drop-shadow-sm font-poppins tracking-tight mb-2">
                                    Welcome back, <span className="text-emerald-300">{userName}</span>!
                                </h2>
                                <p className="text-green-50/80 text-lg max-w-xl font-medium">
                                    Your personal botanical paradise awaits. Let&apos;s check on your green companions today.
                                </p>
                            </div>
                            <div className="hidden md:flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-inner group-hover:scale-105 transition-transform duration-500">
                                <Leaf className="w-12 h-12 text-emerald-300 animate-bounce" style={{animationDuration: '3s'}} />
                            </div>
                        </div>
                    </div>
                )}

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 border-b border-green-200 pb-6 gap-6">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 font-poppins tracking-tight">My Garden</h1>
                        <p className="text-gray-500 mt-2 text-lg">Keep track of your plant health, AI scans, and watering schedules.</p>
                    </div>
                    <button className="bg-green-700 hover:bg-green-800 text-white px-7 py-3.5 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 shadow-[0_10px_20px_rgba(21,128,61,0.2)] hover:shadow-[0_15px_30px_rgba(21,128,61,0.3)] hover:-translate-y-1">
                        <Plus className="w-5 h-5" /> Add New Plant
                    </button>
                </div>

                {/* Plant Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {mockPlants.map((plant, i) => (
                        <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 group border border-green-50 cursor-pointer block transform hover:-translate-y-1.5">
                            <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                                {/* Decorative background incase image fails */}
                                <div className="absolute inset-0 bg-green-100 flex items-center justify-center"><Leaf className="text-green-300 w-16 h-16 opacity-50" /></div>
                                <Image src={plant.image} alt={plant.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw" className="object-cover relative z-10 group-hover:scale-110 transition-transform duration-700 ease-out" onError={(e) => e.currentTarget.style.display = 'none'} />
                                <div className={`absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold shadow-sm border ${plant.health > 80 ? 'text-green-700 border-green-200' : plant.health > 50 ? 'text-yellow-600 border-yellow-200' : 'text-red-600 border-red-200'}`}>
                                    {plant.status}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-[22px] font-bold text-green-900 font-poppins mb-1 tracking-tight truncate">{plant.name}</h3>
                                <p className="text-sm text-gray-400 mb-5 font-medium">Last AI scan: {i + 1} days ago</p>

                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Health Score</span>
                                    <span className="text-xs font-bold text-green-700">{plant.health}%</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-2.5 mb-6 overflow-hidden">
                                    <div className={`h-2.5 rounded-full ${plant.health > 80 ? 'bg-green-500' : plant.health > 50 ? 'bg-yellow-400' : 'bg-red-500'}`} style={{ width: `${plant.health}%` }}></div>
                                </div>

                                <div className="flex gap-2">
                                    <div className="flex-1 bg-blue-50 text-blue-700 text-xs font-bold py-2 rounded-xl flex items-center justify-center gap-1.5 border border-blue-100">
                                        <Droplets className="w-3.5 h-3.5" /> Water
                                    </div>
                                    <div className="flex-1 bg-yellow-50 text-yellow-700 text-xs font-bold py-2 rounded-xl flex items-center justify-center gap-1.5 border border-yellow-100">
                                        <Sun className="w-3.5 h-3.5" /> Light
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
