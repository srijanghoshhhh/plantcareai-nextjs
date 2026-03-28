import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black text-white relative overflow-hidden pt-24">
    {/* 🔥 TOP FADE (KEY FIX) */}
    <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>

    {/* Abstract Design Elements (Adjusted for dark theme) */}
    

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
                    We leverage cutting-edge artificial intelligence to diagnose, monitor, and treat the flora you love.
                </p>

                <div className="flex items-center gap-4 mt-2">
                    {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                        <Link key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-emerald-600 hover:border-emerald-500 hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-300 transform hover:-translate-y-1">
                            <Icon className="w-4 h-4" />
                        </Link>
                    ))}
                </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-5 lg:ml-10 text-sm font-medium">
                <h3 className="text-white font-bold text-lg font-poppins uppercase opacity-90">Quick Links</h3>
                <Link href="/" className="text-green-300/80 hover:text-emerald-400 transition-all">• Home & Scanner</Link>
                <Link href="/myplants" className="text-green-300/80 hover:text-emerald-400 transition-all">• My Plant Dashboard</Link>
                <Link href="/store" className="text-green-300/80 hover:text-emerald-400 transition-all">• Care Store</Link>
                <Link href="/community" className="text-green-300/80 hover:text-emerald-400 transition-all">• Global Community</Link>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-5 text-sm font-medium">
                <h3 className="text-white font-bold text-lg font-poppins uppercase opacity-90">Legal & Support</h3>
                <Link href="#" className="text-green-300/80 hover:text-emerald-400">Privacy Policy</Link>
                <Link href="#" className="text-green-300/80 hover:text-emerald-400">Terms</Link>
                <Link href="#" className="text-green-300/80 hover:text-emerald-400">FAQ</Link>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-6 text-sm font-medium">
                <h3 className="text-white font-bold text-lg font-poppins uppercase opacity-90">Contact</h3>

                <div className="flex flex-col gap-4">
                    <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                            <MapPin className="w-4 h-4 text-emerald-400" />
                        </div>
                        <p className="text-green-300/80">Silicon Valley</p>
                    </div>

                    <div className="flex gap-4 items-center">
                        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                            <Phone className="w-4 h-4 text-emerald-400" />
                        </div>
                        <p className="text-green-300/80">+1 (800) GROW-NOW</p>
                    </div>

                    <div className="flex gap-4 items-center">
                        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                            <Mail className="w-4 h-4 text-emerald-400" />
                        </div>
                        <p className="text-green-300/80">support@plantcare.ai</p>
                    </div>
                </div>
            </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 py-6 flex justify-between text-xs text-green-400/60">
            <p>© {new Date().getFullYear()} PlantCare AI</p>
            <p>Built with ❤️ AI</p>
        </div>

    </div>
</footer>
    );
}
