"use client";
import React, {useState, useEffect, use} from "react";
export default function Footer() {

    return (
        <footer className='bg-gray-light text-blue-dark p-4
        dark:bg-gray-dark dark:text-gray-light transition-colors duration-300'>
            <div className='container mx-auto text-center'>
                <p className='text-sm'>© {new Date().getFullYear()} Pablo León. Todos los derechos reservados.</p>
                <p className='text-xs'>Diseñado y desarrollado por Pablo León</p>
            </div>
        </footer>
    );
}