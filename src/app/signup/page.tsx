"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Lock, Mail, User, ArrowRight, Phone, Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("male");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        // Validations
        const nameRegex = /^[A-Za-z\s]{2,}$/;
        if (!nameRegex.test(name)) {
            setError("Name must contain only letters and be at least 2 characters long.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
            setError("Phone number must be exactly 10 digits.");
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&\-])[A-Za-z\d@$!%*?&\-]{8,}$/;
        if (!passwordRegex.test(password)) {
            setError("Password must be at least 8 chars long, and include an uppercase letter, lowercase letter, number, and special character.");
            return;
        }

        setLoading(true);
        try {
            // Simulate network request
            await new Promise(resolve => setTimeout(resolve, 800));
            
            // Store user dynamically
            const userData = { name, email, phone, gender, password };
            localStorage.setItem("plantCareUser", JSON.stringify(userData));
            
            alert("Account created successfully! Please log in.");
            router.push("/login");
        } catch (error: any) {
            console.error(error);
            alert("Signup failed! Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-green-50 flex items-center justify-center p-6 relative overflow-hidden">
            <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-pulse"></div>

            <div className="w-full max-w-4xl bg-white/60 backdrop-blur-2xl rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-white flex flex-col md:flex-row-reverse overflow-hidden relative z-10">

                <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[600px] bg-green-900 border-l border-white/20">
                    <Image src="/leaf.jpg" alt="Signup Banner" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-80 mix-blend-overlay" priority onError={(e) => e.currentTarget.style.display = "none"} />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900 via-green-800/60 to-transparent"></div>
                    <div className="absolute bottom-10 left-10 right-10">
                        <h2 className="text-white text-3xl font-bold font-poppins mb-3">Join the Growing Community.</h2>
                        <p className="text-green-100/80 text-sm leading-relaxed">Sign up to diagnose thousands of plants using AI, access exclusive store discounts, and join experts worldwide.</p>
                    </div>
                </div>

                <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-center bg-white shadow-[10px_0_30px_rgba(0,0,0,0.02)] z-10">
                    <div className="mb-10">
                        <h1 className="text-3xl font-extrabold text-green-900 font-poppins">Create Account</h1>
                        <p className="text-gray-500 mt-2 text-sm max-w-xs">Start your garden journey instantly for free.</p>
                    </div>

                    <form onSubmit={handleSignup} className="space-y-5">
                        {error && (
                            <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-medium">
                                {error}
                            </div>
                        )}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                    <User className="w-5 h-5" />
                                </div>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all shadow-sm"
                                    placeholder="Jane Doe"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all shadow-sm"
                                    placeholder="hello@plantcare.ai"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all shadow-sm"
                                    placeholder="1234567890"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">Gender</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                    <User className="w-5 h-5" />
                                </div>
                                <select
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                    required
                                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all shadow-sm appearance-none"
                                >
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">Password</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                    <Lock className="w-5 h-5" />
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full pl-12 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all shadow-sm"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-green-600 focus:outline-none"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-4 rounded-2xl shadow-[0_10px_20px_rgba(21,128,61,0.2)] hover:shadow-[0_15px_30px_rgba(21,128,61,0.3)] transition-all flex items-center justify-center gap-2 mt-4 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:hover:translate-y-0"
                        >
                            {loading ? "Creating Account..." : "Create Account"}
                            {!loading && <ArrowRight className="w-5 h-5" />}
                        </button>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-600 font-medium">
                        Already have an account? <Link href="/login" className="text-green-700 font-bold hover:underline">Sign In here</Link>
                    </p>
                </div>
            </div>
        </main>
    );
}
