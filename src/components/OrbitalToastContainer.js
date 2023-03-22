import React from "react";
import { ToastContainer } from 'react-toastify';


export default function OrbitalToastContainer(props) {
    const { position, closeButton, draggable, pauseOnHover, autoClose, newestOnTop } = props;

    return <ToastContainer
        position={position || "top-center"}
        closeButton={closeButton || false}
        draggable={draggable || false}
        pauseOnHover={pauseOnHover || false}
        autoClose={autoClose || 3000}
        newestOnTop={newestOnTop || true}>
    </ToastContainer>
}
