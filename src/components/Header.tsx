"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useModal } from '@/context/ModalContext';
import { useEffect, useState } from 'react';
import { Home, Leaf, ScanLine, Users, ShoppingBag, ChevronDown } from 'lucide-react';

export default function Header() {
  const { openModal } = useModal();
  const [userName, setUserName] = useState<string | null>(null);
  const [userGender, setUserGender] = useState<string>('neutral');

  useEffect(() => {
    const handleStorageChange = () => {
      const activeUser = localStorage.getItem('loggedInUser');
      setUserName(activeUser);
      try {
        const storedUser = localStorage.getItem("plantCareUser");
        if (storedUser) {
          const parsed = JSON.parse(storedUser);
          if (parsed.name === activeUser && parsed.gender) {
            setUserGender(parsed.gender);
          }
        }
      } catch (e) {}
    };

    handleStorageChange();
    
    // Set interval to catch localStorage changes seamlessly across tabs
    const intervalId = setInterval(handleStorageChange, 500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-green-950/80 backdrop-blur-[32px] saturate-150 z-50 shadow-[0_4px_30px_rgb(0,0,0,0.15)] border-b border-green-800/80 transition-all" suppressHydrationWarning>
      <div className="container mx-auto px-6 h-[76px] flex justify-between items-center text-green-50">

        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-11 w-11 overflow-hidden rounded-full border-[2.5px] border-green-600 transition-transform duration-300 group-hover:scale-110 shadow-md flex items-center justify-center bg-white cursor-pointer">
            <Image src="/logo.png" alt="PlantCare AI logo" fill sizes="44px" className="object-cover" />
          </div>
          <span className="text-[22px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-100 to-green-400 tracking-tight ml-1 font-poppins cursor-pointer drop-shadow-sm">PlantCare AI</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 font-bold text-[14px] bg-green-900/40 backdrop-blur-lg p-1.5 rounded-full border border-green-800/50 shadow-inner">
          <Link href="/" className="group flex items-center gap-2 px-4 py-2 rounded-full hover:bg-green-800/80 hover:shadow-[0_2px_12px_rgba(0,0,0,0.2)] transition-all duration-300 text-green-100/90 hover:text-white transform active:scale-95">
            <Home className="w-4 h-4 text-green-400/80 group-hover:text-green-300 transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-0.5" />
            <span>Home</span>
          </Link>

          <div className="group relative flex items-center gap-2 px-4 py-2 rounded-full hover:bg-green-800/80 hover:shadow-[0_2px_12px_rgba(0,0,0,0.2)] transition-all duration-300 text-green-100/90 hover:text-white cursor-pointer select-none">
            <ScanLine className="w-4 h-4 text-green-400/80 group-hover:text-green-300 transition-all duration-300 transform group-hover:rotate-90 group-hover:scale-110" />
            <span>Scan Plant</span>
            <ChevronDown className="w-3.5 h-3.5 text-green-400/60 transition-transform duration-300 transform group-hover:-rotate-180 ml-0.5" />

            {/* Invisible hover bridge utilizing padding to eliminate dead zones */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50">
              <div className="w-full bg-green-950/95 backdrop-blur-[32px] border border-green-800/70 rounded-[28px] shadow-[0_20px_40px_rgba(0,0,0,0.5)] p-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 overflow-hidden">
                <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); openModal('device'); }} className="w-full flex items-center gap-4 px-5 py-4 hover:bg-green-900 transition-colors text-[14px] font-bold text-green-100 text-left rounded-2xl group/btn focus:outline-none mb-1">
                  <span className="text-xl group-hover/btn:scale-110 group-hover/btn:-rotate-6 transition-transform duration-300">📷</span> This Device
                </button>
                <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); openModal('drive'); }} className="w-full flex items-center gap-4 px-5 py-4 hover:bg-green-900 transition-colors text-[14px] font-bold text-green-100 text-left rounded-2xl group/btn focus:outline-none">
                  <span className="text-xl group-hover/btn:scale-110 group-hover/btn:-translate-y-1 transition-transform duration-300">☁️</span> Google Drive
                </button>
              </div>
            </div>
          </div>

          <Link href="/myplants" className="group flex items-center gap-2 px-4 py-2 rounded-full hover:bg-green-800/80 hover:shadow-[0_2px_12px_rgba(0,0,0,0.2)] transition-all duration-300 text-green-100/90 hover:text-white transform active:scale-95">
            <Leaf className="w-4 h-4 text-green-400/80 group-hover:text-green-300 transition-all duration-300 transform group-hover:scale-110 group-hover:-rotate-12" />
            <span>My Plants</span>
          </Link>
          
          <Link href="/community" className="group flex items-center gap-2 px-4 py-2 rounded-full hover:bg-green-800/80 hover:shadow-[0_2px_12px_rgba(0,0,0,0.2)] transition-all duration-300 text-green-100/90 hover:text-white transform active:scale-95">
            <Users className="w-4 h-4 text-green-400/80 group-hover:text-green-300 transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-0.5" />
            <span>Community</span>
          </Link>

          <Link href="/store" className="group flex items-center gap-2 px-4 py-2 rounded-full hover:bg-green-800/80 hover:shadow-[0_2px_12px_rgba(0,0,0,0.2)] transition-all duration-300 text-green-100/90 hover:text-white transform active:scale-95">
            <ShoppingBag className="w-4 h-4 text-green-400/80 group-hover:text-green-300 transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1" />
            <span>Store</span>
          </Link>
        </nav>

        {userName ? (
          <div className="flex items-center gap-4 font-bold text-[15px]">
            <Link 
              href="/profile" 
              className="group relative flex items-center gap-3 bg-green-900/60 hover:bg-green-800 border border-green-800/50 hover:border-green-600 pr-5 pl-1.5 py-1.5 rounded-[30px] transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.25)] overflow-hidden"
            >
              <div className="w-9 h-9 rounded-full relative overflow-hidden bg-gradient-to-tr from-emerald-100 to-green-50 shadow-inner flex-shrink-0 group-hover:scale-105 transition-transform duration-300 border border-green-800">
                <img
                  src={`https://api.dicebear.com/7.x/${userGender === 'female' ? 'lorelei' : userGender === 'male' ? 'micah' : 'notionists'}/svg?seed=${encodeURIComponent(userName)}`} 
                  alt="Avatar"
                  className="w-full h-full object-cover bg-emerald-50"
                />
              </div>
              
              <div className="flex flex-col items-start justify-center">
                  <span className="text-green-50 font-poppins text-[13px] leading-tight max-w-[120px] truncate drop-shadow-sm">{userName}</span>
                  <span className="text-[10px] text-green-400 font-bold uppercase tracking-wider leading-tight mt-0.5">Premium</span>
              </div>
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-5 font-bold text-[15px]">
            <Link href="/signup" className="text-green-200/90 hover:text-green-50 transition-colors hidden sm:block">Sign Up</Link>
            <Link href="/login" className="bg-green-600 text-white px-7 py-2.5 rounded-full shadow-[0_4px_15px_rgba(22,163,74,0.3)] hover:bg-green-500 hover:shadow-[0_8px_25px_rgba(22,163,74,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center">Log In</Link>
          </div>
        )}

      </div>
    </header>
  );
}
