"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { User, Mail, Phone, LogOut, Shield, Award, ChevronRight, Edit3, Settings, LifeBuoy } from "lucide-react";

export default function Profile() {
  const router = useRouter();
  const [userData, setUserData] = useState<{name: string, email: string, phone: string, gender: string} | null>(null);

  useEffect(() => {
    const loggedInUserName = localStorage.getItem("loggedInUser");
    if (!loggedInUserName) {
      router.push("/login");
      return;
    }

    const storedUser = localStorage.getItem("plantCareUser");
    if (storedUser) {
      try {
        const parsed = JSON.parse(storedUser);
        setUserData({
            name: parsed.name,
            email: parsed.email,
            phone: parsed.phone,
            gender: parsed.gender || 'neutral'
        });
      } catch (e) {
          console.error(e);
      }
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    router.push("/login");
  };

  if (!userData) {
    return (
      <div className="min-h-screen bg-green-50/50 flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin shadow-lg"></div>
          <p className="mt-5 text-green-800 font-bold tracking-wide">Loading Profile...</p>
        </div>
      </div>
    );
  }

  const avatarCollection = userData.gender === 'female' ? 'lorelei' : userData.gender === 'male' ? 'micah' : 'notionists';

  return (
    <main className="min-h-screen bg-green-50/30 pt-[120px] pb-24 relative overflow-hidden font-sans">
        {/* Dynamic Abstract Background (All Green Tones) */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-green-300/30 to-emerald-400/20 rounded-full mix-blend-multiply filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-gradient-to-tr from-emerald-300/20 to-green-400/20 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
            {/* Page Header */}
            <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100/80 text-green-800 text-xs font-bold uppercase tracking-wider mb-4 border border-green-200">
                        <Shield className="w-4 h-4" /> Professional Dashboard
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-green-950 font-poppins tracking-tight">Account Overview</h1>
                    <p className="text-green-800/60 mt-3 text-lg max-w-xl font-medium">Manage your personal settings, view premium statistics, and customize your experience.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left Column - User Card */}
                <div className="lg:col-span-4">
                    <div className="bg-white/90 backdrop-blur-2xl rounded-[32px] shadow-[0_8px_30px_rgba(21,128,61,0.06)] border border-green-100/80 p-8 flex flex-col items-center relative overflow-hidden">
                        {/* decorative element */}
                        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-green-500/20 to-emerald-600/30 shadow-inner"></div>

                        <div className="relative w-36 h-36 rounded-full mt-4 mb-6 p-1.5 bg-gradient-to-tr from-green-400 via-emerald-500 to-teal-400 shadow-[0_15px_35px_rgba(16,185,129,0.25)] group z-10">
                            <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden relative">
                                <img
                                  src={`https://api.dicebear.com/7.x/${avatarCollection}/svg?seed=${encodeURIComponent(userData.name)}`}
                                  alt="Profile Avatar"
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 bg-emerald-50"
                                />
                                <div className="absolute inset-0 bg-green-950/60 hidden group-hover:flex items-center justify-center backdrop-blur-sm cursor-pointer transition-all duration-300">
                                    <Edit3 className="text-white w-8 h-8 drop-shadow-lg" />
                                </div>
                            </div>
                        </div>
                        
                        <h2 className="text-2xl font-bold text-green-950 font-poppins w-full truncate text-center z-10">{userData.name}</h2>
                        <p className="text-green-700/60 font-semibold text-sm mt-1 z-10">{userData.email}</p>
                        
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-50 to-green-100 text-emerald-800 rounded-2xl text-sm font-bold mt-5 border border-emerald-200/60 shadow-sm z-10 hover:shadow-md transition-shadow cursor-default">
                            <Award className="w-4 h-4 text-emerald-600" /> Premium Member
                        </div>

                        <div className="w-full h-[1px] bg-green-100/80 my-8 z-10"></div>

                        {/* Quick Stats */}
                        <div className="w-full grid grid-cols-2 gap-4 z-10">
                            <div className="bg-green-50/80 rounded-2xl p-5 border border-green-100 flex flex-col items-center cursor-pointer hover:bg-white hover:shadow-[0_10px_20px_rgba(21,128,61,0.08)] hover:-translate-y-1 hover:border-green-300 transition-all duration-300 group">
                                <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 group-hover:scale-110 transition-transform">12</span>
                                <span className="text-[11px] font-bold text-green-600/60 uppercase tracking-widest mt-2 group-hover:text-green-600 transition-colors">Plants</span>
                            </div>
                            <div className="bg-green-50/80 rounded-2xl p-5 border border-green-100 flex flex-col items-center cursor-pointer hover:bg-white hover:shadow-[0_10px_20px_rgba(21,128,61,0.08)] hover:-translate-y-1 hover:border-green-300 transition-all duration-300 group">
                                <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 group-hover:scale-110 transition-transform">4</span>
                                <span className="text-[11px] font-bold text-green-600/60 uppercase tracking-widest mt-2 group-hover:text-green-600 transition-colors">Badges</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Details and Actions */}
                <div className="lg:col-span-8 flex flex-col gap-8">
                    {/* Personal Information */}
                    <div className="bg-white/90 backdrop-blur-2xl rounded-[32px] shadow-[0_8px_30px_rgba(21,128,61,0.06)] border border-green-100/80 p-8 md:p-10">
                        <div className="flex justify-between items-center mb-8 pb-6 border-b border-green-100">
                            <div>
                                <h3 className="text-2xl font-bold text-green-950 font-poppins">Personal Details</h3>
                                <p className="text-green-800/60 font-medium text-sm mt-1">Update your personal information and contacts.</p>
                            </div>
                            <button className="flex items-center gap-2 text-sm font-bold text-green-700 hover:text-white bg-green-50 hover:bg-green-700 px-5 py-2.5 rounded-xl border border-green-200 hover:border-green-700 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5">
                                <Edit3 className="w-4 h-4" /> Edit
                            </button>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col p-5 bg-green-50/50 rounded-2xl border border-green-100 hover:border-green-300 hover:bg-white transition-all group hover:shadow-md">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 bg-white border border-green-100/50 rounded-xl flex items-center justify-center shadow-sm text-green-600 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                                        <User className="w-5 h-5" />
                                    </div>
                                    <p className="text-xs font-bold text-green-600/60 uppercase tracking-widest">Full Name</p>
                                </div>
                                <p className="font-semibold text-green-900 text-lg ml-1">{userData.name}</p>
                            </div>

                            <div className="flex flex-col p-5 bg-green-50/50 rounded-2xl border border-green-100 hover:border-green-300 hover:bg-white transition-all group hover:shadow-md md:col-span-1">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 bg-white border border-green-100/50 rounded-xl flex items-center justify-center shadow-sm text-green-600 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <p className="text-xs font-bold text-green-600/60 uppercase tracking-widest">Email Address</p>
                                </div>
                                <p className="font-semibold text-green-900 text-lg ml-1 truncate">{userData.email}</p>
                            </div>

                            <div className="flex flex-col p-5 bg-green-50/50 rounded-2xl border border-green-100 hover:border-green-300 hover:bg-white transition-all group hover:shadow-md md:col-span-2">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 bg-white border border-green-100/50 rounded-xl flex items-center justify-center shadow-sm text-green-600 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <p className="text-xs font-bold text-green-600/60 uppercase tracking-widest">Phone Number</p>
                                </div>
                                <p className="font-semibold text-green-900 text-lg ml-1">{userData.phone || "Not provided"}</p>
                            </div>
                        </div>
                    </div>

                    {/* Account Settings / Logout */}
                    <div className="bg-white/90 backdrop-blur-2xl rounded-[32px] shadow-[0_8px_30px_rgba(21,128,61,0.06)] border border-green-100/80 p-8 md:p-10">
                        <div className="mb-8 pb-6 border-b border-green-100">
                            <h3 className="text-2xl font-bold text-green-950 font-poppins">Account Actions</h3>
                            <p className="text-green-800/60 font-medium text-sm mt-1">Manage your security preferences and linked accounts.</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <button className="flex items-center justify-between p-5 rounded-2xl bg-green-50/50 border border-green-100 hover:bg-white hover:border-green-300 hover:shadow-[0_4px_15px_rgba(21,128,61,0.08)] transition-all group">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white border border-green-100 shadow-sm text-green-600 rounded-xl flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all duration-300"><Shield className="w-5 h-5"/></div>
                                    <div className="flex flex-col items-start">
                                        <span className="font-bold text-green-900 group-hover:text-green-700 transition-colors">Security Menu</span>
                                        <span className="text-xs text-green-600/60 font-medium mt-0.5">Passwords & 2FA</span>
                                    </div>
                                </div>
                                <ChevronRight className="w-5 h-5 text-green-400 group-hover:text-green-600 group-hover:translate-x-1 transition-transform"/>
                            </button>

                            <button className="flex items-center justify-between p-5 rounded-2xl bg-green-50/50 border border-green-100 hover:bg-white hover:border-green-300 hover:shadow-[0_4px_15px_rgba(21,128,61,0.08)] transition-all group">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white border border-green-100 shadow-sm text-green-600 rounded-xl flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all duration-300"><Settings className="w-5 h-5"/></div>
                                    <div className="flex flex-col items-start">
                                        <span className="font-bold text-green-900 group-hover:text-green-700 transition-colors">Preferences</span>
                                        <span className="text-xs text-green-600/60 font-medium mt-0.5">App settings</span>
                                    </div>
                                </div>
                                <ChevronRight className="w-5 h-5 text-green-400 group-hover:text-green-600 group-hover:translate-x-1 transition-transform"/>
                            </button>
                            
                            <button className="flex items-center justify-between p-5 rounded-2xl bg-green-50/50 border border-green-100 hover:bg-white hover:border-green-300 hover:shadow-[0_4px_15px_rgba(21,128,61,0.08)] transition-all group md:col-span-2">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white border border-green-100 shadow-sm text-emerald-600 rounded-xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300"><LifeBuoy className="w-5 h-5"/></div>
                                    <div className="flex flex-col items-start">
                                        <span className="font-bold text-green-900 group-hover:text-emerald-700 transition-colors">Help & Support</span>
                                        <span className="text-xs text-green-600/60 font-medium mt-0.5">Contact our team</span>
                                    </div>
                                </div>
                                <ChevronRight className="w-5 h-5 text-green-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-transform"/>
                            </button>
                        </div>

                        <div className="w-full h-[1px] bg-green-100 my-8"></div>

                        <button 
                            onClick={handleLogout}
                            className="w-full flex items-center justify-center gap-3 p-5 rounded-2xl bg-white border border-green-200 hover:bg-green-700 text-green-700 hover:text-white font-bold transition-all duration-300 shadow-sm hover:shadow-[0_15px_30px_rgba(21,128,61,0.25)] hover:-translate-y-1"
                        >
                            <LogOut className="w-5 h-5" /> Sign Out from Account
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </main>
  );
}
