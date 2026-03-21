"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Lock, Mail, ArrowRight, X, Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [forgotModalOpen, setForgotModalOpen] = useState(false);
  const [forgotStep, setForgotStep] = useState(1);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotOtp, setForgotOtp] = useState("");
  const [enteredOtp, setEnteredOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [forgotError, setForgotError] = useState("");

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setForgotError("");

    if (forgotStep === 1) {
      const storedUser = localStorage.getItem("plantCareUser");
      if (storedUser) {
        let userData;
        try {
          userData = JSON.parse(storedUser);
        } catch (err) {
          userData = null;
        }
        if (userData && userData.email === forgotEmail) {
          const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
          setForgotOtp(generatedOtp);
          // Required: Popup OTP appearing on screen
          alert(`Your Password Reset OTP is: ${generatedOtp}`);
          setForgotStep(2);
        } else {
          setForgotError("Email not found.");
        }
      } else {
        setForgotError("No registered user found.");
      }
    } else if (forgotStep === 2) {
      if (enteredOtp === forgotOtp) {
        setForgotStep(3);
      } else {
        setForgotError("Incorrect OTP.");
      }
    } else if (forgotStep === 3) {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&\-])[A-Za-z\d@$!%*?&\-]{8,}$/;
      if (!passwordRegex.test(newPassword)) {
        setForgotError("Password must be at least 8 chars long, and include an uppercase letter, lowercase letter, number, and special character.");
        return;
      }
      const storedUser = localStorage.getItem("plantCareUser");
      if (storedUser) {
        const userData = JSON.parse(storedUser);
        userData.password = newPassword;
        localStorage.setItem("plantCareUser", JSON.stringify(userData));
        alert("Password updated successfully! Please log in.");
        setForgotModalOpen(false);
        setForgotStep(1);
        setForgotEmail("");
        setEnteredOtp("");
        setNewPassword("");
      }
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Simulate network request
      await new Promise((resolve) => setTimeout(resolve, 800));

      const storedUser = localStorage.getItem("plantCareUser");
      if (storedUser) {
        let userData;
        try {
          userData = JSON.parse(storedUser);
        } catch (e) {
          userData = null;
        }

        if (userData && userData.email === email && userData.password === password) {
          localStorage.setItem("loggedInUser", userData.name);
          router.push("/myplants");
          return;
        }
      }

      alert("Login failed! Invalid credentials or user does not exist.");
    } catch (error: any) {
      console.error(error);
      alert("Login failed! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-green-50 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-pulse animation-delay-500"></div>

      <div className="w-full max-w-4xl bg-white/60 backdrop-blur-2xl rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-white flex flex-col md:flex-row overflow-hidden relative z-10">
        {/* Image Section */}
        <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[600px] bg-green-900 overflow-hidden">
          <Image
            src="/bgimg.jpg"
            alt="Login Banner"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover opacity-80 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green-950/90 via-green-900/40 to-transparent"></div>
          <div className="absolute bottom-10 left-10 right-10">
            <h2 className="text-white text-3xl font-bold font-poppins mb-3">
              Welcome Back to PlantCare.
            </h2>
            <p className="text-green-100/80 text-sm leading-relaxed">
              Login to track your plant scans, participate in the community, and
              keep your garden thriving natively.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-center bg-white">
          <div className="mb-10 text-center md:text-left">
            <h1 className="text-3xl font-extrabold text-green-900 font-poppins">
              Sign In
            </h1>
            <p className="text-gray-500 mt-2 text-sm">
              Please enter your details to access your account.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">
                Email Address
              </label>
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
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-bold text-gray-700">
                  Password
                </label>
                <button
                  type="button"
                  onClick={(e) => { e.preventDefault(); setForgotModalOpen(true); }}
                  className="text-xs font-bold text-green-600 hover:text-green-800"
                >
                  Forgot password?
                </button>
              </div>
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
              {loading ? "Authenticating..." : "Sign In to Dashboard"}
              {!loading && <ArrowRight className="w-5 h-5" />}
            </button>
          </form>

          <p className="mt-10 text-center text-sm text-gray-600 font-medium">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-green-700 font-bold hover:underline"
            >
              Create one for free
            </Link>
          </p>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {forgotModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative">
            <button 
              onClick={() => { setForgotModalOpen(false); setForgotStep(1); setForgotError(""); }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold text-green-900 mb-2">Reset Password</h2>
            <p className="text-gray-500 mb-6 text-sm">
              {forgotStep === 1 ? "Enter your email to receive an OTP." : 
               forgotStep === 2 ? "Enter the OTP shown in the pop-up." : 
               "Create a new strong password."}
            </p>

            <form onSubmit={handleForgotSubmit} className="space-y-4">
              {forgotError && (
                <div className="p-3 bg-red-50 text-red-600 rounded-xl text-sm font-medium border border-red-200">
                  {forgotError}
                </div>
              )}

              {forgotStep === 1 && (
                <div>
                  <label className="text-sm font-bold text-gray-700 ml-1 block mb-1">Email Address</label>
                  <input
                    type="email"
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="hello@plantcare.ai"
                  />
                </div>
              )}

              {forgotStep === 2 && (
                <div>
                  <label className="text-sm font-bold text-gray-700 ml-1 block mb-1">Enter OTP</label>
                  <input
                    type="text"
                    value={enteredOtp}
                    onChange={(e) => setEnteredOtp(e.target.value)}
                    required
                    maxLength={6}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500 tracking-widest font-mono text-lg"
                    placeholder="123456"
                  />
                </div>
              )}

              {forgotStep === 3 && (
                <div>
                  <label className="text-sm font-bold text-gray-700 ml-1 block mb-1">New Password</label>
                  <div className="relative">
                    <input
                      type={showNewPassword ? "text" : "password"}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                      className="w-full px-4 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-green-600 focus:outline-none"
                    >
                      {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3.5 rounded-xl shadow-[0_10px_20px_rgba(21,128,61,0.2)] transition-all"
              >
                {forgotStep === 1 ? "Send OTP" : forgotStep === 2 ? "Verify OTP" : "Save New Password"}
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
