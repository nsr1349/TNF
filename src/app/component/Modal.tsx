'use client'

import React from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
    isOpen : boolean
    closeModal: ()=> void
    children: React.ReactNode;
}

export default function Modal({ isOpen, closeModal, children } : ModalProps) {
    const $modalPotal = document.getElementById('modal-potal')

    if (!$modalPotal) return 

    return ReactDOM.createPortal(
        <>
            {
                isOpen && <>
                    <div className="bg-[rgba(0,0,0,0.5)] fixed w-full h-full top-0 left-0 z-50" onClick={()=> closeModal()}/>
                    <div className="bg-main px-8 py-8 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                        { children }
                    </div>
                </>           
            }
        </>,
        $modalPotal
    );
}