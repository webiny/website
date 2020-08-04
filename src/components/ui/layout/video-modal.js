import React, { createContext, useContext, useState } from "react";
import ModalVideo from "react-modal-video";

const defaultContextValue = { isModelOpen: false, setModalOpen: () => null };

const ModalContext = createContext(defaultContextValue);

const ModalProvider = ({ children }) => {
    const { isModelOpen, setModalOpen, videoId, setVideoId } = useModal();

    return (
        <ModalContext.Provider value={{ isModelOpen, setModalOpen, videoId, setVideoId }}>
            {children}
            <YoutubeVideoModal videoId={videoId} />
        </ModalContext.Provider>
    );
};

const useModal = () => {
    const [isModelOpen, setModalOpen] = useState(false);
    const [videoId, setVideoId] = useState(false);

    return { isModelOpen, setModalOpen, videoId, setVideoId };
};

const YoutubeVideoModal = () => {
    const { isModelOpen, setModalOpen, videoId } = useContext(ModalContext);

    return (
        <ModalVideo
            channel="youtube"
            isOpen={isModelOpen}
            videoId={videoId}
            onClose={() => setModalOpen(false)}
        />
    );
};

export { YoutubeVideoModal, useModal, ModalProvider, ModalContext };
