"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import UploadModal from "@/components/UploadModal";

export type UploadSource = 'device' | 'drive';

interface ModalContextType {
    isModalOpen: boolean;
    uploadType: UploadSource;
    openModal: (type?: UploadSource) => void;
    closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [uploadType, setUploadType] = useState<UploadSource>('device');

    const openModal = (type: UploadSource = 'device') => {
        setUploadType(type);
        setIsModalOpen(true);
    };
    const closeModal = () => setIsModalOpen(false);

    return (
        <ModalContext.Provider value={{ isModalOpen, uploadType, openModal, closeModal }}>
            {children}
            <UploadModal isOpen={isModalOpen} onClose={closeModal} uploadType={uploadType} />
        </ModalContext.Provider>
    );
}

export function useModal() {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
}
