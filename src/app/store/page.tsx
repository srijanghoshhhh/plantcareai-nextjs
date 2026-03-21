"use client";

import Image from "next/image";
import { ShoppingCart, Star, Filter } from "lucide-react";

export default function Store() {
    const products = [
        { title: "Premium Organic Fertilizer", price: "$24.99", rating: 4.8, img: "/Kumra.jpg" },
        { title: "Smart Soil Moisture Meter", price: "$18.50", rating: 4.5, img: "/carrot.jpg" },
        { title: "Indoor Plant Grow Light LED", price: "$45.00", rating: 4.9, img: "/apple.jpg" },
        { title: "Ceramic Minimalist Pot (M)", price: "$32.00", rating: 4.7, img: "/orange.jpg" },
    ];

    return (
        <main className="min-h-screen bg-stone-50 pt-[110px] pb-20">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Header & Filters */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 bg-white p-6 md:p-8 rounded-[30px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-green-900 font-poppins">Care Store</h1>
                        <p className="text-gray-500 mt-2 font-medium">Expert-curated tools and supplements for your garden.</p>
                    </div>

                    <div className="flex gap-4 w-full md:w-auto">
                        <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700 font-bold px-6 py-3.5 rounded-2xl transition-colors">
                            <Filter className="w-5 h-5" /> Filter
                        </button>
                        <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white font-bold px-6 py-3.5 rounded-2xl transition-colors shadow-lg shadow-green-700/20">
                            <ShoppingCart className="w-5 h-5" /> Cart (0)
                        </button>
                    </div>
                </div>

                {/* Featured Store Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((item, i) => (
                        <div key={i} className="bg-white rounded-[32px] p-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-transparent hover:border-green-100 transition-all duration-300 group cursor-pointer flex flex-col">

                            <div className="relative w-full aspect-square bg-gray-100 rounded-3xl overflow-hidden mb-5">
                                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-black tracking-wider text-green-700 border border-gray-100 shadow-sm">
                                    POPULAR
                                </div>
                                <Image src={item.img} alt={item.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-500 ease-out" onError={(e) => e.currentTarget.style.display = "none"} />

                                {/* Quick Add Overlay */}
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <button className="bg-white text-green-900 font-bold px-6 py-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 shadow-xl">
                                        <ShoppingCart className="w-4 h-4" /> Quick Add
                                    </button>
                                </div>
                            </div>

                            <div className="px-2 pb-2 mt-auto">
                                <div className="flex justify-between items-start gap-4 mb-2">
                                    <h3 className="text-lg font-bold text-gray-900 font-poppins leading-tight">{item.title}</h3>
                                    <span className="text-xl font-black text-green-700 bg-green-50 px-3 py-1.5 rounded-xl border border-green-100">{item.price}</span>
                                </div>

                                <div className="flex items-center gap-1.5 text-sm text-gray-500 font-medium mt-3">
                                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                    {item.rating} <span className="text-gray-300 ml-1">|</span> <span className="underline ml-1 cursor-pointer">120 reviews</span>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </main>
    );
}
