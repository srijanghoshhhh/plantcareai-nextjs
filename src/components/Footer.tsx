import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-green-950 text-white relative overflow-hidden pt-20 border-t border-green-900 shadow-[0_-20px_50px_rgba(20,83,45,0.05)]">
            {/* Abstract Design Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-900 rounded-full mix-blend-screen filter blur-[120px] opacity-40 pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-emerald-800 rounded-full mix-blend-screen filter blur-[100px] opacity-30 pointer-events-none"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    {/* Brand Column */}
                    <div className="flex flex-col gap-6 lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="relative h-12 w-12 bg-white rounded-full flex items-center justify-center p-1 border-[3px] border-emerald-500 shadow-lg">
                                <Image src="/logo.png" alt="PlantCare AI logo" fill sizes="48px" className="object-cover rounded-full" />
                            </div>
                            <span className="text-2xl font-black tracking-tight font-poppins text-white drop-shadow-md">PlantCare AI</span>
                        </Link>
                        <p className="text-green-200/80 leading-relaxed text-sm font-medium">
                            We leverage cutting-edge artificial intelligence to diagnose, monitor, and treat the flora you love. Build your perfect garden alongside certified botanists.
                        </p>
                        <div className="flex items-center gap-4 mt-2">
                            <Link href="#" className="w-10 h-10 rounded-full bg-green-900 border border-green-800 flex items-center justify-center hover:bg-emerald-600 hover:border-emerald-500 hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-300 transform hover:-translate-y-1"><Facebook className="w-4 h-4" /></Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-green-900 border border-green-800 flex items-center justify-center hover:bg-emerald-600 hover:border-emerald-500 hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-300 transform hover:-translate-y-1"><Twitter className="w-4 h-4" /></Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-green-900 border border-green-800 flex items-center justify-center hover:bg-emerald-600 hover:border-emerald-500 hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-300 transform hover:-translate-y-1"><Instagram className="w-4 h-4" /></Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-green-900 border border-green-800 flex items-center justify-center hover:bg-emerald-600 hover:border-emerald-500 hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-300 transform hover:-translate-y-1"><Linkedin className="w-4 h-4" /></Link>
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div className="flex flex-col gap-5 lg:ml-10 text-sm font-medium">
                        <h3 className="text-white font-bold text-lg font-poppins mb-1 tracking-wide uppercase opacity-90">Quick Links</h3>
                        <Link href="/" className="text-green-300/80 hover:text-emerald-400 hover:translate-x-1 transition-all duration-300 flex items-center gap-2">• <span className="border-b border-transparent hover:border-emerald-400 pb-0.5">Home & Scanner</span></Link>
                        <Link href="/myplants" className="text-green-300/80 hover:text-emerald-400 hover:translate-x-1 transition-all duration-300 flex items-center gap-2">• <span className="border-b border-transparent hover:border-emerald-400 pb-0.5">My Plant Dashboard</span></Link>
                        <Link href="/store" className="text-green-300/80 hover:text-emerald-400 hover:translate-x-1 transition-all duration-300 flex items-center gap-2">• <span className="border-b border-transparent hover:border-emerald-400 pb-0.5">Care Store</span></Link>
                        <Link href="/community" className="text-green-300/80 hover:text-emerald-400 hover:translate-x-1 transition-all duration-300 flex items-center gap-2">• <span className="border-b border-transparent hover:border-emerald-400 pb-0.5">Global Community</span></Link>
                        <Link href="#" className="text-green-300/80 hover:text-emerald-400 hover:translate-x-1 transition-all duration-300 flex items-center gap-2">• <span className="border-b border-transparent hover:border-emerald-400 pb-0.5">Expert Panel Consults</span></Link>
                    </div>

                    {/* Legal & Support Column */}
                    <div className="flex flex-col gap-5 text-sm font-medium">
                        <h3 className="text-white font-bold text-lg font-poppins mb-1 tracking-wide uppercase opacity-90">Legal & Support</h3>
                        <Link href="#" className="text-green-300/80 hover:text-emerald-400 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-green-300/80 hover:text-emerald-400 transition-colors">Terms of Service</Link>
                        <Link href="#" className="text-green-300/80 hover:text-emerald-400 transition-colors">FAQ</Link>
                        <Link href="#" className="text-green-300/80 hover:text-emerald-400 transition-colors">Refund Policy</Link>
                        <Link href="#" className="text-green-300/80 hover:text-emerald-400 transition-colors flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div> System Status</Link>
                    </div>

                    {/* Contact Details Column */}
                    <div className="flex flex-col gap-6 text-sm font-medium">
                        <h3 className="text-white font-bold text-lg font-poppins tracking-wide uppercase opacity-90">Contact Us</h3>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-4 items-start group">
                                <div className="w-10 h-10 rounded-full bg-green-900 border border-green-800 flex items-center justify-center flex-shrink-0 group-hover:border-emerald-500 transition-colors"><MapPin className="w-4 h-4 text-emerald-400" /></div>
                                <p className="text-green-300/80 pt-1 group-hover:text-green-100 transition-colors">123 Botanical Avenue,<br />Silicon Valley, CA 94025</p>
                            </div>
                            <div className="flex gap-4 items-center group cursor-pointer">
                                <div className="w-10 h-10 rounded-full bg-green-900 border border-green-800 flex items-center justify-center flex-shrink-0 group-hover:border-emerald-500 transition-colors"><Phone className="w-4 h-4 text-emerald-400" /></div>
                                <p className="text-green-300/80 group-hover:text-green-100 transition-colors">+1 (800) GROW-NOW</p>
                            </div>
                            <div className="flex gap-4 items-center group cursor-pointer">
                                <div className="w-10 h-10 rounded-full bg-green-900 border border-green-800 flex items-center justify-center flex-shrink-0 group-hover:border-emerald-500 transition-colors"><Mail className="w-4 h-4 text-emerald-400" /></div>
                                <p className="text-green-300/80 group-hover:text-green-100 transition-colors">support@plantcare.ai</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Banner */}
                <div className="border-t border-green-900 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-green-400/60 w-full mt-4">
                    <p>© {new Date().getFullYear()} PlantCare AI. All Rights Reserved.</p>
                    <p className="flex items-center gap-1.5">Designed with <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" /> & Deep AI</p>
                </div>

            </div>
        </footer>
    );
}
