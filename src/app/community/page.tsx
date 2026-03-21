"use client";

import Image from "next/image";
import { MessageSquare, Heart, Share2, Search, ArrowUpRight } from "lucide-react";

export default function Community() {
    const mockPosts = [
        { title: "Tips for propagating Monstera?", author: "Jane Botanist", time: "2h ago", likes: 24, replies: 12, tag: "Propagation", img: "/apple.jpg" },
        { title: "Is this yellowing on my Philodendron normal?", author: "Mark Grower", time: "5h ago", likes: 8, replies: 34, tag: "Diagnosis", img: "/coffee.jpg" },
    ];

    return (
        <main className="min-h-screen bg-stone-50 pt-[110px] pb-20">
            <div className="container mx-auto px-6 max-w-6xl">

                {/* Header Section */}
                <div className="text-center mb-16 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 font-poppins relative z-10">Plant Doctors Community</h1>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg relative z-10">Discuss diseases, share your recoveries, and ask verified experts for help worldwide.</p>

                    <div className="max-w-xl mx-auto mt-10 relative group z-10">
                        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400 group-hover:text-green-500 transition-colors">
                            <Search className="w-5 h-5" />
                        </div>
                        <input
                            type="text"
                            className="w-full pl-14 pr-6 py-4 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all shadow-[0_5px_20px_rgba(0,0,0,0.03)] font-medium text-gray-700"
                            placeholder="Search discussions, tags, or plant types..."
                        />
                        <button className="absolute right-2 top-2 bottom-2 bg-green-700 hover:bg-green-800 text-white px-6 rounded-full font-bold shadow-md transition-colors">Ask Question</button>
                    </div>
                </div>

                {/* Content Feed */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    <div className="lg:col-span-2 space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900 font-poppins mb-6">Trending Discussions</h2>

                        {mockPosts.map((post, i) => (
                            <div key={i} className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all duration-300 border border-green-50/50 flex flex-col md:flex-row gap-6 cursor-pointer group">
                                <div className="relative w-full md:w-48 h-48 rounded-2xl overflow-hidden bg-gray-100 flex-shrink-0">
                                    <Image src={post.img} alt="Post image" fill sizes="(max-width: 768px) 100vw, 192px" className="object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => e.currentTarget.style.display = "none"} />
                                </div>

                                <div className="flex flex-col justify-between flex-1 py-1">
                                    <div>
                                        <div className="flex gap-2 mb-3">
                                            <span className="bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full">{post.tag}</span>
                                            <span className="text-gray-400 text-xs font-medium px-2 py-1">{post.time}</span>
                                        </div>
                                        <h3 className="text-[22px] font-bold text-gray-900 font-poppins mb-2 group-hover:text-green-700 transition-colors">{post.title}</h3>
                                        <p className="text-gray-500 text-sm mb-4 line-clamp-2">I have been growing this plant for 3 months, and suddenly there are weird bright spots along the leaves...</p>
                                    </div>

                                    <div className="flex justify-between items-center border-t border-gray-100 pt-4 mt-2">
                                        <span className="font-bold text-sm text-gray-700 flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-400 to-green-500 text-white flex items-center justify-center text-xs">{post.author.charAt(0)}</div>
                                            {post.author}
                                        </span>

                                        <div className="flex gap-4 text-gray-400 font-medium text-sm">
                                            <span className="flex items-center gap-1.5 hover:text-red-500 transition-colors"><Heart className="w-4 h-4" /> {post.likes}</span>
                                            <span className="flex items-center gap-1.5 hover:text-blue-500 transition-colors"><MessageSquare className="w-4 h-4" /> {post.replies}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <button className="w-full py-4 text-center text-green-700 font-bold bg-green-50 rounded-2xl border-2 border-dashed border-green-200 hover:bg-green-100 hover:border-green-300 transition-all">Load More Discussions</button>
                    </div>

                    <aside className="space-y-8">
                        <div className="bg-gradient-to-br from-green-800 to-emerald-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                            <div className="absolute -right-10 -bottom-10 opacity-10"><Search className="w-48 h-48" /></div>
                            <h3 className="text-2xl font-bold font-poppins mb-3 relative z-10">Expert Panel Q&A</h3>
                            <p className="text-green-100 text-sm leading-relaxed mb-6 max-w-[90%] relative z-10">Join our weekly live session with verified botanists to ask your hardest plant care questions.</p>
                            <button className="bg-white text-green-900 font-bold px-6 py-3 rounded-xl w-full hover:bg-green-50 transition-colors shadow-lg shadow-black/20 relative z-10 flex justify-center items-center gap-2">Join Next Session <ArrowUpRight className="w-4 h-4" /></button>
                        </div>

                        <div className="bg-white rounded-3xl p-8 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-5 font-poppins">Popular Topics</h3>
                            <div className="flex flex-wrap gap-2">
                                {["Yellow Leaves", "Monsteras", "Pest Control", "Overwatering", "Indoor Light", "Fertilizer Tips"].map((t, i) => (
                                    <span key={i} className="bg-gray-50 text-gray-600 hover:bg-green-50 hover:text-green-700 border border-gray-200 hover:border-green-200 transition-all cursor-pointer font-medium text-sm px-4 py-2 rounded-xl">#{t}</span>
                                ))}
                            </div>
                        </div>
                    </aside>

                </div>
            </div>
        </main>
    );
}
