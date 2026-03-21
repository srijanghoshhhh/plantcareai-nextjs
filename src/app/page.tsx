"use client";

import Image from "next/image";
import { useModal } from "@/context/ModalContext";
import { useState } from "react";
import { Leaf, Box, Camera, RefreshCw, Cpu, Layers } from "lucide-react";

const flipCards = [
  {
    icon: Leaf,
    title: "Deep Learning AI",
    frontText: "Convolutional Neural Networks (CNNs) & ResNet",
    backText: "This system uses deep learning methods to automatically recognise and diagnose plant illnesses from photos of leaves. Leveraging transfer learning and pre-trained models like ResNet, the CNN architecture reaches a classification accuracy of over 90%, indicating great dependability in identifying minor symptoms."
  },
  {
    icon: Box,
    title: "System Overview",
    frontText: "Architecture & Technical Layouts",
    backText: "The proposed system model is divided into crucial stages: 1. Data Collection & Pre-processing, 2. Model Architecture Design, 3. Model Training & Validation, and 4. Deployment. Every step guarantees the system's scalability, accuracy, and resilience in a variety of real-world precision agriculture scenarios."
  },
  {
    icon: Camera,
    title: "Data Acquisition",
    frontText: "Field Images, Datasets & Crowdsourcing",
    backText: "A comprehensive collection of healthy and diseased samples was assembled. Pictures of sugarcane and coffee leaves are gathered from Field Images (natural farm settings), Public Datasets (like Plant Village), and Custom Contributions (uploaded by farmers and researchers). Expert validation ensures the correctness of annotations."
  },
  {
    icon: RefreshCw,
    title: "Data Augmentation",
    frontText: "Enhancing the Training Dataset",
    backText: "To increase diversity and guarantee the model's resilience in varying environmental circumstances, advanced augmentation techniques are utilized. This includes rotation, flipping, cropping, noise addition, contrast adjustments, and synthetic data generation to fill gaps for underrepresented disease categories."
  },
  {
    icon: Cpu,
    title: "Model Processing",
    frontText: "Pre-processing & Attention Mechanisms",
    backText: "Images are resized to a standard 224x224 pixels and normalized for optimal convergence. Layers of the pre-trained model are fine-tuned on target crops. An attention module actively highlights critical regions in the image (like diseased spots) to drastically improve interpretability and diagnostic accuracy."
  },
  {
    icon: Layers,
    title: "Training & IoT",
    frontText: "Multi-Disease Classification & Validation Splits",
    backText: "Uses a SoftMax function for multi-label classification. The data split is 70% Training, 20% Validation, and 10% Testing. Built for real-world integration with Intuitive web/mobile interfaces and IoT devices for automatic monitoring—driving sustainability and lowering crop losses globally."
  }
];

export default function Home() {
  const { openModal } = useModal();
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  return (
    <main className="w-full min-h-screen bg-stone-50 flex flex-col font-sans">
      {/* HERO SECTION */}
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-start pt-16 shrink-0">
        <div className="absolute inset-0 z-0 bg-green-950">
          <Image
            src="/bgimg.jpg"
            alt="Various plants in pots"
            fill
            sizes="100vw"
            className="object-cover object-center animate-kenburns opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-950/95 via-green-900/70 to-transparent"></div>
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        <div className="container mx-auto relative z-10 px-6 sm:px-12 md:px-16 lg:px-24 max-w-[1400px] mb-10">
          <div className="max-w-4xl pt-10">
            <h1 className="text-white text-[3.5rem] sm:text-7xl lg:text-[6.5rem] font-extrabold leading-[1.05] tracking-tight drop-shadow-2xl mb-8 animate-fade-in-up">
              Detect Plant <span className="text-green-400 opacity-90 relative inline-block after:absolute after:w-full after:h-4 after:bg-green-600/30 after:bottom-2 after:left-0 after:-z-10 text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-400">Diseases</span> Instantly With AI
            </h1>

            <p className="text-green-50 text-xl md:text-3xl font-medium drop-shadow-md mb-3 animate-fade-in-up animation-delay-150 max-w-2xl leading-snug">
              Upload a photo of your plant and get instant diagnosis
            </p>
            <p className="text-green-100/90 text-lg md:text-2xl font-medium drop-shadow-md mb-14 animate-fade-in-up animation-delay-300 max-w-xl">
              with expert-verified results.
            </p>

            <div className="flex flex-col xl:flex-row items-start xl:items-center gap-8 animate-fade-in-up animation-delay-500">
              <button
                onClick={() => openModal('device')}
                className="group relative overflow-hidden bg-white text-green-900 font-bold px-8 py-4 rounded-full shadow-[0_10px_40px_rgba(255,255,255,0.25)] hover:shadow-[0_15px_50px_rgba(255,255,255,0.4)] transition-all duration-300 ease-out transform hover:-translate-y-1 flex items-center gap-4"
              >
                <span className="relative z-10 font-poppins text-[19px] tracking-wide ml-2">Start Scanning</span>
                <span className="relative z-10 w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center group-hover:bg-green-700 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <svg className="w-5 h-5 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <div className="flex flex-col sm:flex-row gap-5 sm:gap-7 text-green-50 font-poppins text-sm md:text-base opacity-95 backdrop-blur-md bg-black/25 py-3.5 px-7 rounded-2xl border border-white/15 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </div>
                  <span className="font-semibold tracking-wide">10,000+ Diagnosed</span>
                </div>
                <div className="hidden sm:block text-white/30 font-light">|</div>
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 relative"><span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.6)]"></span></div>
                  <span className="font-semibold tracking-wide">98% Accuracy</span>
                </div>
                <div className="hidden sm:block text-white/30 font-light">|</div>
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 relative"><span className="relative inline-flex rounded-full h-3 w-3 bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.6)]"></span></div>
                  <span className="font-semibold tracking-wide">Expert Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT DETAILS (FLIP CARDS) SECTION */}
      <section className="w-full py-28 relative z-20 bg-[#F8FAFC]">
        {/* subtle bg blur */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-200/40 rounded-full mix-blend-multiply filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200/40 rounded-full mix-blend-multiply filter blur-[100px] animate-pulse"></div>

        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm border border-green-200">
              <Leaf className="w-4 h-4" /> Global Agricultural Innovation
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-950 font-poppins tracking-tight mb-6">
              Precision Agriculture <br className="hidden md:block" />Through AI Diagnosis
            </h2>
            <p className="text-gray-500 text-[17px] md:text-lg max-w-4xl mx-auto leading-relaxed">
              This project investigates the use of artificial intelligence (AI) to identify and categorise diseases that impact the leaves of sugarcane and coffee, two of the most commercially significant crops in the world. Each year, diseases like sugarcane blight and coffee leaf rust result in significant crop losses, and effective treatment depends on early diagnosis. By facilitating early disease identification, lowering crop losses, and encouraging sustainable farming methods, the technology has the potential to completely transform agriculture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {flipCards.map((card, idx) => (
              <div
                key={idx}
                className="group w-full h-[360px] cursor-pointer"
                style={{ perspective: '1200px' }}
                onMouseEnter={() => setFlippedIndex(idx)}
                onMouseLeave={() => setFlippedIndex(null)}
              >
                <div
                  className="relative w-full h-full transition-transform duration-[600ms] shadow-[0_10px_40px_rgba(0,0,0,0.06)] rounded-[32px] group-hover:shadow-[0_20px_50px_rgba(21,128,61,0.15)]"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: flippedIndex === idx ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >

                  {/* Front Side */}
                  <div
                    className="absolute inset-0 w-full h-full bg-white rounded-[32px] p-8 md:p-10 border border-green-100 flex flex-col items-center justify-center text-center"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="w-[84px] h-[84px] bg-green-50 rounded-full flex flex-col items-center justify-center text-green-600 mb-6 shadow-[inset_0_2px_10px_rgba(0,0,0,0.04)] border border-green-100">
                      <card.icon className="w-9 h-9" />
                    </div>
                    <h3 className="text-[26px] font-bold text-green-900 font-poppins tracking-tight mb-3">{card.title}</h3>
                    <p className="text-green-700/80 font-bold text-[15.5px] max-w-[250px] leading-snug">{card.frontText}</p>

                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-green-300 group-hover:text-green-600 transition-colors flex flex-col items-center">
                      <span className="text-[10px] font-bold uppercase tracking-widest bg-green-50 px-3 py-1.5 rounded-full animate-pulse border border-green-100/50">Hover to flip</span>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div
                    className="absolute inset-0 w-full h-full bg-gradient-to-b from-green-600 to-emerald-800 rounded-[32px] p-8 md:p-10 flex flex-col items-start justify-center text-white"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <h3 className="text-[22px] font-bold font-poppins mb-4 border-b border-green-400/30 pb-4 w-full text-transparent bg-clip-text bg-gradient-to-r from-emerald-100 to-white">{card.title} Details</h3>
                    <p className="text-[14.5px] text-green-50 leading-[1.8] font-medium text-left">
                      {card.backText}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>

          <div className="w-full mt-20 p-8 border border-green-200/50 bg-white rounded-[32px] shadow-[0_8px_30px_rgba(21,128,61,0.06)] flex flex-col md:flex-row items-center gap-8 group hover:shadow-[0_15px_40px_rgba(21,128,61,0.12)] transition-all duration-500">
            <div className="relative w-full md:w-[350px] h-48 md:h-[180px] rounded-[24px] overflow-hidden shadow-inner flex-shrink-0">
              <Image src="/leaf.jpg" alt="Future Research Vision" fill sizes="(max-width: 768px) 100vw, 350px" className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-r from-green-950/40 to-emerald-900/10"></div>
            </div>
            <div className="flex-1">
              <p className="text-green-900/80 text-base md:text-[17px] font-medium leading-relaxed max-w-3xl">
                <span className="text-green-600 font-extrabold flex items-center gap-2 mb-3 text-lg tracking-tight">★ Future Vision</span>
                Future research will concentrate on adding more crops to the system, utilising cutting-edge strategies like attention processes to improve performance even more, and strengthening the system's resistance to changes in image quality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
