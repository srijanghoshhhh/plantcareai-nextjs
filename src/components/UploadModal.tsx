"use client";

import { useState } from "react";
import { X, UploadCloud, Microscope, Leaf, CheckCircle2, Cloud } from "lucide-react";

export default function UploadModal({ isOpen, onClose, uploadType }: { isOpen: boolean; onClose: () => void; uploadType: 'device' | 'drive' }) {
    const [dragActive, setDragActive] = useState(false);
    const [isScanning, setIsScanning] = useState(false);
    const [scanComplete, setScanComplete] = useState(false);

    if (!isOpen) return null;

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
        else if (e.type === "dragleave") setDragActive(false);
    };

    const simulateScan = () => {
        setIsScanning(true);
        setTimeout(() => {
            setIsScanning(false);
            setScanComplete(true);
            setTimeout(() => {
                onClose();
                setScanComplete(false);
            }, 3000);
        }, 4500);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) simulateScan();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) simulateScan();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-in fade-in duration-300">
            <div className="relative bg-green-950/90 backdrop-blur-xl rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl border border-green-100 flex flex-col transform transition-all scale-100 opacity-100">

                {/* Modal Header */}
                <div className="relative p-7 pb-4 flex justify-between items-center z-10">
                    <div>
                        <h2 className="text-2xl font-extrabold text-green-900 font-poppins tracking-tight flex items-center gap-2">
                            <Microscope className="w-6 h-6 text-green-600" />
                            Scan Your Plant
                        </h2>
                        <p className="text-gray-500 text-sm mt-1">Upload a photo to let PlantCare AI instantly diagnose it.</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Modal Body / Upload Area */}
                <div className="p-7 pt-2 relative z-10 h-[320px] flex flex-col items-center justify-center transition-all">

                    {isScanning ? (
                        <div className="flex flex-col items-center justify-center h-full w-full animate-in zoom-in duration-500">
                            <div className="relative w-28 h-28 flex justify-center items-center">
                                <div className="absolute inset-0 rounded-full border-4 border-green-100 border-t-green-600 animate-spin"></div>
                                <div className="absolute inset-0 rounded-full border-4 border-emerald-100 border-b-emerald-400 animate-[spin_2s_linear_infinite_reverse]"></div>
                                <Leaf className="w-10 h-10 text-green-700 animate-pulse" />
                            </div>
                            <h3 className="mt-6 text-xl font-bold text-green-900 font-poppins">Analyzing Leaf Patterns...</h3>
                            <p className="text-gray-500 mt-2 text-sm max-w-xs text-center">PlantCare AI is cross-referencing thousands of diseases with your image.</p>
                        </div>
                    ) : scanComplete ? (
                        <div className="flex flex-col items-center justify-center h-full w-full animate-in slide-in-from-bottom-5 fade-in duration-500 text-center">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-5 relative">
                                <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
                                <CheckCircle2 className="w-10 h-10 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-green-900 font-poppins">Diagnosis Complete</h3>
                            <p className="text-green-700 mt-2 font-medium bg-green-50 px-4 py-2 rounded-full border border-green-200">Result: Healthy (No anomalies detected)</p>
                            <p className="text-gray-400 text-sm mt-6">Redirecting to results dashboard...</p>
                        </div>
                    ) : uploadType === 'drive' ? (
                        <div className="w-full h-full flex flex-col items-center justify-center border-[2.5px] border-dashed border-sky-300 bg-sky-50/30 rounded-3xl transition-all duration-300 relative group">
                            <div className="w-20 h-20 bg-white rounded-2xl shadow-[0_4px_15px_rgba(14,165,233,0.15)] flex items-center justify-center mb-5 group-hover:shadow-[0_8px_25px_rgba(14,165,233,0.25)] group-hover:-translate-y-1 transition-all cursor-pointer" onClick={(e) => {e.preventDefault(); simulateScan()}}>
                                <Cloud className="w-10 h-10 text-sky-500 group-hover:text-sky-600 transition-colors" />
                            </div>
                            <p className="text-lg font-bold text-sky-900">Connect to Google Drive</p>
                            <p className="text-sky-600/70 text-sm mt-1 mb-5 font-medium text-center max-w-[220px]">Select your plant images directly from the cloud.</p>

                            <button onClick={(e) => {e.preventDefault(); simulateScan()}} className="bg-sky-500 text-white font-bold px-7 py-2.5 rounded-full hover:bg-sky-600 transition-colors shadow-md hover:shadow-lg flex items-center gap-2">
                                <Cloud className="w-5 h-5" /> Browse Drive
                            </button>
                        </div>
                    ) : (
                        <form
                            onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}
                            className={`w-full h-full flex flex-col items-center justify-center border-[2.5px] border-dashed rounded-3xl transition-all duration-300 relative group cursor-pointer ${dragActive ? "border-green-500 bg-green-50/50 scale-[1.02]" : "border-green-200 bg-emerald-50/30 hover:bg-emerald-50 hover:border-green-300"
                                }`}
                        >
                            <input type="file" id="fileInput" accept="image/*" className="hidden" onChange={handleChange} />

                            <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-5 group-hover:shadow-md group-hover:-translate-y-1 transition-all">
                                <UploadCloud className={`w-10 h-10 transition-colors ${dragActive ? "text-green-600" : "text-green-400 group-hover:text-green-500"}`} />
                            </div>
                            <p className="text-lg font-bold text-green-900">Drag & Drop your image here</p>
                            <p className="text-gray-400 text-sm mt-1 mb-5 font-medium">PNG, JPG or JPEG (Max 10MB)</p>

                            <label htmlFor="fileInput" className="bg-white border border-green-200 text-green-700 font-bold px-6 py-2.5 rounded-full hover:bg-green-50 hover:border-green-300 transition-colors cursor-pointer shadow-sm">
                                Browse Files
                            </label>
                        </form>
                    )}

                </div>

                {/* Decorative background vectors */}
                {!isScanning && !scanComplete && <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-green-400 rounded-full opacity-5 blur-[80px] pointer-events-none"></div>}
            </div>
        </div>
    );
}
